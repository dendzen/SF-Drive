import * as React from "react";

import Header from "./About_us/Header/Header";
import Main from "./About_us/Main/Main";
import Footer from "./About_us/Footer/Footer";

import "./AppFonts.scss";

function AppAboutUs() {
    return (
        <div className="font">
            <Header />
            <Main />
            <Footer />
        </div>
    );
}

export default AppAboutUs;