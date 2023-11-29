import AcceptedQuests from "./AcceptedQuests"
import MyQuests from "./MyQuests"


const Quests = () =>{
    return (<div>
        <div className="hidden==">
            <AcceptedQuests />
        </div>
        <div className="block">
            <MyQuests />
        </div>
    </div>
           
    )
}

export default Quests