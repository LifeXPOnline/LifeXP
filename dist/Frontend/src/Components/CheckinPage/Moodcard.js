import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import PropTypes from 'prop-types';
const Moodcard = ({ Mood, Title, onSelect, isActive, selectedMood }) => {
    const hoverClass = isActive ? "" : "hover-reveal"; // Apply hover class only when not active
    return (_jsxs("div", { className: `${hoverClass} flex flex-col items-center w-28 h-44 
                        rounded-md border-[1.2px] border-black shadow-sharp-md 
                        hover:shadow-sharp-lg icon-hover3 cursor-pointer`, onClick: () => { onSelect(Title); }, children: [_jsx("h1", { className: "mt-1 mb-2", children: Title }), Mood, _jsx("button", { className: "select-button hidden h-8 w-20 mt-6 rounded-md bg-black hover:bg-quest-gray4 text-white border border-black", children: "Select" }), selectedMood && _jsx("h1", { className: 'mt-7', children: "Selected!" })] }));
};
Moodcard.propTypes = {
    Mood: PropTypes.element.isRequired,
    Title: PropTypes.string.isRequired,
    onSelect: PropTypes.func.isRequired,
    isActive: PropTypes.bool.isRequired,
    selectedMood: PropTypes.string.isRequired
};
export default Moodcard;
