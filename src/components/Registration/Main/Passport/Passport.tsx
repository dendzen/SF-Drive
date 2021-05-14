import * as React from "react";

import "./Passport.scss"


function Passport() {
    return(
        <form>
            <legend>Паспорт</legend>
            <div className="main-InfoAboutYou">
                <span>Серия и номер</span>
                <input className="main-InfoAboutYou_input" type="text" placeholder="0000 000000" />
            </div>
            <div className="main-InfoAboutYou">
                <span>Дата выдачи</span>
                <input className="main-InfoAboutYou_input main-InfoAboutYou_inputSmall imgCalendar" type="text" placeholder="01.01.1970" />
            </div>
            <div className="main-InfoAboutYou">
                <span>Кем выдан</span>
                <input className="main-InfoAboutYou_input" type="text" placeholder="Название органа выдавшего паспорт" />
            </div>
            <div className="main-InfoAboutYou">
                <span>Код подразделения</span>
                <input className="main-InfoAboutYou_input main-InfoAboutYou_inputSmall" type="text" placeholder="000-000" />
            </div>
        </form>
    );
}

export default Passport;