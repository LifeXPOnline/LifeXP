import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Happy, Ok, Angry, Sad, ReallySad, Depressed, Book, Graph } from "../Icons/Icons";
import Moodcard from "./Moodcard";
import { useState, useRef } from 'react';
import Entry from "./Entry";
import { RxHamburgerMenu } from "react-icons/rx";
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import PropTypes from 'prop-types';
import useOutsideClick from "../../Hooks/useOutsideClick";
const Checkin = ({ setThePage }) => {
    const [selectedMood, setSelectedMood] = useState("");
    const [menuOpen, setMenuOpen] = useState(false);
    const menuRef = useRef(null);
    useOutsideClick({ ref: menuRef, callback: () => { setMenuOpen(false); } });
    const handleMoodSelect = (mood) => {
        setSelectedMood(mood);
    };
    //moodFace object with corresponding svgs, title as values and svg as keys
    const moodFace = {
        "Happy": _jsx(Happy, {}),
        "Ok": _jsx(Ok, {}),
        "Angry": _jsx(Angry, {}),
        "Sad": _jsx(Sad, {}),
        "Really sad": _jsx(ReallySad, {}),
        "Depressed": _jsx(Depressed, {})
    };
    //menuIcons object with corresponding svgs
    const menuIcons = {
        "book": _jsx(Book, {}),
        "graph": _jsx(Graph, {})
    };
    //card classnames - will switch based on selections
    const cardClass = {
        "center": "flex flex-col space-y-6 md:space-y-0 md:flex-row md:space-x-12 mt-4",
        "grid": "grid lg:grid-cols-6 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 gap-10 lg:gap-11 mt-4"
    };
    return (_jsx("div", { className: "flex flex-col h-screen md:w-full", children: _jsxs("div", { className: "mt-10 md:mt-20 border-t border-black", children: [_jsxs("div", { children: [_jsx("button", { onClick: () => { setMenuOpen(!menuOpen); }, className: "rounded-sm mt-8 mb-4 ml-5", children: _jsx(RxHamburgerMenu, { size: 28 }) }), menuOpen &&
                            _jsx("div", { ref: menuRef, className: "relative", children: _jsxs("div", { className: "flex flex-col border border-b-2 border-black bg-slate-50 w-40 h-20 absolute left-5 top-[-15px] z-0", children: [_jsxs("div", { onClick: () => { setThePage("logs"); }, className: "flex flex-row ml-2 mt-3 cursor-pointer hover:underline", children: [menuIcons.book, _jsx("h1", { className: "ml-2 text-sm tracking-wide", children: "Journal Entry" })] }), _jsx(Tippy, { placement: "right", content: "in progress", children: _jsxs("div", { className: "flex flex-row ml-2 mt-3 cursor-pointer hover:underline", children: [menuIcons.graph, _jsx("h1", { className: "ml-2 text-sm tracking-wide", children: "Mood Graph" })] }) })] }) })] }), _jsxs("div", { className: "flex flex-col items-center", children: [_jsx("h1", { className: "mb-4", children: "How's your mood today?" }), _jsx("div", { className: selectedMood != null ? cardClass.center : cardClass.grid, children: Object.entries(moodFace).map(([title, moodElement]) => {
                                // Render the cards only if no mood is selected or the current card is the selected one
                                if (!selectedMood || selectedMood === title) {
                                    return (_jsx(Moodcard, { Title: title, Mood: moodElement, onSelect: handleMoodSelect, isActive: selectedMood === title, selectedMood: selectedMood }, title));
                                }
                                return null; // Don't render other cards if a mood is already selected
                            }) }), selectedMood && (_jsx(Entry, { selectedMood: selectedMood }))] })] }) }));
};
Checkin.propTypes = {
    setThePage: PropTypes.func.isRequired,
};
export default Checkin;
