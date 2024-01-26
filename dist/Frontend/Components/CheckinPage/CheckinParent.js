import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// import Logs from "./Logs"
import Checkin from "./Checkin";
import Logs from "./Logs";
import { useState } from "react";
const CheckinParent = () => {
    const [thePage, setThePage] = useState("checkin");
    return (_jsxs("div", { children: [thePage === "logs" && _jsx(Logs, { setThePage: setThePage }), thePage === "checkin" && _jsx(Checkin, { setThePage: setThePage })] }));
};
export default CheckinParent;
