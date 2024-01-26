import { FaFilter } from "react-icons/fa";
import { useState, useRef } from "react";
import useOutsideClick from "../../Hooks/useOutsideClick";
import { IoIosCheckbox } from "react-icons/io";
const FilterMenu = () => {
    const[filterOpen, setFilterOpen] = useState<boolean>(false)
    const filterRef:React.MutableRefObject<null> = useRef(null)
    useOutsideClick({ ref: filterRef, callback: () => { setFilterOpen(false) }});
    
    return(
    <div>
        
         {/* filter button */}
         <div className="flex mr-8">
            <div className="flex flex-row items-center mt-[2px] space-x-1 bottom-5 left-0 mr-2 cursor-pointer"
                    onClick={()=>{setFilterOpen(!filterOpen)}}> 
                <h1>Filter</h1>
                <FaFilter />
            </div>
            
         </div>
        {/* filter menu */}
        {filterOpen&&
        <div ref={filterRef} className="absolute right-10 top-8 z-50">
            <div className=" border border-black border-b-2 bg-slate-50 w-44 h-33 z-50">
                <div className="flex flex-col items-center text-sm mt-3 space-y-1">
                    <div className="flex flex-row space-x-2">
                        <label htmlFor="daily-quest">
                            <h1>Daily Quest</h1>
                        </label>
                        <input type="checkbox" id="daily-quest" className="custom-checkbox2 h-5 w-4"/>
                        
                    </div>
                    <div className="flex flex-row space-x-8">
                        <label htmlFor="daily-quest">
                            <h1>Personal</h1>
                        </label>
                        <input type="checkbox" id="personal" className="custom-checkbox2 h-5 w-4"/>
                       
                    </div>
                    <div className="flex flex-row space-x-16">
                        <label htmlFor="daily-quest">
                            <h1>Work</h1>
                        </label>
                        <input type="checkbox" id="work" className="custom-checkbox2 h-5 w-4"/>
                        
                    </div>
                    <div className="flex flex-row space-x-10">
                        <label htmlFor="daily-quest">
                            <h1>Fitness</h1>
                        </label>
                        <input type="checkbox" id="fitness" className="custom-checkbox2 h-5 w-4"/>
                        
                    </div>
                </div>
                <div className=" flex justify-end ">
                        <IoIosCheckbox className="hover:text-gray-700 cursor-pointer mt-4"  size = {28}/>
                </div>
            </div>
        </div>}
    </div>)
}

export default FilterMenu
