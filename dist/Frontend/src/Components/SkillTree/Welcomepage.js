import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { BsCompass } from "react-icons/bs";
import { Work, Personal, Fitness } from "../Icons/Icons";
const Welcomepage = () => {
    const css = {
        "path": "mt-8 w-80 h-80 border-1 border-black rounded-xl flex flex-col items-center space-y-5 shadow-sharp-md hover:shadow-sharp-lg icon-hover3 cursor-pointer",
        "button": "bg-quest-gray2 border-[1.5px] border-black text-white w-5/12 h-10 rounded-md text-xs hover:bg-quest-gray4",
        "pathdivflex": "flex flex-col lg:flex-row lg:space-x-20",
        "pathdivgrid": ""
    };
    return (_jsx("div", { className: "flex flex-col h-screen", children: _jsxs("div", { className: "md:border-t md:border-black md:mt-20", children: [_jsx("div", { className: "mt-20 md:mt-14 md:mb-10 flex justify-center md:justify-start md:ml-10", children: _jsxs("div", { className: "flex items-center border-b border-black w-64", children: [_jsx(BsCompass, { size: 20 }), _jsx("h1", { className: "ml-2", children: "Your choices, your path" })] }) }), _jsx("div", { className: "flex items-center justify-center", children: _jsxs("div", { className: "grid grid-cols-1 gap-2 lmd:grid-cols-2 lmd:gap-14 lg2:grid-cols-3 lg2:gap-16 ", children: [_jsxs("div", { className: css.path, children: [_jsx("h1", { className: "mt-3", children: "Fitness" }), _jsx(Fitness, {}), _jsx("p", { className: "text-sm px-4 w-72", children: "Lorem ipsum dolor sit, amet consectetur ad voluptate esse voluptatibus repellat atque! Tenetur laudantium quo corrupti molestias itaque dolore veritatis, at tempora." }), _jsx("button", { className: css.button, children: "Select" })] }), _jsxs("div", { className: css.path, children: [_jsx("h1", { className: "mt-3", children: "Work" }), _jsx(Work, {}), _jsx("p", { className: "text-sm px-4 w-72", children: "Lorem ipsum dolor sit, amet consectetur ad voluptate esse voluptatibus repellat atque! Tenetur laudantium quo corrupti molestias itaque dolore veritatis, at tempora." }), _jsx("button", { className: css.button, children: "Select" })] }), _jsxs("div", { className: css.path, children: [_jsx("h1", { className: "mt-3", children: "Personal" }), _jsx(Personal, {}), _jsx("p", { className: "text-sm px-4 w-72", children: "Lorem ipsum dolor sit, amet consectetur ad voluptate esse voluptatibus repellat atque! Tenetur laudantium quo corrupti molestias itaque dolore veritatis, at tempora." }), _jsx("button", { className: css.button, children: "Select" })] })] }) })] }) }));
};
export default Welcomepage;
