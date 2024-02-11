import AcceptedQuests from "./AcceptedQuests"
import AvailableQuests from "./AvailableQuests"
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; // optional for styling
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
        <AvailableQuests />
        }
        
        {changePage?
        <Tippy
            delay={800}
            placement="right"
            content="Available">
            <button  
                onClick={()=>{setChangePage(!changePage)}} 
                className={button.styling}>
                <TbCards size={28}/>

            </button>
        </Tippy>:
        <Tippy 
            delay={800}
            placement="right"
            content="Accepted">
            <button  
                onClick={()=>{setChangePage(!changePage)}} 
                className={button.styling}>
                <GiScrollQuill  size={28} />
            </button>
        </Tippy>}
       
    </div>
           
    )
}

export default Quests