import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MemoPage } from "./pages/memo";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" Component={MemoPage} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
