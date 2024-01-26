import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { FaFilter } from "react-icons/fa";
import { useState, useRef } from "react";
import useOutsideClick from "../../Hooks/useOutsideClick";
import { IoIosCheckbox } from "react-icons/io";
const FilterMenu = () => {
    const [filterOpen, setFilterOpen] = useState(false);
    const filterRef = useRef(null);
    useOutsideClick({ ref: filterRef, callback: () => { setFilterOpen(false); } });
    return (_jsxs("div", { children: [_jsx("div", { className: "flex mr-8", children: _jsxs("div", { className: "flex flex-row items-center mt-[2px] space-x-1 bottom-5 left-0 mr-2 cursor-pointer", onClick: () => { setFilterOpen(!filterOpen); }, children: [_jsx("h1", { children: "Filter" }), _jsx(FaFilter, {})] }) }), filterOpen &&
                _jsx("div", { ref: filterRef, className: "absolute right-10 top-8 z-50", children: _jsxs("div", { className: " border border-black border-b-2 bg-slate-50 w-44 h-33 z-50", children: [_jsxs("div", { className: "flex flex-col items-center text-sm mt-3 space-y-1", children: [_jsxs("div", { className: "flex flex-row space-x-2", children: [_jsx("label", { htmlFor: "daily-quest", children: _jsx("h1", { children: "Daily Quest" }) }), _jsx("input", { type: "checkbox", id: "daily-quest", className: "custom-checkbox2 h-5 w-4" })] }), _jsxs("div", { className: "flex flex-row space-x-8", children: [_jsx("label", { htmlFor: "daily-quest", children: _jsx("h1", { children: "Personal" }) }), _jsx("input", { type: "checkbox", id: "personal", className: "custom-checkbox2 h-5 w-4" })] }), _jsxs("div", { className: "flex flex-row space-x-16", children: [_jsx("label", { htmlFor: "daily-quest", children: _jsx("h1", { children: "Work" }) }), _jsx("input", { type: "checkbox", id: "work", className: "custom-checkbox2 h-5 w-4" })] }), _jsxs("div", { className: "flex flex-row space-x-10", children: [_jsx("label", { htmlFor: "daily-quest", children: _jsx("h1", { children: "Fitness" }) }), _jsx("input", { type: "checkbox", id: "fitness", className: "custom-checkbox2 h-5 w-4" })] })] }), _jsx("div", { className: " flex justify-end ", children: _jsx(IoIosCheckbox, { className: "hover:text-gray-700 cursor-pointer mt-4", size: 28 }) })] }) })] }));
};
export default FilterMenu;
