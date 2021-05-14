import * as React from "react";

import Header from "./Registration/Header/Header";
import Main from "./Registration/Main/Main";
import Footer from "./Registration/Footer/Footer";

import "./AppFonts.scss";

function AppRegistration() {
    return(
        <div className="font">
            <Header />
            <Main />
            <Footer />
        </div>
    );
}

export default AppRegistration;