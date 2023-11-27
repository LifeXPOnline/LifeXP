import { GiBiceps } from "react-icons/gi";
import { FaStar } from "react-icons/fa";
import { FaFilter } from "react-icons/fa";

const Quests = ()=> {
    return(<div className="flex flex-col justify-center items-center  h-screen">
       {/* header and options */}
       <div className=" w-full flex flex-row justify-between ">
            <div className="ml-8"> 
                <FaFilter />
            </div>
            <div className="mb-10 border-b-[1px] border-black">
                <h1 className=" tracking-wide">My Quests</h1>
            </div>
            <div className="mr-8">
                
            </div>
        </div>
        {/* quest card */}
        <div className=" flex flex-col space-y-5 items-center justify-center rounded-lg border-black w-64 h-[450px] border-1 shadow-sharp-sm">
            <h1 className="tracking-wide text-sm">Daily Quest</h1>

            <GiBiceps size={55}/>
           
            <div className="ml-3">
                <p className="text-sm tracking-wide">
                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, accusantium perferendis! Explicabo adipisci eius provident
                </p>
            </div>
            <div className="flex flex-col items-center">
                 <h1 className="text-sm">Difficulty</h1>
                <div className="flex flex-row mt-2">
                    <FaStar clasName="bg-white" size={20}/><FaStar size={20}/><FaStar size={20}/>
                </div>
            </div>
            <div className="flex flex-col items-center">
                <h1 className="text-sm">Reward</h1>
                <h1 className="font-bold text-sm">500xp</h1>
            </div>
            <button className="bg-gray-800 text-white w-28 h-10 rounded-md text-xs">
                Accept
            </button>
        </div>
    </div>
    )
}

export default Quests