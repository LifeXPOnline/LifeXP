import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { IoIosArrowRoundBack, IoIosArrowRoundForward, IoIosSearch } from "react-icons/io";
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; // optional for styling
import PropTypes from 'prop-types';
const Logs = ({ setThePage }) => {
    const styles = {
        "log": "border-2 py-2 rounded-md border-black text-sm flex justify-between icon-hover3 cursor-pointer",
        "arrowButton": "border border-black p-[3px] rounded-sm icon-hover3"
    };
    return (_jsx("div", { className: "flex flex-col h-screen ", children: _jsxs("div", { className: "md:border-t md:border-black md:mt-20", children: [_jsx("div", { className: "mt-16 md:mt-8 flex justify-start ml-5 md:ml-10", children: _jsx(Tippy, { delay: 900, placement: "right", content: "go back", children: _jsx("button", { onClick: () => { setThePage("checkin"); }, className: "border-b border-black text-gray-600 icon-hover3 mb-5", children: _jsx(IoIosArrowRoundBack, { size: 38 }) }) }) }), _jsxs("div", { className: "flex flex-col items-center", children: [_jsx("h1", { className: "justify-center mb-10 mt-3 flex", children: "Your Journal Entries" }), _jsxs("div", { className: "mb-5 flex justify-center space-x-3", children: [_jsx(Tippy, { delay: 1000, placement: "left", content: "prev", children: _jsx("button", { className: styles.arrowButton, children: _jsx(IoIosArrowRoundBack, {}) }) }), _jsx("h1", { children: " October 2023 " }), _jsx(Tippy, { delay: 1000, placement: "right", content: "next", children: _jsx("button", { className: styles.arrowButton, children: _jsx(IoIosArrowRoundForward, {}) }) })] }), _jsxs("div", { className: "space-y-3 w-10/12 md:w-[45%]", children: [_jsx("div", { className: "flex justify-center mb-5 icon-hover3", children: _jsxs("div", { className: "flex", children: [_jsx("input", { className: "border-b border-l border-t py-[1.5px] border-black w-[300px] rounded-l-md" }), _jsx("button", { className: "border-r border-t border-b border-black bg-white rounded-r-md w-6 px-1", children: _jsx(IoIosSearch, {}) })] }) }), _jsxs("div", { className: styles.log, children: [_jsx("h1", { className: "ml-3", children: "10/24/2023" }), _jsx("h1", { children: "Title: Went to the park" }), _jsx("h1", { className: "mr-3", children: "Mood: Ok" })] }), _jsxs("div", { className: styles.log, children: [_jsx("h1", { className: "ml-3", children: "10/24/2023" }), _jsx("h1", { className: "ml-2 mr-2", children: "Title: Ate some good pho" }), _jsx("h1", { className: "mr-3", children: "Mood: Ok" })] }), _jsxs("div", { className: styles.log, children: [_jsx("h1", { className: "ml-3", children: "10/28/2023" }), _jsx("h1", { className: "ml-2 mr-2", children: "Title: text text text" }), _jsx("h1", { className: "mr-4", children: "Mood: Sad" })] }), _jsxs("div", { className: styles.log, children: [_jsx("h1", { className: "ml-3", children: "10/29/2023" }), _jsx("h1", { className: "ml-2 mr-2", children: "Title: text text text " }), _jsx("h1", { className: "mr-4", children: "Mood: Depressed" })] })] })] })] }) }));
};
Logs.propTypes = {
    setThePage: PropTypes.func.isRequired,
};
export default Logs;
