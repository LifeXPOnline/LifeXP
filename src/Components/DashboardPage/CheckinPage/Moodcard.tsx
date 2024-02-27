import PropTypes from 'prop-types';

interface MoodcardProps {
    Mood: React.ReactElement
    Title: string
    isActive: boolean
    onSelect: (moodTitle: string) => void //funct with string parameter
    selectedMood: string | null
}
const Moodcard: React.FC<MoodcardProps> = ({Mood, Title, onSelect, isActive, selectedMood}) => {
    const hoverClass = isActive ? "" : "hover-reveal"; // Apply hover class only when not active

    return (
        <div
            className={`${hoverClass} flex flex-col items-center w-28 h-44 
                        rounded-md border-[1.2px] border-black shadow-sharp-md 
                        hover:shadow-sharp-lg icon-hover3 cursor-pointer`}
            onClick={() => {onSelect(Title)}}
        >
            <h1 className="mt-1 mb-2">
                {Title}
            </h1>
            {Mood}
            <button className="select-button hidden h-8 w-20 mt-6 rounded-md bg-black hover:bg-quest-gray4 text-white border border-black"
            >
                Select
            </button>
            {selectedMood && <h1 className='mt-7'>Selected!</h1>}
        </div>
    );
};

Moodcard.propTypes = {
    Mood: PropTypes.element.isRequired,
    Title: PropTypes.string.isRequired,
    onSelect: PropTypes.func.isRequired,
    isActive: PropTypes.bool.isRequired,
    selectedMood: PropTypes.string.isRequired
};

export default Moodcard;
