import * as React from "react";
import classnames from 'classnames'

import HeadersSteps from "./HeadersSteps/HeadersSteps";
import InfoAboutYou from "./InfoAboutYou/InfoAboutYou";
import Passport from "./Passport/Passport";
import DriverLicense from "./DriverLicense/DriverLicense";
import Password from "./Password/Password";

import blockForm from "./../../registrConfig.js";

import "./Main.scss";


function Main() {
    
    return(
        
        <main className="formWrapper">
            <HeadersSteps />
            <form> 
            {blockForm.map(({fieldName, width, type, placeholder, header, icon}) => {
                const inputClasses = classnames({
                    ["formWrapper-block_input"]: true,
                    ["formWrapper-block_inputSmall"]: width === "small",
                    ["imgCalendar"]: icon === "calendar",
                    ["imgEyes"]: icon === "eyes"
                });
                return(
                    <div className="formWrapper-block">
                        {header && <legend className="formWrapper-block_header">{header}</legend>} {/* // h1 */}
                        <div className="formWrapper-block_info">
                            <span>{fieldName}</span>
                            <input className={inputClasses} type={type} placeholder={placeholder} />
                        </div>
                    </div>
                )
            })}

            </form>
        </main>

    )
}

export default Main;