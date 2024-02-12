import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Navbar from "./Components/DashboardPage/Navbar/Navbar";
import Home from "./Components/DashboardPage/Homepage/Home";
import Quests from "./Components/DashboardPage/Questpage/Quests";
import CheckinParent from "./Components/DashboardPage/CheckinPage/CheckinParent";
import LandingPage from "./Components/LandingPage/LandingPage";
import Welcomepage from "./Components/DashboardPage/SkillTree/Welcomepage";
import './index.css';
import { Route, Routes, } from "react-router-dom";
const App = () => {
    // const handleLoginSuccess = () => {
    //   return <Navigate to="/" />;
    // }
    return (_jsxs("div", { children: [_jsx("div", { className: " bg-white font-source-code-pro tracking-tight", children: _jsx(Routes, { children: _jsx(Route, { path: "/landing", element: _jsx(LandingPage, {}) }) }) }), _jsxs("div", { className: " bg-white font-source-code-pro", children: [_jsx(Navbar, {}), _jsxs(Routes, { children: [_jsx(Route, { path: "/", element: _jsx(Home, {}) }), _jsx(Route, { path: "/quests", element: _jsx(Quests, {}) }), _jsx(Route, { path: "/checkin", element: _jsx(CheckinParent, {}) }), _jsx(Route, { path: "/skilltree", element: _jsx(Welcomepage, {}) })] })] })] }));
};
export default App;
