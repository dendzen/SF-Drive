import * as React from "react";

import "./ButtonTitles.scss";


function ButtonTitles() {
    
    const buttonTitles = [
        {
            question: 'Могу ли я отменить бронь?',
            answer: '.......',
        },
        {
            question: 'Могу ли я вернуть деньги, если не подошёл автомобиль?',
            answer: '.......',
        },
        {
            question: 'Что делать, если случилось ДТП?',
            answer: '.......',
        },
        {
            question: 'Могу ли я оставить автомобиль в удобном для меня месте??',
            answer: 'Данный вопрос обсуждается с собственником, но как правило автомобиль нужно вернуть туда, где вы его получили.',
        },
        {
            question: 'Что делать, если собственник просит заплатить ему напрямую?',
            answer: '.......',
        },
        {
            question: 'Должен ли я заправлять автомобиль??',
            answer: '.......',
        },
    ];

    const buttonClassName = "main-questions-block__collapsible";
    const buttonClassNameActive = "main-questions-block__collapsible-active";
    const answerContent = "main-questions-block__content";
    const answerContentActive = "main-questions-block__content-activ";


    const initActiveButtons = buttonTitles.map((item) => false);
    const [activeQuestions, setActiveQuestions] = React.useState(initActiveButtons);
    // const arr = [false,false,false,false,false,false,]

    const handleClick = (index) => {
        const cloneState = activeQuestions.map((item) => item)
        cloneState[index] = !activeQuestions[index]
        setActiveQuestions(cloneState)
    }

    return (
        <>
        {buttonTitles.map(({ question, answer }, i) => {
            return       <div className="main-questions-block" key={i}>
                <button 
                    className={activeQuestions[i] ? buttonClassName + " " + buttonClassNameActive : buttonClassName} 
                    onClick={() => handleClick(i)} 
                >
                    <span>{question}</span>
                </button>
                <div className={activeQuestions[i] ? answerContentActive : answerContent}>
                    <p>{answer}</p>
                </div>
            </div>
        })}
        </>

    );
}

export default ButtonTitles;