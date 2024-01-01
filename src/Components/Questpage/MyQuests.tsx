import Questcard from "./Questcard";
import { FaFilter } from "react-icons/fa";
import { GiScrollQuill } from "react-icons/gi";

const MyQuests = ()=> {
    return(
    <div className="md:flex md:justify-center ">
    <div className=" md:w-[99%] md:border-[1.2px] md:border-black md:mt-[80px] rounded-md ">
        <div className="flex flex-col items-center">
                {/* header and options */}
                <div className=" w-full flex flex-row justify-between mt-16">
                    <div className="mb-10 ml-8 border-[1.5px] border-b-2 w-32 border-black">
                        <h1 className="tracking-wider ml-4">My Quests</h1>
                    </div>
                    <div className="flex space-x-4 mr-8">
                        {/* <h3 className="text-sm">Accepted</h3> */}
                        
                        <button className="border-[1.5px] shadow-sharp-sm icon-hover3 p-2 border-black bg-white rounded-md fixed bottom-10 left-8 z-0">
                            <GiScrollQuill  size={28} />
                        </button>
                        {/* <button className="mr-8 w-5 h-5 border-2 border-black rounded-sm cursor-pointer">
                            
                        </button> */}

                        <div className="mt-[2px] bottom-5 left-0 mr-2 cursor-pointer"> 
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