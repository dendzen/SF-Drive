import * as React from "react";

import "./ImgAnswer.scss";


function ImgAnswers() {
    return(
        <section className="main-FAQ">
            <img className="main-FAQ__img" src={require('../../../../asset/firstImg2.svg')} alt="Image" />
            <h1 className="main-FAQ__heading">Частые вопросы</h1> 
            <p className="main-FAQ__text">Отвечаем на вопросы, которые у вас могут возникнуть.</p>
        </section>  
    );
}

export default ImgAnswers;