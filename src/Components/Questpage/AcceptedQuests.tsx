// import { FaFilter } from "react-icons/fa";
import FilterMenu from "./FilterMenu";
import { Scroll } from "../Icons/Icons";

const AcceptedQuests = () => {

    const scroll = (): React.ReactNode => {
        return <div className="mb-10">
            <Scroll />
    </div>
    }

    return(<div className=" md:flex md:justify-center h-screen">
    <div className=" md:w-full md:border-t-[1.2px] md:border-black md:mt-20 ">
        <div className="flex flex-col items-center">
                {/* header and options */}
                <div className="relative w-full flex flex-row justify-between mt-14">
                    <div className="mb-12 ml-8 border border-b-2 w-32 border-black">
                        <h1 className="tracking-wider pl-4">Accepted</h1>
                    </div>
                    <FilterMenu />
                </div>
                {/* quest cards */}
                <div className="flex flex-col justify-center">
                    <div className="flex items-center justify-center w-[240px] mb-2 mt-10">   
                        {scroll()}
                    </div>
                    <h1> You don&apos;t have any quests yet. </h1>
                </div>
                
            </div>
        </div>
    </div>)
}

export default AcceptedQuests