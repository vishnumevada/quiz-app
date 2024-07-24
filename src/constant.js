export const JsQuiz = {
    question: [
        {
            id: 0,
            question:
                "______ provide a way to pass data from one component to another. Fill in the blank.",
            type: "FIB",
            correctAnswer: "props",
        },
        {
            id: 1,
            question:
                "Which of the following is used in React.js to increase performance?",
            choices: [
                "Virtual DOM",
                "Original DOM",
                "Both A and B",
                "None of the above",
            ],
            type: "MCQs",
            correctAnswer: "Virtual DOM",
        },
        {
            id: 2,
            question: "What is ReactJS?",
            choices: [
                "User Interface framework",
                "Server-side framework",
                "both a and b",
                "None of the above",
            ],
            type: "MCQs",
            correctAnswer: "User Interface framework",
        },
        {
            id: 3,
            question:
                "Identify the one which is used to pass data to components from outside",
            choices: [
                "props",
                "Render with arguments",
                "setState",
                "PropTypes",
            ],
            type: "MCQs",
            correctAnswer: "props",
        },
        {
            id: 4,
            question: "In which language is React.js written?",
            choices: ["JavaScript", "Python", "Java", "C#"],
            type: "MCQs",
            correctAnswer: "JavaScript",
        },
        {
            id: 5,
            question: "What is Babel?",
            choices: [
                "JavaScript compiler",
                "JavaScript interpreter",
                "JavaScript transpiler",
                "None of the above",
            ],
            type: "MCQs",
            correctAnswer: "JavaScript compiler",
        },
        {
            id: 6,
            question: "Which type of JavaScript language is?",
            choices: [
                "Object-oriented",
                "Object-based",
                "JavaScript transpiler",
                "All of the above",
            ],
            type: "MCQs",
            correctAnswer: "Object-based",
        },
        {
            id: 7,
            question: "In which HTML element, we put the JavaScript code?",
            choices: [
                "<javascript>...</javascript>",
                "<js>...</js>",
                "<script>...</script>",
                "<css>...</css>",
            ],
            type: "MCQs",
            correctAnswer: "<script>...</script>",
        },
        {
            id: 8,
            question: "JavaScript ignores?",
            choices: ["newlines", "tabs", "spaces", "All of the above"],
            type: "MCQs",
            correctAnswer: "All of the above",
        },
        {
            id: 9,
            question:
                "Which JavaScript method is used to write on browser's console?",
            choices: [
                "console.write()",
                "console.output()",
                "console.log()",
                "console.writeHTML()",
            ],
            type: "MCQs",
            correctAnswer: "console.log()",
        },
    ],
};

export const ResultInitialState = {
    score: 0,
    correctAnswers: 0,
    wrongAnswers: 0,
};
