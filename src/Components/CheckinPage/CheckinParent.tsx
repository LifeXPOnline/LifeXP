// import Logs from "./Logs"
import Checkin from "./Checkin"
import Logs from "./Logs"
import { Dispatch, SetStateAction, useState } from "react"

interface pageProps {
    thePage:string
    setThePage: Dispatch<SetStateAction<string>>
}
const CheckinParent: React.FC<pageProps> = ()=> {
    const [thePage,setThePage] = useState("checkin")

    return(<div>
        {thePage === "logs"&& <Logs />}
        {thePage === "checkin"&& <Checkin thePage={thePage} setThePage={setThePage} />}
    </div>)

}
export default CheckinParent