import * as React from "react";

import ImgAnswers from "./ImgAnswers/ImgAnswers";
import QuestionsContainer from "./QuestionsContainer/QuestionsContainer";

function Main() {
    return(
        <main>
            <article>
                <ImgAnswers />
                <QuestionsContainer />
            </article>
        </main>
    );
}

export default Main;