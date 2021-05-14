import * as React from "react";

import InfoPhoneMail from "./InfoPhoneMail/InfoPhoneMail";

import "./Contact.scss";

function Contact() {
    return (
        <section className="main-contact">
            <h2 className="main-contact__header">Контакты</h2>
            <InfoPhoneMail />
        </section>
    );
}

export default Contact;