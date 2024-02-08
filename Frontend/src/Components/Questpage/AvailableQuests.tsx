import Questcard from "./Questcard";
import FilterMenu from "./FilterMenu";
// import { CiDumbbell } from "react-icons/ci";
import { Fitness, Work, Personal } from "../Icons/Icons";

const AvailableQuests = ()=> {

    const quests = {
        "Daily Quest":{
            Icon:(<Fitness/>),
            Description:"Run 1 mile",
            Reward:"300 XP"
        },
        "Work" : {
            Icon:(<Work />),
            Description:"Complete a work task",
            Reward:"200 XP"
        },
        "Personal" : {
            Icon:(<Personal />),
            Description:"Meditate 15 minutes",
            Reward:"250 XP"
        },
        "Fitness":{
            Icon:(<Fitness />),
            Description:"Curl 20lb dumbbells",
            Reward:"210 XP"
        }
    }
    
   
    return(
    <div className=" md:flex md:justify-center h-screen">
        <div className=" md:w-full md:border-t-[1.2px] md:border-black md:mt-20 ">
            <div className="flex flex-col items-center">
                    {/* header and options */}
                    <div className="relative w-full flex flex-row justify-between mt-14">
                        <div className="mb-12 ml-8 border border-b-2 w-32 border-black">
                            <h1 className="tracking-wider pl-4">My Quests</h1>
                        </div>
                       
                        <FilterMenu />
                    </div>
                    {/* quest cards */}
                    <div className="grid  xl:grid-cols-4 lmd:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 gap-0 ">
                        {Object.entries(quests).map(([QuestType, { Icon, Description, Reward }]) => (
                            <Questcard 
                                key={QuestType} 
                                QuestType={QuestType} 
                                Icon={Icon} 
                                Description={Description} 
                                Reward={Reward}
                            />
                        ))}
                    </div>
                </div>
            
            </div>
            
    </div>
    )
}

export default AvailableQuests