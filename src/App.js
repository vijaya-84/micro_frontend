import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home/Home";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/:categoryName" element={<Home />}></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
