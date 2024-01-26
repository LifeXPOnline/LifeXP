/// <reference types="react" />
interface MoodcardProps {
    Mood: React.ReactElement;
    Title: string;
    isActive: boolean;
    onSelect: (moodTitle: string) => void;
    selectedMood: string | null;
}
declare const Moodcard: React.FC<MoodcardProps>;
export default Moodcard;
