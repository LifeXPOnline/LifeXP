import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Questcard from "./Questcard";
import FilterMenu from "./FilterMenu";
// import { CiDumbbell } from "react-icons/ci";
import { Fitness, Work, Personal } from "../Icons/Icons";
const AvailableQuests = () => {
    const quests = {
        "Daily Quest": {
            Icon: (_jsx(Fitness, {})),
            Description: "Run 1 mile",
            Reward: "300 XP"
        },
        "Work": {
            Icon: (_jsx(Work, {})),
            Description: "Complete a work task",
            Reward: "200 XP"
        },
        "Personal": {
            Icon: (_jsx(Personal, {})),
            Description: "Meditate 15 minutes",
            Reward: "250 XP"
        },
        "Fitness": {
            Icon: (_jsx(Fitness, {})),
            Description: "Curl 20lb dumbbells",
            Reward: "210 XP"
        }
    };
    return (_jsx("div", { className: " md:flex md:justify-center h-screen", children: _jsx("div", { className: " md:w-full md:border-t-[1.2px] md:border-black md:mt-20 ", children: _jsxs("div", { className: "flex flex-col items-center", children: [_jsxs("div", { className: "relative w-full flex flex-row justify-between mt-14", children: [_jsx("div", { className: "mb-12 ml-8 border border-b-2 w-32 border-black", children: _jsx("h1", { className: "tracking-wider pl-4", children: "My Quests" }) }), _jsx(FilterMenu, {})] }), _jsx("div", { className: "grid  xl:grid-cols-4 lmd:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 gap-0 ", children: Object.entries(quests).map(([QuestType, { Icon, Description, Reward }]) => (_jsx(Questcard, { QuestType: QuestType, Icon: Icon, Description: Description, Reward: Reward }, QuestType))) })] }) }) }));
};
export default AvailableQuests;
