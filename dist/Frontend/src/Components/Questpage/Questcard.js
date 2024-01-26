import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { FaStar } from "react-icons/fa";
import PropTypes from 'prop-types';
const Questcard = ({ QuestType, Icon, Description, Reward }) => {
    return (_jsxs("div", { className: "flex flex-col space-y-5 items-center justify-center rounded-xl border-black w-[256px] h-[420px] border-1 shadow-sharp-sm \r\n                        icon-hover4 mb-10 mr-10 ml-10 shadow-transition duration-200 hover:shadow-sharp-lg cursor-pointer", children: [_jsx("h1", { className: "tracking-widest text-sm mb-1", children: QuestType }), Icon, _jsx("div", { className: "flex items-center justify-center h-[58px] w-5/6 mt-2 mb-2 bg-quest-gray1", children: _jsx("p", { className: " text-sm text-center font-mono tracking-wider", children: Description }) }), _jsxs("div", { className: "flex flex-col items-center", children: [_jsx("h1", { className: "text-sm", children: "Difficulty" }), _jsxs("div", { className: "flex flex-row mt-2", children: [_jsx(FaStar, { className: "text-quest-gray3", size: 20 }), _jsx(FaStar, { className: "text-quest-gray3", size: 20 }), _jsx(FaStar, { className: "text-quest-gray3", size: 20 })] })] }), _jsxs("div", { className: "flex flex-col items-center", children: [_jsx("h1", { className: "text-sm mb-1", children: "Reward" }), _jsx("h1", { className: "text-sm tracking-normal font-bold", children: Reward })] }), _jsx("button", { className: "bg-quest-gray2 border-[1.5px] border-black text-white \r\n                                w-7/12 h-10 rounded-md text-xs hover:bg-quest-gray4", children: "Accept" })] }));
};
Questcard.propTypes = {
    Reward: PropTypes.string.isRequired,
    QuestType: PropTypes.string.isRequired,
    Description: PropTypes.string.isRequired,
    Icon: PropTypes.element.isRequired
};
export default Questcard;
