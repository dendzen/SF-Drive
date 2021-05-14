import * as React from "react";

import "./BtnDesk.scss";

function BtnDesk() {
    const buttonName = "Войти";
    return(
        <button className="header-navbar__btnDesk">
            <span className="header-navbar__btnDesk_btnText">{buttonName}</span>
        </button>  
    );
}

export default BtnDesk;