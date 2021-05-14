import * as React from "react";

import "./BtnMobile.scss";

function BtnMobile() {
    return(
        <button className="header-menu__btnMobile">
            <img src={require('../../../../asset/menu-mobile.svg')} alt="Кнопка меню"></img>
        </button> 
    );
}

export default BtnMobile;