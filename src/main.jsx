import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import StartQuiz from "./components/StartQuiz/StartQuiz.jsx";
import "./index.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
    {
        path: "/",
        element: <StartQuiz />,
    },
    {
        path: "/quiz-start",
        element: <App />,
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <RouterProvider router={router} />
);
