import React from "react";
import "./StartQuiz.scss";
import { Link } from "react-router-dom";

const StartQuiz = () => {
    return (
        <>
            <div className="start-quiz-container">
                <div>
                    <span>There are a total of 10 questions.</span>
                    <br />
                    <br />
                    <span>
                        You must select an answer within 1 minute; otherwise,
                        you will be redirected to the next question.
                    </span>
                    <br />
                    <br />
                    <span>
                        You will earn 5 points for every correct answer.
                    </span>
                    <br />
                    <br />
                    <span>
                        You need to score at least 35 points to win the quiz.
                    </span>
                </div>
                <div className="quiz-btn">
                    <Link to={`/quiz-start`}>
                        <button>Start</button>
                    </Link>
                </div>
            </div>
        </>
    );
};

export default StartQuiz;
