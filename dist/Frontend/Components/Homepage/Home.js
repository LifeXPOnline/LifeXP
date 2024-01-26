import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Tasks from "./Tasks";
import Trackers from "./Trackers";
import { useState } from "react";
import useIsLargeScreen from "../../Hooks/useIsLargeScreen";
const Home = () => {
    const [thePage, setThePage] = useState("Tasks");
    const isLargeScreen = useIsLargeScreen();
    return (_jsx("div", { className: "md:flex md:justify-center h-screen", children: _jsxs("div", { className: " md:border-black md:w-[99%] md:mt-20 md:flex md:flex-row md:space-x-8", children: [(isLargeScreen || thePage === "Trackers") && _jsx(Trackers, { setThePage: setThePage }), (isLargeScreen || thePage === "Tasks") && _jsx(Tasks, { setThePage: setThePage })] }) }));
};
export default Home;
