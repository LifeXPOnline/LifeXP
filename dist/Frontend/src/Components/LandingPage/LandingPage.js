import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { GameIcon, Enter } from "../Icons/Icons";
import taskImg from "../../assets/Tasks.png";
import levelImg from "../../assets/levelmeter.png";
import questingImg from "../../assets/Questing.png";
import emcheckinImg from "../../assets/Emcheckin.png";
import { NavLink } from "react-router-dom";
// const backendUrl = "http://localhost:5000";
const LandingPage = () => {
    return (_jsxs("div", { className: "h-screen", children: [_jsxs("div", { className: "flex flex-row items-center justify-between h-14 w-full", children: [_jsxs("div", { className: 'flex flex-row cursor-pointer items-center ml-6 mt-1', children: [_jsx(GameIcon, { height: "22", width: "22" }), _jsx("h1", { className: 'text-lg ml-2', children: "Life XP" })] }), _jsx(NavLink, { to: "/", children: _jsxs("button", { className: "flex flex-row items-center justify-center h-9 w-32 sm:mr-6 mt-1 border custom-gray \r\n                                border-black shadow-sharp shadow-transition hover:shadow-sharp-xl icon-hover4 \r\n                                cursor-pointer", children: [_jsx("h1", { className: "mr-2", children: "Login" }), _jsx(Enter, {})] }) })] }), _jsxs("div", { className: "lg:ml-10 mb-5 mt-10", children: [_jsxs("div", { className: "hidden lg:flex items-center space-x-4 lg:ml-20 ", children: [_jsx(GameIcon, { width: "37", height: "37" }), _jsx("h1", { className: "text-[36px] tracking-wider text-gray-900", children: "Your Life Into XP!" })] }), _jsx("div", { className: "flex flex-col justify-center items-center  md:mt-0", children: _jsxs("div", { className: "grid lg:grid-cols-2 w-[85%] justify-center", children: [_jsxs("div", { className: " flex flex-col justify-center items-center lg:items-start ml-6 lg:ml-0", children: [_jsx("h1", { className: "text-3xl mb-5", children: "Get xp from tasks!" }), _jsx("p", { className: "text-xl mb-10 w-[450px]", children: "Gain experience points from your day to day tasks!" }), _jsx(NavLink, { to: "/", children: _jsxs("button", { className: "flex flex-row space-x-4 items-center justify-center \r\n                                                        h-10 w-40 mr-6 mt-1 mb-2 border custom-gray border-black shadow-sharp \r\n                                                        shadow-transition hover:shadow-sharp-xl icon-hover4 cursor-pointer", children: [_jsx("span", { children: "Get Started" }), _jsx(GameIcon, { width: "14", height: "14" })] }) })] }), _jsx("div", { children: _jsx("img", { src: taskImg, width: 600, height: 600 }) })] }) })] }), _jsx("div", { className: "hidden lg:flex flex-col justify-center items-center h-[580px] ml-8", children: _jsxs("div", { className: "grid lg:grid-cols-2 w-[80%] ", children: [_jsx("img", { src: levelImg, width: 400 }), _jsxs("div", { className: " flex flex-col items justify-center", children: [_jsx("h1", { className: "text-3xl mb-5 lg:text-right mt-10 md:mt-0", children: "Gain Levels!" }), _jsx("p", { className: "text-xl mb-10 lg:text-right", children: "Gain levels from your day to day tasks from work, fitness, to personal!" }), _jsx("div", { className: "flex lg:justify-end ", children: _jsx(NavLink, { to: "/", children: _jsxs("button", { className: "flex flex-row space-x-4 items-center justify-center h-10 w-40  \r\n                                                        mt-1 border custom-gray border-black shadow-sharp shadow-transition \r\n                                                        hover:shadow-sharp-xl icon-hover4 cursor-pointer   ", children: [_jsx("span", { children: "Level Up" }), _jsx(GameIcon, { width: "14", height: "14" })] }) }) })] })] }) }), _jsx("div", { className: "hidden lg:flex justify-center items-center h-[620px] ml-12", children: _jsxs("div", { className: "grid lg:grid-cols-2 w-[90%]", children: [_jsxs("div", { className: " flex flex-col items justify-center", children: [_jsx("h1", { className: "text-3xl mb-5", children: "Complete Quests!" }), _jsx("p", { className: "text-xl mb-10 w-[500px]", children: "Take on quests similar to your day to day tasks and gain Rewards and levels!" }), _jsx(NavLink, { to: "/", children: _jsxs("button", { className: "flex flex-row space-x-4 items-center justify-center h-10 w-40  \r\n                                                mt-1 border custom-gray border-black shadow-sharp shadow-transition \r\n                                                hover:shadow-sharp-xl icon-hover4 cursor-pointer", children: [_jsx("span", { children: "Get Questing" }), _jsx(GameIcon, { width: "14", height: "14" })] }) })] }), _jsx("img", { src: questingImg, width: 500 })] }) }), _jsx("div", { className: "hidden lg:flex justify-center items-center h-[620px] ml-12", children: _jsxs("div", { className: "grid lg:grid-cols-2 w-[85%]", children: [_jsx("img", { src: emcheckinImg, width: 500 }), _jsxs("div", { className: " flex flex-col items justify-center", children: [_jsx("h1", { className: "text-3xl mb-5 text-right", children: "Emotional Check-in" }), _jsx("p", { className: "text-xl mb-10  text-right", children: "You\u2019ll have emotional check-ins daily to document your moods as well as journal entries where you can document your thoughts!" }), _jsx("div", { className: "flex justify-end", children: _jsx(NavLink, { to: "/", children: _jsxs("button", { className: "flex flex-row space-x-4 items-center justify-center h-10 w-40  \r\n                                                    mt-1 border custom-gray border-black shadow-sharp shadow-transition \r\n                                                    hover:shadow-sharp-xl icon-hover4 cursor-pointer", children: [_jsx("span", { children: "Get Started" }), _jsx(GameIcon, { width: "14", height: "14" })] }) }) })] })] }) }), _jsxs("div", { className: "h-[620px] mt-32 mb-10 lg:mb-0 md:mt-0 flex flex-col justify-center items-center space-y-16", children: [_jsx("h1", { className: "text-2xl md:text-3xl", children: "What exactly is LifeXP?" }), _jsx("p", { className: "w-[90%] text-center text-lg leading-10 tracking-normal md:text-left md:w-[60%] md:text-xl ", children: "Life XP is a gamified productivity app designed to cater to a broader range of needs beyond task management. Life XP integrates features that focus on emotional well-being, personal development, and highly customizable user engagement models. Life XP aims to be a holistic tool for life management. This innovative blend makes Life XP a comprehensive solution for boosting productivity and emotional health." }), _jsx(NavLink, { to: "/", children: _jsxs("button", { className: "flex flex-row space-x-4 items-center justify-center h-10 w-40  \r\n                                        mt-1 border custom-gray border-black shadow-sharp shadow-transition \r\n                                        hover:shadow-sharp-xl icon-hover4 cursor-pointer", children: [_jsx("span", { children: "Get Started" }), _jsx(GameIcon, { width: "14", height: "14" })] }) })] }), _jsxs("footer", { className: "border-t border-black h-[130px] mt-40 lg:mt-10", children: [_jsxs("div", { className: "flex justify-center items-center cursor-default mt-3", children: [_jsx("h1", { className: "text-2xl border-r border-black px-2 mr-2", children: "Life XP" }), _jsx("h2", { children: "Your life into XP" })] }), _jsxs("div", { className: "flex justify-between mt-12", children: [_jsxs("div", { className: "flex flex-row space-x-4 lg:space-x-12 ml-6", children: [_jsx("h2", { className: "hover:underline cursor-pointer", children: "Privacy Policy" }), _jsx("h2", { className: "hover:underline cursor-pointer", children: "Terms of Use" })] }), _jsx("div", { className: "mr-6 cursor-default", children: _jsx("h1", { children: "@2024 Lifexponline.com" }) })] })] })] }));
};
export default LandingPage;
