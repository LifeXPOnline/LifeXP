import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// import { FaFilter } from "react-icons/fa";
import FilterMenu from "./FilterMenu";
import { Scroll } from "../Icons/Icons";
const AcceptedQuests = () => {
    const scroll = () => {
        return _jsx("div", { className: "mb-10", children: _jsx(Scroll, {}) });
    };
    return (_jsx("div", { className: " md:flex md:justify-center h-screen", children: _jsx("div", { className: " md:w-full md:border-t-[1.2px] md:border-black md:mt-20 ", children: _jsxs("div", { className: "flex flex-col items-center", children: [_jsxs("div", { className: "relative w-full flex flex-row justify-between mt-14", children: [_jsx("div", { className: "mb-12 ml-8 border border-b-2 w-32 border-black", children: _jsx("h1", { className: "tracking-wider pl-4", children: "Accepted" }) }), _jsx(FilterMenu, {})] }), _jsxs("div", { className: "flex flex-col justify-center", children: [_jsx("div", { className: "flex items-center justify-center w-[240px] mb-2 mt-10", children: scroll() }), _jsx("h1", { children: " You don't have any quests yet. " })] })] }) }) }));
};
export default AcceptedQuests;
