import { Dispatch, SetStateAction } from 'react';
import 'tippy.js/dist/tippy.css';
interface CheckinProps {
    setThePage: Dispatch<SetStateAction<string>>;
}
declare const Checkin: React.FC<CheckinProps>;
export default Checkin;
