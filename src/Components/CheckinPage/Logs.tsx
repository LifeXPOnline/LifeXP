import { Dispatch, SetStateAction } from "react"
import { IoIosArrowRoundBack, IoIosArrowRoundForward, IoIosSearch } from "react-icons/io"
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; // optional for styling
import PropTypes from 'prop-types';

interface LogsProps {
    setThePage: Dispatch<SetStateAction<string>>
}

const Logs: React.FC<LogsProps> = ({setThePage}) => {

    const styles = {
        "log": "border-2 py-2 rounded-md border-black text-sm flex justify-between icon-hover3 cursor-pointer",
        "arrowButton":"border border-black p-[3px] rounded-sm icon-hover3"
    }

    return (
        <div className="flex flex-col h-screen ">
            <div className="md:border-t md:border-black md:mt-20">
                {/* back button */}
                <div className="mt-16 md:mt-8 flex justify-start ml-5 md:ml-10">
                    <Tippy
                        delay={900}
                        placement="right"
                        content="go back">
                        <button 
                            onClick={()=>{setThePage("checkin")}}
                            className="border-b border-black text-gray-600 icon-hover3 mb-5">
                                <IoIosArrowRoundBack size={38}/>
                        </button>
                    </Tippy>
                </div>
                
                <div className="flex flex-col items-center">
                    <h1 className="justify-center mb-10 mt-3 flex">Your Journal Entries</h1>
                    {/* Date settings for journal entries - i.e october 2023 */}
                    <div className="mb-5 flex justify-center space-x-3"> 
                        {/* prev button */}
                        <Tippy
                            delay={1000}
                            placement="left"
                            content="prev"
                            >
                            <button className={styles.arrowButton}>
                                <IoIosArrowRoundBack /> 
                            </button>
                        </Tippy>
                            {/* dates will be placed here */}
                            <h1> October 2023 </h1>

                            {/* next button */}
                        <Tippy
                            delay={1000}
                            placement="right"
                            content="next"
                            >
                            <button className={styles.arrowButton}>
                                <IoIosArrowRoundForward /> 
                            </button>
                        </Tippy>
                    </div>
                    
                    <div className="space-y-3 md:w-[500px]">
                        <div className="flex justify-center mb-5 icon-hover3">
                            {/* search bar for journal entries */}
                            <div className="flex">
                                <input className="border-b border-l border-t py-[1.5px] border-black w-[300px] rounded-l-md" />
                                <button className="border-r border-t border-b border-black bg-white rounded-r-md w-6 px-1">
                                    <IoIosSearch />
                                </button>
                            </div>
                        </div>
                        {/* journal entries */}
                        <div className={styles.log}>
                            <h1 className="ml-3">10/24/2023</h1>
                            <h1>Title: Went to the park</h1>
                            <h1 className="mr-3">Mood: Ok</h1>
                        </div>

                        <div className={styles.log}>
                            <h1 className="ml-3">10/24/2023</h1>    
                            <h1 className="ml-2 mr-2">Title: Ate some good pho</h1>
                            <h1 className="mr-3">Mood: Ok</h1>
                        </div>

                        <div className={styles.log}>
                            <h1 className="ml-3">10/28/2023</h1>  
                            <h1 className="ml-2 mr-2">Title: text text text</h1>
                            <h1 className="mr-4">Mood: Sad</h1>
                        </div>

                        <div className={styles.log}>
                            <h1 className="ml-3">10/29/2023</h1>  
                            <h1 className="ml-2 mr-2">Title: text text text </h1>
                            <h1 className="mr-4">Mood: Depressed</h1>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}
Logs.propTypes = {
    setThePage: PropTypes.func.isRequired,
};
export default Logs