import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as PropTypes from 'prop-types';
const Entry = () => {
    return (
    // <div>
    _jsxs("div", { className: "space-y-5 mt-8 w-full flex items-center flex-col journal-entry ", children: [_jsx("div", { className: 'w-9/12 flex  justify-center', children: _jsx("h1", { className: "text-[14px] mb-5 mt-10 md:text-base md:mb-2 ", children: "Here you can journal your thoughts and how you're feeling" }) }), _jsxs("div", { className: "w-10/12 space-y-3 flex flex-col justify-center items-center", children: [_jsx("textarea", { className: "border border-black text-sm  w-11/12 md:w-10/12", placeholder: "Title of entry" }), _jsx("textarea", { className: "border border-black text-sm py-1 w-11/12 md:w-10/12 h-64 ", placeholder: "Journal your thoughts here" }), _jsx("button", { className: "relative", children: "Submit" })] })] })
    // </div>
    );
};
Entry.propTypes = {
    selectedMood: PropTypes.string,
};
export default Entry;
