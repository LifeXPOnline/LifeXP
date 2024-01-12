import Questcard from "./Questcard";
import { FaFilter } from "react-icons/fa";
import { GiScrollQuill } from "react-icons/gi";

const MyQuests = ()=> {
    return(
    <div className=" md:flex md:justify-center h-screen">
        <div className=" md:w-full md:border-t-[1.2px] md:border-black md:mt-20 ">
            <div className="flex flex-col items-center">
                    {/* header and options */}
                    <div className=" w-full flex flex-row justify-between mt-14">
                        <div className="mb-12 ml-8 border-[1.5px] border-b-2 w-32 border-black">
                            <h1 className="tracking-wider ml-4">My Quests</h1>
                        </div>
                        <div className="flex space-x-4 mr-8">
                            <button className="border-[1.5px] shadow-sharp-sm icon-hover hover:shadow-sharp-md p-2 
                                            border-black bg-white rounded-md fixed bottom-10 left-8 z-0">
                                <GiScrollQuill  size={28} />
                            </button>
                            <div className="flex flex-row items-center mt-[2px] space-x-1 bottom-5 left-0 mr-2 cursor-pointer"> 
                                <h1>Filter</h1>
                                <FaFilter />
                            </div>
                        </div>
                    </div>
                            
                    <div className="flex flex-col justify-center md:flex-row">
                        <Questcard Title="Daily Quest" Reward="300 XP"/>
                        <Questcard Title="Fitness" Reward="500 XP" />
                        <Questcard Title="Work" Reward="200 XP" />
                        <Questcard Title="Personal" Reward="180 XP"/>                   
                    </div>
                </div>
            
        </div>
    </div>
    )
}

export default MyQuests