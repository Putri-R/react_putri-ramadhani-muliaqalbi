import bootstrap from './asset/bootstrap-logo.svg.svg';
import React, { useState } from "react";
import { article } from './headerDesc';

export default function ContentChanger() {
    const [title, setTitle] = useState(article.title.en);
    const [desc, setDesc] = useState(article.description.en);

    const handleChangeContent = () => {
        
        if (title === article.title.en) {
        setTitle(article.title.id);
        setDesc(article.description.id);
        } else {
        setTitle(article.title.en);
        setDesc(article.description.en);
        }
    };

    return (
        <div className="main-header">
            <img src={bootstrap} alt="Bootstrap" />
            <h1>{ title }</h1>
            <p>{ desc }</p>
            <div>
                <button onClick={handleChangeContent} type='button' className="changerbtn btn btn-primary" id="changerbtn">Change Language</button>
            </div>
        </div>
    );
}