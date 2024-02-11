import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import PropTypes from 'prop-types';
import { BsListTask } from 'react-icons/bs';
import Tippy from "@tippyjs/react";
const Trackers = ({ setThePage }) => {
    const styles = {
        "quests": "space-y-3 text-sm flex flex-col items-center",
        "hoverBase": "relative bottom-14 left-0 border-2 bg-white border-black w-80 h-24 rounded-md text-xs space-y-3 flex flex-col justify-center",
        "hover1": "w-44 h-4 border border-black mr-3 rounded-lg ml-2",
        "hover2": "bg-levelup-gray1 hover:bg-levelup-gray2 h-3 ml-[2px] mt-[1.2px] border border-black rounded-2xl",
        "pageButton": "absolute left-5 top-20 md:top-36 md:left-14 ml-0 bg-white flex items-center justify-center lg1:hidden h-11 w-11 border-1" +
            "bg-slate-50 border-black shadow-sharp-sm cursor-pointer icon-hover4" +
            "transition-transform duration-200 hover:shadow-sharp-md"
    };
    return (_jsx("div", { className: "w-full border-t border-black flex-col md2:flex lg1:w-96 lg1:border-r lg1:rounded-t-md ", children: _jsxs("div", { className: "flex flex-col  justify-between items-center mt-5 ", children: [_jsxs("div", { className: "space-y-8 ", children: [_jsx(Tippy, { content: "Tasks", delay: 700, children: _jsx("div", { onClick: () => { setThePage("Tasks"); }, className: styles.pageButton, children: _jsx(BsListTask, { size: 25 }) }) }), _jsxs("div", { className: "flex flex-col items-center text-sm", children: [_jsx("h1", { children: "A 3 day streak!" }), _jsx("div", { className: "w-56 h-44 border border-black" })] }), _jsxs("div", { className: styles.quests, children: [_jsx("h1", { children: "Daily Quests" }), _jsx("p", { children: "Complete a fitness task" }), _jsx("p", { children: "Complete a fitness task" }), _jsx("p", { children: "Complete a fitness task" })] }), _jsxs("div", { className: "space-y-3 text-sm flex flex-col items-center", children: [_jsx("h1", { children: "Your Quests" }), _jsx("div", { className: "flex flex-col items-center" })] })] }), _jsxs("div", { className: "flex flex-col items-center text-sm relative mt-12", children: [_jsxs("div", { className: "mb-4 cursor-default", children: [_jsx("h1", { children: "Level: 5" }), _jsx("h1", { children: "XP: 400/500" })] }), _jsx("div", { className: "meterContainer w-72 h-9 mb-10 border border-black rounded-2xl cursor-pointer", children: _jsx("div", { className: "bg-levelup-gray1 hover:bg-levelup-gray2 w-48 h-7 mb-10 ml-[3px] mt-[3px] border border-black rounded-2xl" }) }), _jsx("div", { className: "absolute levelStatistics", children: _jsxs("div", { className: `${styles.hoverBase} `, children: [_jsxs("div", { className: "flex flex-row", children: [_jsx("div", { className: styles.hover1, children: _jsx("div", { className: `${styles.hover2} w-8` }) }), _jsx("h1", { children: "Level 1: Fitness" })] }), _jsxs("div", { className: "flex flex-row", children: [_jsx("div", { className: styles.hover1, children: _jsx("div", { className: `${styles.hover2} w-28` }) }), _jsx("h1", { children: "Level 4: Work" })] }), _jsxs("div", { className: "flex flex-row", children: [_jsx("div", { className: styles.hover1, children: _jsx("div", { className: `${styles.hover2} w-20` }) }), _jsx("h1", { children: "Level 2: Personal" })] })] }) })] })] }) }));
};
Trackers.propTypes = {
    setThePage: PropTypes.func.isRequired
};
export default Trackers;
