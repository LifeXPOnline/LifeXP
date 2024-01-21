import { WiStars } from "react-icons/wi";
import { CiSquarePlus } from "react-icons/ci";
import { IoIosCheckbox } from "react-icons/io";
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; // optional for styling


const Tasks = () => {
    return (
        <div className="flex flex-col md:border-l md:border-t md:border-black md:w-5/6 items-center space-y-6">
            
            <div className="flex flex-row mt-20 md:mt-14 items-center justify-between w-96">
                <div className="ml-0 md:hidden flex items-center justify-center h-11 w-11 border-1 
                                bg-slate-100 border-black shadow-sharp-sm cursor-pointer 
                                icon-hover4 transition-transform duration-200 hover:shadow-sharp-md">
                    <h1 className="tracking-wide ">XP</h1>
                </div>
                <div className="flex items-center mr-20">
                    <WiStars size = {30}/>
                    <h1 className="text-lg underline mb-1 md:mb-4">Your Tasks</h1>
                </div>
                <div>
                    
                </div>
            </div>
            
            {/* Fitness */}
            <div className=" ">
                <div className="flex justify-between">
                    <h1 className="text-normal mb-2">Fitness</h1> 
                    <Tippy 
                        delay={800}
                        content="add a task">
                        <button>
                            <CiSquarePlus size={25} className="icon-hover"/>
                        </button>
                    </Tippy>
                </div>
                <div className="flex justify-between w-96 md:w-[828px] h-32 border custom-gray border-black shadow-sharp shadow-transition hover:shadow-sharp-xl icon-hover4 transition-transform duration-200 cursor-pointer" >
                    <div className="ml-6 mt-4 space-y-4">
                        <form className="flex items-center">
                            <input type="checkbox" name="category" id="fitness" className="custom-checkbox form-radio h-5 w-5 rounded-none text-gray-600" />
                            <label htmlFor="fitness" className="ml-2 text-sm">Deadlift</label>
                        </form>
                        <form className="flex items-center">
                            <input type="checkbox" name="category" id="fitness" className="custom-checkbox form-radio h-5 w-5 text-black-600" />
                            <label htmlFor="fitness" className="ml-2 text-sm">Curl 20lb dumbbells</label>
                        </form>
                        <form className="flex items-center">
                            <input type="checkbox" name="category" id="fitness" className="custom-checkbox form-radio h-5 w-5 text-gray-600" />
                            <label htmlFor="fitness" className="ml-2 text-sm">Cardio for 20 minutes</label>
                            
                        </form>
                    </div>
                    <div className=" flex items-end mr-2">
                        <IoIosCheckbox className="hover:text-gray-700"  size ={30}/>
                    </div>
                </div>
            </div>

            {/* Work */}
            <div>   
                <div className="flex justify-between">
                    <h1 className="text-normal mb-2">Work</h1> 
                    <Tippy 
                        delay={800}
                        content="add a task">
                        <button>
                            <CiSquarePlus size={25} className="icon-hover"/>
                        </button>
                    </Tippy>
                </div>
                <div className="w-96 md:w-[828px] h-24 border custom-gray border-black shadow-sharp shadow-transition hover:shadow-sharp-xl icon-hover4 transition-transform duration-200 cursor-pointer">
                    <div className="ml-6 mt-4 space-y-4">
                        <form className="flex items-center">
                            <input type="checkbox" name="category" id="fitness" className="custom-checkbox form-radio h-5 w-5 text-gray-600" />
                            <label htmlFor="fitness" className="ml-2 text-sm">Meeting</label>
                        </form>
                        <form className="flex items-center">
                            <input type="checkbox" name="category" id="fitness" className="custom-checkbox form-radio h-5 w-5 text-black-600" />
                            <label htmlFor="fitness" className="ml-2 text-sm">Client project</label>
                        </form>
                      
                    </div>
                </div>
            </div>

            {/* Personal */}
            <div>
                <div className="flex justify-between">
                    <h1 className="text-normal mb-2">Personal</h1> 
                    <Tippy 
                        delay={800}
                        content="add a task">
                        <button>
                            <CiSquarePlus size={25} className="icon-hover"/>
                        </button>
                    </Tippy>
                </div>
                <div className="w-96 md:w-[828px] h-32 border custom-gray border-black shadow-sharp shadow-transition hover:shadow-sharp-xl icon-hover4 transition-transform duration-200 cursor-pointer">
                    <div className="ml-6 mt-4 space-y-4">
                        <form className="flex items-center">
                            <input type="checkbox" name="category" id="fitness" className="custom-checkbox form-radio h-5 w-5 text-gray-600" />
                            <label htmlFor="fitness" className="ml-2 text-sm">Affirmations</label>
                        </form>
                        <form className="flex items-center">
                            <input type="checkbox" name="category" id="fitness" className="custom-checkbox form-radio h-5 w-5 text-black-600" />
                            <label htmlFor="fitness" className="ml-2 text-sm">Cooking</label>
                        </form>
                        <form className="flex items-center">
                            <input type="checkbox" name="category" id="fitness" className="custom-checkbox form-radio h-5 w-5 text-gray-600 rounded-none" />
                            <label htmlFor="fitness" className="ml-2 text-sm">Journaling</label>
                        </form>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Tasks