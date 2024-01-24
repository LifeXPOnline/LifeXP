import Tasks from "./Tasks";
import Trackers from "./Trackers";
import { useState } from "react";

const Home = ()=> {
    const [thePage, setThePage] = useState<string>("")
    return(
        <div className="md:flex md:justify-center h-screen">
            <div className=" md:border-black md:w-[99%] md:mt-20 md:flex md:flex-row md:space-x-8">
                
                {thePage === "Trackers"&&<Trackers setThePage = {setThePage} />}
                {thePage === "Tasks"&& <Tasks setThePage = {setThePage}/>}
                <Trackers />
                <Tasks />
            </div>
        </div>
    )
}

export default Home