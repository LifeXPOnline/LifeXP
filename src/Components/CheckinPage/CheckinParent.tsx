// import Logs from "./Logs"
import Checkin from "./Checkin"
import Logs from "./Logs"
import { useState } from "react"


const CheckinParent = ()=> {
    const [thePage,setThePage] = useState<string>("checkin")

    return(<div>
        {thePage === "logs"&& <Logs setThePage={setThePage}/>}
        {thePage === "checkin"&& <Checkin setThePage={setThePage} />}
    </div>)

}
export default CheckinParent