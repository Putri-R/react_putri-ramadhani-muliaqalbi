import './App.css';
import { Button, Form, Input, Layout, Space, Spin } from "antd";
import { LoadingOutlined } from '@ant-design/icons';
import { useForm } from "antd/es/form/Form";
import { openai } from "./configs/openai";
import { useState } from "react";
import Markdown from "react-markdown";

const style = {
  background: "white",
}

const contentStyle = {
  display: "flex",
  justofyCOntent: "center",
  flexDirection: "column",
  gap: "24px",
  textAlign: "center",
  margin: "auto",
  paddingTop: 40,
  minHeight: 120,
  minWidth: 600,
};

function Openai() {
  const [form] = useForm();
  const [responseAI, setResponseAI] = useState();
  const [ isLoading, setIsLoading ] = useState(false);
  const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

  const prompt =
    "Tanyakan sesuatu tentang kucing, seperti jenis kucing, makanan yang cocok untuk kucing, kebiasaan kucing, atau cara merawat kucing. Saya akan mencoba memberikan informasi yang berguna.";

  function onFinish(values) {
    setIsLoading(true);
    openai.chat.completions
      .create({
        model: "gpt-3.5-turbo",
        messages: [
          { role: "system", content: "Anda adalah asisten yang membantu dan mengetahui banyak hal tentang kucing." },
          { role: "user", content: values.query },
          { role: "assistant", content: prompt },
        ],
      })
      .then((response) => {
        setResponseAI(response.choices[0].message.content);
        setIsLoading(false);
      });
  }

  return (
    <Layout style={style}>
      <Layout.Content style={contentStyle}>
        <h2>Your ChatBot Assistant</h2>
        <div className = "content-group">
          <h3>User</h3>
          <Form form={form} onFinish={onFinish}>
            <Form.Item name="query">
              <Input type="text" />
            </Form.Item>
            <Button type="default" htmlType="submit" style={{ backgroundColor: 'hsl(265, 100%, 58%)', color: "white" }}>Send</Button>
          </Form>
          <div>
            <h3>Assistant</h3>
            {responseAI && !isLoading && (
              <div className = "result">
                <Markdown>{responseAI}</Markdown>
              </div>
            )}
          </div>
          {isLoading && (
            <Space size="middle">
              <Spin indicator={antIcon} />
            </Space>
          )}
        </div>

        <div>
          <p>Click <a href='/grammar-correction'>here</a> to go to the grammar correction page</p>
        </div>
      </Layout.Content>
    </Layout>
  );
}

export default Openai;