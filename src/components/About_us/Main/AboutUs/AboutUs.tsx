import * as React from "react";

import "./About_us.scss";

function AboutUs() {
    return (
        <section className="main-aboutUs">
            <img className="main-aboutUs__img" src={('../../../../asset/firstImg.svg')} alt="Image" />
            <h1 className="main-aboutUs__heading">О нас</h1> 
            <p className="main-aboutUs__text">Это учебный проект, созданный с целью получения боевого опыта в разработке настоящего живого веб-приложения. Этот сервис имитирует работу каршеринга, в котором можно не только арендовать автомобили, но и сдавать их в аренду.</p>
        </section>
    );
}

export default AboutUs;