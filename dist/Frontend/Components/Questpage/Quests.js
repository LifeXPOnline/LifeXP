import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import AcceptedQuests from "./AcceptedQuests";
import AvailableQuests from "./AvailableQuests";
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; // optional for styling
import { GiScrollQuill } from "react-icons/gi";
import { useState } from 'react';
import { TbCards } from "react-icons/tb";
const Quests = () => {
    const [changePage, setChangePage] = useState(false);
    const button = {
        "styling": "border-[1.5px] shadow-sharp-sm icon-hover hover:shadow-sharp-sm p-2 border-black bg-white rounded-md fixed bottom-10 left-8 z-0"
    };
    return (_jsxs("div", { children: [changePage ?
                _jsx(AcceptedQuests, {})
                :
                    _jsx(AvailableQuests, {}), changePage ?
                _jsx(Tippy, { delay: 800, placement: "right", content: "Available", children: _jsx("button", { onClick: () => { setChangePage(!changePage); }, className: button.styling, children: _jsx(TbCards, { size: 28 }) }) }) :
                _jsx(Tippy, { delay: 800, placement: "right", content: "Accepted", children: _jsx("button", { onClick: () => { setChangePage(!changePage); }, className: button.styling, children: _jsx(GiScrollQuill, { size: 28 }) }) })] }));
};
export default Quests;
