import Quiz from "./components/Quiz/Quiz";
import { JsQuiz } from "./constant";

function App() {
    return (
        <>
            <Quiz questions={JsQuiz.question} />
        </>
    );
}

export default App;
