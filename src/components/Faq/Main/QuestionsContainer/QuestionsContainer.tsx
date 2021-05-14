import * as React from "react";

import "./QuestionsContainer.scss";
import ButtonTitles from "./QuestionItem/ButtonTitles";


function QuestionsContainer() {


    return(
        <section className="main-questions">
            <ButtonTitles /> 
        </section>
    );
}

export default QuestionsContainer;