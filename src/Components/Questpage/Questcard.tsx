import { GiBiceps } from "react-icons/gi";
import { FaStar } from "react-icons/fa";


interface QuestcardProps {
    title: string
    reward: string
}

const Questcard: React.FC<QuestcardProps> = ({ title, reward }) =>{
    return(
        <div className="flex flex-col space-y-5 items-center justify-center rounded-xl border-black w-64 h-[450px] border-1 shadow-sharp-sm 
                        hover:translate-y-[-5px] mb-10 mr-10 ml-10 transition-transform duration-200 cursor-default">
                <h1 className="tracking-widest text-sm ">{title}</h1> 

                <GiBiceps size={55}/>
            
                <div className="ml-3 ">
                    <div className="h-[82px] mt-2 mb-2">
                        <p className=" text-xs text-center tracking-wide">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, accusantium perferendis! Explicabo adipisci eius provident
                        </p>
                    </div>
                </div>
                <div className="flex flex-col items-center">
                    <h1 className="text-sm">Difficulty</h1>
                    <div className="flex flex-row mt-2">
                        <FaStar className="text-gray-500" size={20}/><FaStar className="text-gray-500" size={20}/><FaStar className="text-gray-500" size={20}/>
                    </div>
                </div>
                <div className="flex flex-col items-center">
                    <h1 className="text-sm mb-1">Reward</h1>
                    <h1 className="text-sm tracking-normal font-bold">{reward}</h1>
                </div>
                <button className="bg-gray-800 text-white w-28 h-10 rounded-md text-xs hover:bg-gray-600">
                    Accept
                </button>
        </div>
    )
}
export default Questcard