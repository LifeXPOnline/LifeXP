import { Dispatch, SetStateAction } from "react";
import 'tippy.js/dist/tippy.css';
interface LogsProps {
    setThePage: Dispatch<SetStateAction<string>>;
}
declare const Logs: React.FC<LogsProps>;
export default Logs;
