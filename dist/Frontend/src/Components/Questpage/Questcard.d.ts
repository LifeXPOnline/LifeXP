/// <reference types="react" />
interface QuestcardProps {
    QuestType: string;
    Reward: string;
    Icon: React.ReactElement;
    Description: string;
}
declare const Questcard: React.FC<QuestcardProps>;
export default Questcard;
