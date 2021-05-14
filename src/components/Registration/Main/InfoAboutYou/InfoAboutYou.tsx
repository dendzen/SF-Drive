import * as React from "react";

import "./InfoAboutYou.scss"


function InfoAboutYou() {
    return(
        <form>
            <legend>Информация о вас</legend>
            <div className="main-InfoAboutYou">
                <span>ФИО</span>
                <input className="main-InfoAboutYou_input" type="text" placeholder="ФИО полностью" />
            </div>
            <div className="main-InfoAboutYou">
                <span>Дата рождения</span>
                <input className="main-InfoAboutYou_input main-InfoAboutYou_inputSmall imgCalendar" type="text" placeholder="01.01.1970" />
            </div>
            <div className="main-InfoAboutYou">
                <span>Электронная почта</span>
                <input className="main-InfoAboutYou_input" type="text" placeholder="mail@example.com" />
            </div>
            <div className="main-InfoAboutYou">
                <span>Телефон</span>
                <input className="main-InfoAboutYou_input main-InfoAboutYou_inputSmall" type="text" placeholder="+7 900 000-00-00" />
            </div>
        </form>
    );
}

export default InfoAboutYou;