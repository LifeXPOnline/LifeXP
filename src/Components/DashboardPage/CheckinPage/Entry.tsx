import PropTypes from 'prop-types'


interface EntryProps {
    selectedMood: string | null;
}

const Entry: React.FC<EntryProps> = () => {
 
    return (
        // <div>
            <div className="space-y-5 mt-8 w-full flex items-center flex-col journal-entry ">
                    <div className='w-9/12 flex  justify-center'>
                        <h1 className="text-[14px] mb-5 mt-10 md:text-base md:mb-2 ">
                            Here you can journal your thoughts and how you&apos;re feeling
                        </h1>
                    </div>
                    <div className="w-10/12 space-y-3 flex flex-col justify-center items-center">
                        <textarea
                            className="border border-black text-sm  w-11/12 md:w-10/12"
                            placeholder="Title of entry"
                        />
                        <textarea 
                            className="border border-black text-sm py-1 w-11/12 md:w-10/12 h-64 "
                            placeholder="Journal your thoughts here"
                        />
                        <button className="relative">
                            Submit
                        </button>
                    </div>
              
                </div> 
        // </div>
    )
}

Entry.propTypes = {
    selectedMood: PropTypes.string,
}

export default Entry
