import 'tippy.js/dist/tippy.css';
import { Dispatch, SetStateAction } from "react";
interface TasksProps {
    setThePage: Dispatch<SetStateAction<string>>;
}
declare const Tasks: React.FC<TasksProps>;
export default Tasks;
