import * as React from "react";

import Menu from "./Menu/Menu";
import BtnDesk from "./BtnDesk/BtnDesk";

import "./Navbar.scss";

function Navbar() {
    return(
        <div className="header-navbar">
            <Menu />            
            <BtnDesk />
        </div>

    );
}

export default Navbar;