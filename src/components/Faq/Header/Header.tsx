import * as React from "react";

import Logo from "./Logo/Logo";
import Navbar from "./Navbar/Navbar";
import BtnMobile from "./BtnMobile/BtnMobile";

import "./Header.scss";

function Header() {
    return(
        <header className="header-menu">
                <Logo />
                <Navbar />
                <BtnMobile />
         </header>
    );
}

export default Header;