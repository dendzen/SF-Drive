import * as React from "react";

import Header from "./Faq/Header/Header";
import Main from "./Faq/Main/Main";
import Footer from "./Faq/Footer/Footer";

import "./AppFonts.scss";

function AppFaq() {
    return(
        <div className="font">
            <Header />
            <Main />
            <Footer />
        </div>
    );
}

export default AppFaq;