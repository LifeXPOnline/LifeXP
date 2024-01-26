import { Dispatch, SetStateAction } from "react";
interface TrackersProps {
    setThePage: Dispatch<SetStateAction<string>>;
}
declare const Trackers: React.FC<TrackersProps>;
export default Trackers;
