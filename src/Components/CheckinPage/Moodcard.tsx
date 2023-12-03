interface MoodcardProps  {
    Mood: React.ReactElement
}
const Moodcard: React.FC<MoodcardProps>  = ({Mood}) => {
    return(
        <div className=" flex flex-col items-center w-28 h-44 
                    rounded-md border-[1.2px] border-black shadow-sharp-md">        
            <h1 className="mt-1 mb-2">
                Happy
            </h1>

            {Mood}

            <button className="h-8 w-20 mt-6 rounded-md bg-black text-white border border-black">
                Select
            </button>
        </div>
    )
}
export default Moodcard