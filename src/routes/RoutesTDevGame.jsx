import { BrowserRouter, Route, Routes } from "react-router-dom";
import Level1 from "../pages/level1/Level1";
import Level2 from "../pages/level2/Level2";
import Login from "../pages/login/Login"
import Level4 from "../pages/level4/Level4";

export default function RoutesTDevGame() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/level1" element={<Level1 />} />
                <Route path="/level2" element={<Level2 />} />
                <Route path="/level4" element={<Level4 />} />

            </Routes>
        </BrowserRouter>
    )
}