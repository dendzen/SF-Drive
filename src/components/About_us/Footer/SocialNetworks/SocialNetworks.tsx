import * as React from "react";

import "./SocialNetworks.scss";

function SocialNetworks() {
    return (
        <div className="footer-socialNetworks">            
            <a className="footer-socialNetworks__logo" title="ссылка на профиль в VK" target="_blank" href="">
                <span className="icon-vk"></span>
            </a>                
            <a className="footer-socialNetworks__logo"  title="ссылка на профиль в Instagram" target="_blank" href="">
                <span className="icon-insta"></span>
            </a>                
            <a className="footer-socialNetworks__logo" title="ссылка на профиль в Facebook" target="_blank" href="">
                <span className="icon-facebook"></span>
            </a>     
        </div>    
    );
}

export default SocialNetworks;