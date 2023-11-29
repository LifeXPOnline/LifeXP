import Questcard from "./Questcard";
import { FaFilter } from "react-icons/fa";

const MyQuests = ()=> {
    return(<div className="h-screen md:w-[99%] border-[1.5px] border-black mt-[6px]">
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
                <Questcard />
            </div>
        
    </div>
    )
}

export default MyQuests