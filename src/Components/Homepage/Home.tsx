import Tasks from "./Tasks";
import Trackers from "./Trackers";

const Home = ()=> {
    return(
        <div className="md:flex md:justify-center">
            <div className=" md:border-black md:w-[99%] md:mt-20 md:flex md:flex-row md:space-x-8">
                <Trackers />
                <Tasks />
            </div>
        </div>
    )
}

export default Home