import * as React from "react";

import "./DriverLicense.scss";


function DriverLicense() {
    return(
        <form>
            <legend>Водительское удостоверение</legend>
            <div className="main-InfoAboutYou">
                <span>Серия и номер</span>
                <input className="main-InfoAboutYou_input" type="text" placeholder="0000 000000" />
            </div>
            <div className="main-InfoAboutYou">
                <span>Дата выдачи</span>
                <input className="main-InfoAboutYou_input main-InfoAboutYou_inputSmall imgCalendar" type="text" placeholder="00.00.0000" />
            </div>
        </form>
    );
}

export default DriverLicense;