// import AcceptedQuests from "./AcceptedQuests"
import MyQuests from "./MyQuests"
import { FaFilter } from "react-icons/fa";

const Quests = () =>{
    return (
        <div>
            <div className="flex flex-col justify-center items-center  h-screen">
                {/* header and options */}
                <div className=" w-full flex flex-row justify-between ">
                    <div className="ml-8 cursor-pointer"> 
                        <FaFilter />
                    </div>
                    <div className="mb-10 border-b-[1px] border-black">
                        <h1 className=" tracking-wide">My Quests</h1>
                    </div>
                    <button className="mr-8 w-5 h-5 border-2 border-black rounded-sm cursor-pointer">
                        
                    </button>
                    
                </div>
                 {/* <AcceptedQuests /> */}
                <MyQuests />
            </div>
           
        </div>
    )
}

export default Quests