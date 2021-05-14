import * as React from "react";

import AboutUs from "./AboutUs/AboutUs";
import Contact from "./Contact/Contact";
import TeamCards from "./TeamCards/TeamCards";

function Main() {
    return (
        <main>
            <article>
                <AboutUs />
                <Contact />
                <TeamCards />
            </article>
        </main>
    );
}

export default Main;