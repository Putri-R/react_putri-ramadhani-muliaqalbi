import './style.css';
import { useState } from 'react';

export default function Contact(){
    // menampilkan data yang diinput user
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        questionInput: '',
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const { firstName, lastName, email, questionInput } = formData;
    
        const dataDetails = `
          Your Data
    
          First Name    : ${firstName}
          Last Name     : ${lastName}
          Email Address : ${email}
          Your Question : ${questionInput}
    
          Thank you for contacting us!
        `;
        alert(dataDetails);
    };
    
    return(
        <>
            <section className="contact">
                <div className="contact-group">
                    <h3>Any Questions ?</h3>
                    <p>Feel free to contact us for any of your inquiries.</p>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="form-group" style={{ marginTop: 30 }}>
                        <label htmlFor="first-name">First Name</label>
                        <input 
                            type="text" 
                            name="firstName" 
                            id="first-name" 
                            value={formData.firstName}
                            onChange={handleChange}
                            required="" 
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="last-name">Last Name</label>
                        <input 
                            type="text" 
                            name="lastName" 
                            id="last-name" 
                            value={formData.lastName}
                            onChange={handleChange}
                            required="" 
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Your Email Address</label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="youremail@gmail.com"
                            required=""
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="question">Your Question</label>
                        <textarea
                            type="text"
                            name="questionInput"
                            id="question-input"
                            value={formData.questionInput}
                            onChange={handleChange}
                            placeholder="your question here"
                            required=""
                        />
                    </div>
                    <div className="form-group">
                        <button type="submit" id="submit-btn">
                            Submit
                        </button>
                    </div>
                    <p>or you can also contact us through our social media below</p>
                    <p style={{ marginBottom: 20 }}>
                        <i className="fa-brands fa-whatsapp" style={{ color: "#ffffff" }} /> +62
                        8120 0114 523
                    </p>
                </form>
            </section>
        </>
    )
}