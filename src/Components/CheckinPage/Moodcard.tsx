import PropTypes from 'prop-types';

interface MoodcardProps  {
    Mood: React.ReactElement
    Title: string
}
const Moodcard: React.FC<MoodcardProps>  = ({Mood, Title}) => {
    return(
        <div className=" flex flex-col items-center w-28 h-44 
                    rounded-md border-[1.2px] border-black shadow-sharp-md hover:shadow-sharp-lg icon-hover3">        
            <h1 className="mt-1 mb-2">
                {Title}
            </h1>

            {Mood}

            <button className="h-8 w-20 mt-6 rounded-md bg-black text-white border border-black hover:bg-quest-gray4">
                Select
            </button>
        </div>
    )
}
Moodcard.propTypes = {
    Mood: PropTypes.element.isRequired,
    Title: PropTypes.string.isRequired
};
export default Moodcard