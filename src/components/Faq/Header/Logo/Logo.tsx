import * as React from "react";

import "./Logo.scss";

function Logo() {
    return(
        <a className="header-menu__Logo" title="Ссылка на главную страницу" href="">
            <img src={require('../../../../asset/Logo.svg')} alt="Logo" />
        </a>
    );
}

export default Logo;