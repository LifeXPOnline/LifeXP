import Tasks from "./Tasks";

const Home = ()=> {
    return(
        <div className="md:flex md:justify-center">
            <div className="md:border-[1.5px] md:border-black md:w-[99%]">
                <Tasks />
            </div>
        </div>
    )
}

export default Home