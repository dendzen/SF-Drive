import * as React from "react";

import "./Password.scss";



function Password() {
    return(
        <form>
            <legend>Пароль</legend>
            <div className="main-InfoAboutYou">
                <span>Придумайте пароль</span>
                <input className="main-InfoAboutYou_input imgEyes" type="text" placeholder="•••••••••••••••••••" />
            </div>
            <div className="main-InfoAboutYou">
                <span>Повторите пароль</span>
                <input className="main-InfoAboutYou_input imgEyes" type="text" placeholder="•••••••••••••••••••" />
            </div>
        </form>
    );
}

export default Password;