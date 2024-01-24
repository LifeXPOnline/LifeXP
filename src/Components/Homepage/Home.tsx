import Tasks from "./Tasks";
import Trackers from "./Trackers";
import { useState } from "react";
import useIsLargeScreen from "../../logic/useIsLargeScreen";

const Home = ()=> {
    const [thePage, setThePage] = useState<string>("Tasks")
    const isLargeScreen:boolean = useIsLargeScreen()

    return(
        <div className="md:flex md:justify-center h-screen">

            <div className=" md:border-black md:w-[99%] md:mt-20 md:flex md:flex-row md:space-x-8">
                {(isLargeScreen || thePage === "Trackers")&&<Trackers setThePage = {setThePage} />}
                {(isLargeScreen || thePage === "Tasks")&&<Tasks setThePage = {setThePage}/>}
            </div>

        </div>
    )
}

export default Home