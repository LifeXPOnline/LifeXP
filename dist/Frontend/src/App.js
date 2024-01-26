import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Homepage/Home";
import Quests from "./Components/Questpage/Quests";
import './index.css';
import Welcomepage from "./Components/SkillTree/Welcomepage";
import { Route, Routes } from "react-router-dom";
import CheckinParent from "./Components/CheckinPage/CheckinParent";
import LandingPage from "./Components/LandingPage/LandingPage";
const App = () => {
    return (_jsxs("div", { children: [_jsx("div", { className: "hidden bg-slate-50 font-source-code-pro", children: _jsx(LandingPage, {}) }), _jsxs("div", { className: "  bg-slate-50 font-source-code-pro tracking-tight", children: [_jsx(Navbar, {}), _jsxs(Routes, { children: [_jsx(Route, { path: "/", element: _jsx(Home, {}) }), _jsx(Route, { path: "/quests", element: _jsx(Quests, {}) }), _jsx(Route, { path: "/checkin", element: _jsx(CheckinParent, {}) }), _jsx(Route, { path: "/skilltree", element: _jsx(Welcomepage, {}) })] })] })] }));
};
export default App;
