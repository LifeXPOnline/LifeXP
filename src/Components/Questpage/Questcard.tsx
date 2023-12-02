import { GiBiceps } from "react-icons/gi";
import { FaStar } from "react-icons/fa";


interface QuestcardProps {
    title: string
    reward: string
}

const Questcard: React.FC<QuestcardProps> = ({ title, reward }) =>{
    return(
        <div className="flex flex-col space-y-5 items-center justify-center rounded-xl border-black w-[256px] h-[420px] border-1 shadow-sharp-sm 
                        hover:translate-y-[-5px] mb-10 mr-10 ml-10 transition-transform duration-200 cursor-default">
                <h1 className="tracking-widest text-sm mb-1">{title}</h1> 

                <GiBiceps size={55}/>
            
                <div className="flex items-center justify-center h-[58px] w-5/6 mt-2 mb-2 bg-quest-gray1">
                    <p className=" text-md text-center font-mono tracking-wide">
                    Bench 20 lbs
                    </p>
                </div>
                
                <div className="flex flex-col items-center">
                    <h1 className="text-sm">Difficulty</h1>
                    <div className="flex flex-row mt-2">
                        <FaStar className="text-quest-gray3" size={20}/><FaStar className="text-quest-gray3" size={20}/><FaStar className="text-quest-gray3" size={20}/>
                    </div>
                </div>
                <div className="flex flex-col items-center">
                    <h1 className="text-sm mb-1">Reward</h1>
                    <h1 className="text-sm tracking-normal font-bold">{reward}</h1>
                </div>
                <button className="bg-quest-gray2 border-[1.5px] border-black text-white w-7/12 h-10 rounded-md text-xs hover:bg-quest-gray4">
                    Accept
                </button>
        </div>
    )
}
export default Questcard