import Questcard from "./Questcard";
import { FaFilter } from "react-icons/fa";
import { useState } from "react";

const MyQuests = ()=> {
    const[filterOpen, setFilterOpen] = useState<boolean>(false)
    return(
    <div className=" md:flex md:justify-center h-screen">
        <div className=" md:w-full md:border-t-[1.2px] md:border-black md:mt-20 ">
            <div className="flex flex-col items-center">
                    {/* header and options */}
                    <div className=" w-full flex flex-row justify-between mt-14">
                        <div className="mb-12 ml-8 border border-b-2 w-32 border-black">
                            <h1 className="tracking-wider pl-4">My Quests</h1>
                        </div>
                        <div className="flex mr-8">
                            <div className="flex flex-row items-center mt-[2px] space-x-1 bottom-5 left-0 mr-2 cursor-pointer"
                                 onClick={()=>{setFilterOpen(!filterOpen)}}> 
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
            {filterOpen&&
            <div className="absolute">
                <div className="relative top-14 right-24 border border-black border-b-2 bg-slate-50 w-44 h-32 z-50">
                    <div className="text-sm">
                        <div className="flex flex-row space-x-1">
                            <input type="checkbox" id="daily-quest"/>
                            <label htmlFor="daily-quest"><h1>Daily Quest</h1></label>
                        </div>
                        <div className="flex flex-row space-x-1">
                            <input type="checkbox" id="personal"/>
                            <label htmlFor="daily-quest"><h1>Personal</h1></label>
                        </div>
                        <div className="flex flex-row space-x-1">
                            <input type="checkbox" id="work"/>
                            <label htmlFor="daily-quest"><h1>Work</h1></label>
                        </div>
                        <div className="flex flex-row space-x-1">
                            <input type="checkbox" id="fitness"/>
                            <label htmlFor="daily-quest"><h1>Fitness</h1></label>
                        </div>
                    </div>
                </div>
            </div>}
    </div>
    )
}

export default MyQuests