import Questcard from "./Questcard";
import { FaFilter } from "react-icons/fa";

const MyQuests = ()=> {
    return(
    <div className="md:flex md:justify-center">
    <div className="h-full  md:w-[99%] md:border-[1.5px] md:border-black md:mt-[10px]">
        <div className="flex flex-col  items-center">
                {/* header and options */}
                <div className=" w-full flex flex-row justify-between mt-3">
                    <div className="ml-8 cursor-pointer"> 
                        <FaFilter />
                    </div>
                    <div className="mb-10 border-b-[1px] border-black">
                        <h1 className="tracking-wide">My Quests</h1>
                    </div>
                    <button className="mr-8 w-5 h-5 border-2 border-black rounded-sm cursor-pointer">
                        
                    </button>
                    
                </div>
                <div className="flex flex-col justify-center">
                <Questcard title="Daily Quest" reward="300 XP"/>
                <Questcard title="Fitness" reward="500 XP" />
                <Questcard title="Work" reward="200 XP" />
                <Questcard title="Personal" reward="180 XP"/>
                
                </div>
            </div>
        
    </div>
    </div>
    )
}

export default MyQuests