import * as React from "react";

import "./InfoPhoneMail.scss";

function InfoPhoneMail() {
    return (
        <div className="main-contact-data">
            <div className="main-contact-data__blockMail">
                <p className="main-contact-data__blockMail-connectHeader">Электронная почта</p>
                <p className="main-contact-data__blockMail-connectInfo">drive@skillfactory.com</p>
            </div>
            <div className="main-contact-data__blockPhone">
                <p className="main-contact-data__blockPhone-connectHeader">Телефон</p>
                <p className="main-contact-data__blockPhone-connectInfo">+7 912 123-45-67</p>
            </div>
        </div>
    );
}

export default InfoPhoneMail;