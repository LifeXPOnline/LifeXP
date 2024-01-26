import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { GameIcon, Enter } from "../Icons/Icons";
const LandingPage = () => {
    return (_jsxs("div", { className: "flex flex-row items-center justify-between h-14", children: [_jsxs("div", { className: 'flex flex-row cursor-pointer items-center ml-6 mt-1', children: [_jsx(GameIcon, {}), _jsx("h1", { className: 'text-lg ml-2', children: "Life XP" })] }), _jsxs("button", { className: " flex flex-row items-center justify-center h-[60%]  w-32 mr-6 mt-1 border custom-gray border-black shadow-sharp shadow-transition hover:shadow-sharp-xl icon-hover4  cursor-pointer", children: [_jsx("h1", { className: "mr-2", children: "Login" }), _jsx(Enter, {})] })] }));
};
export default LandingPage;
