import { IoIosArrowRoundBack, IoIosArrowRoundForward, IoIosSearch } from "react-icons/io";

const Logs = () => {
    return (
        <div className="flex flex-col h-screen ">
            <div className="mt-20 flex justify-start ml-10">
                <button className="border-b border-black text-gray-600 icon-hover3 mb-5">
                        <IoIosArrowRoundBack size={38}/>
                </button>
            </div>
            <div className="flex flex-col items-center">
                <h1 className="justify-center mb-10 mt-3 flex">Your Journal Entries</h1>
                <div className="mb-5 flex justify-center space-x-3"> 
                    <button className="border border-black p-[3px] rounded-sm icon-hover3">
                        <IoIosArrowRoundBack /> 
                    </button>

                    <h1> October 2023 </h1>

                    <button className="border border-black p-[3px] rounded-sm icon-hover3">
                        <IoIosArrowRoundForward /> 
                    </button>
                
                </div>
                <div className="space-y-3 md:w-[500px]">
                    <div className="flex justify-center mb-5 icon-hover3">
                        <div className="flex">
                            <input className="border-b border-l border-t py-[1.5px] border-black w-[300px] rounded-l-md" />
                            <button className="border-r border-t border-b border-black bg-white rounded-r-md w-6 px-1">
                                <IoIosSearch />
                            </button>
                        </div>
                    </div>

                    <div className="border-2 py-2 rounded-md border-black text-sm flex justify-between icon-hover3">
                        <h1 className="ml-3">10/24/2023</h1>
                        <h1>Title: Went to the park</h1>
                        <h1 className="mr-3">Mood: Ok</h1>
                    </div>

                    <div className="border-2 border-black text-sm py-2 flex justify-between rounded-md icon-hover3">
                        <h1 className="ml-3">10/24/2023</h1>    
                        <h1 className="ml-2 mr-2">Title: Ate some good pho</h1>
                        <h1 className="mr-3">Mood: Ok</h1>
                    </div>

                    <div className="border-2 border-black text-sm py-2 flex justify-between rounded-md icon-hover3">
                        <h1 className="ml-3">10/28/2023</h1>  
                        <h1 className="ml-2 mr-2">Title: text text text</h1>
                        <h1 className="mr-4">Mood: Sad</h1>
                    </div>

                    <div className="border-2 border-black text-sm py-2 flex justify-between rounded-md icon-hover3">
                        <h1 className="ml-3">10/29/2023</h1>  
                        <h1 className="ml-2 mr-2">Title: text text text </h1>
                        <h1 className="mr-4">Mood: Depressed</h1>
                    </div>
                </div>
                
            </div>
        </div>
    )
}
export default Logs