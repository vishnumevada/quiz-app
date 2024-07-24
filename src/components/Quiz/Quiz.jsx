import React, { useState } from "react";
import { ResultInitialState } from "../../constant";
import AnswerTimer from "../AnswerTimer/AnswerTimer";
import Result from "../Result/Result";
import "./Quiz.scss";

const Quiz = ({ questions }) => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [answerIdx, setAnswerIdx] = useState(null);
    const [answer, setAnswer] = useState(null);
    const [result, setResult] = useState(ResultInitialState);
    const [showResult, setShowResult] = useState(false);
    const [showAnswerTimer, setShowAnswerTimer] = useState(true);
    const [inputAnswer, setInputAnswer] = useState("");

    const { question, choices, correctAnswer, type } =
        questions[currentQuestion];

    const onAnswerClick = (answer, index) => {
        setAnswerIdx(index);
        setAnswer(answer === correctAnswer);
    };

    const onClickNext = (finalAnswer) => {
        setAnswerIdx(null);
        setShowAnswerTimer(false);
        setInputAnswer("");
        setResult((prev) =>
            finalAnswer
                ? {
                      ...prev,
                      score: prev.score + 5,
                      correctAnswers: prev.correctAnswers + 1,
                  }
                : {
                      ...prev,
                      wrongAnswers: prev.wrongAnswers + 1,
                  }
        );

        if (currentQuestion < questions.length - 1) {
            setCurrentQuestion((prev) => prev + 1);
        } else {
            setShowResult(true);
        }

        setTimeout(() => {
            setShowAnswerTimer(true);
        });
    };

    const onTryAgain = () => {
        setCurrentQuestion(0);
        setResult(ResultInitialState);
        setShowResult(false);
        setInputAnswer("");
    };

    const handleTimeUp = () => {
        setAnswer(false);
        onClickNext(false);
    };

    const handleInputChange = (e) => {
        setInputAnswer(e.target.value);

        if (e.target.value === correctAnswer) {
            setAnswer(true);
        } else {
            setAnswer(false);
        }
    };

    const getAnswerUI = () => {
        if (type === "FIB") {
            return <input value={inputAnswer} onChange={handleInputChange} />;
        }
        return (
            <ul>
                {choices.map((choice, index) => (
                    <li
                        onClick={() => onAnswerClick(choice, index)}
                        key={index}
                        className={answerIdx === index ? "selected-answer" : ""}
                    >
                        {choice}
                    </li>
                ))}
            </ul>
        );
    };

    return (
        <div className="quiz-container">
            {!showResult ? (
                <>
                    {showAnswerTimer && (
                        <AnswerTimer duration={60} onTimeUp={handleTimeUp} />
                    )}
                    <span className="active-question-no">
                        {currentQuestion + 1}
                    </span>
                    <span className="total-question-no">
                        /{questions.length}
                    </span>
                    <h2>{question}</h2>
                    {getAnswerUI()}
                    <div className="footer">
                        <button
                            onClick={() => onClickNext(answer)}
                            disabled={answerIdx === null && !inputAnswer}
                        >
                            {currentQuestion === questions.length - 1
                                ? "Finish"
                                : "Next"}
                        </button>
                    </div>
                </>
            ) : (
                <Result
                    result={result}
                    onTryAgain={onTryAgain}
                    totalQuestions={questions.length}
                />
            )}
        </div>
    );
};

export default Quiz;
