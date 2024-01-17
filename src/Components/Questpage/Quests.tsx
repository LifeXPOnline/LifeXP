import AcceptedQuests from "./AcceptedQuests"
import MyQuests from "./MyQuests"
import { GiScrollQuill } from "react-icons/gi";
import { useState } from 'react'
import { TbCards } from "react-icons/tb";

const Quests = () =>{
    const [changePage, setChangePage] = useState(false)

    const button = {
        "styling": "border-[1.5px] shadow-sharp-sm icon-hover hover:shadow-sharp-sm p-2 border-black bg-white rounded-md fixed bottom-10 left-8 z-0"
    }
    return (<div>
        {changePage?
        <AcceptedQuests />
        :
        <MyQuests />
        }
        
        {changePage?
        <button  
            onClick={()=>{setChangePage(!changePage)}} 
            className={button.styling}>
            <TbCards size={28}/>

        </button>:
        <button 
            onClick={()=>{setChangePage(!changePage)}} 
            className={button.styling}>
            <GiScrollQuill  size={28} />
        </button>}
    </div>
           
    )
}

export default Quests