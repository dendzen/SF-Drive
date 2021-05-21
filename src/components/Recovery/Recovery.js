import React, { useState } from 'react';

import './../../styles/Recovery/Recovery.scss';

function Recovery(props) {

    const [email, setEmail] = useState("");    
    const [pwd, setPwd] = useState("");
    const [REpwd, setREpwd] = useState("");

    const handleClick = () => {
        document.getElementsByClassName("recWarning")[0].innerHTML = "";
        if(pwd === REpwd && pwd.length > 6) {
            props.recoverySendRequest({email: email, password: pwd});
        } else if(pwd.length < 7) {
            document.getElementsByClassName("recWarning")[0].innerHTML = "Слишком короткий пароль";
        } else {
            document.getElementsByClassName("recWarning")[0].innerHTML = "Пароли не совпадают";
        }
    };

    return (
        <>
            <div className="recTopSection">
                <img className="backButton" src="./assets/backArrow.svg"/>
                <img className="exitButton" src="./assets/cross.svg"/>
            </div>
            <div className="recContent">
                <div className="recImageWrapper">
                <img src="./assets/recImage.svg"/>
                </div>
                <h1 className="recHeader">Восстановление пароля</h1>
                <p className="recPara">Мы отправим ссылку для восстановления пароля на вашу электронную почту</p>
                <p className="recWarning"></p>
            </div>
            <div className="recInputs">
                <input className="input" onChange={e => setEmail(e.target.value)} value={email} placeholder="Электронная почта"></input>
                <input className="input" onChange={e => setPwd(e.target.value)} value={pwd} placeholder="Новый пароль" type="password"></input>
                <input className="input" onChange={e => setREpwd(e.target.value)} value={REpwd} placeholder="Повторите пароль" type="password"></input>
            </div>
            <div className="recSendformWrapper">
            <button onClick={handleClick} className="recSendform">Отправить</button>
            </div>
        </>
    );
}

export default Recovery;