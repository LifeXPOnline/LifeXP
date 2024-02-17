import Tasks from "./Tasks";
import Trackers from "./Trackers";
import { useState } from "react";
import useIsLargeScreen from "../../../Hooks/useIsLargeScreen";

const Home = ()=> {
    const [thePage, setThePage] = useState<string>("Tasks")
    const isLargeScreen:boolean = useIsLargeScreen()

    return(
        <div className="md:flex md:justify-center h-screen">

            <div className=" md:border-black md:w-[100%] md:mt-20 md:flex md:flex-row md:space-x-8">
                {/* if screen width is greater than 1024px, show both components - otherwise set based on state("Tasks") */}
                {(isLargeScreen || thePage === "Trackers")&&<Trackers setThePage = {setThePage} />}
                {(isLargeScreen || thePage === "Tasks")&&<Tasks setThePage = {setThePage}/>}
            </div>

        </div>
    )
}

export default Home