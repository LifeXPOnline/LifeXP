import Tasks from "./Tasks";

const Home = ()=> {
    return(
        <div className="md:flex md:justify-center">
            <div className="md:border-[1.2px] md:border-black md:w-[99%] md:mt-20">
                <Tasks />
            </div>
        </div>
    )
}

export default Home