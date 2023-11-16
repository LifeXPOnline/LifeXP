import { WiStars } from "react-icons/wi";
import { CiSquarePlus } from "react-icons/ci";



const Tasks = () => {
    return (
        <div className="flex flex-col justify-center items-center h-screen space-y-6">
            
            <div className="flex flex-row  items-center justify-between w-96">
                <div className="ml-0 flex items-center justify-center h-11 w-11 border-1 
                                bg-slate-100 border-black shadow-sharp-sm cursor-pointer 
                                hover:translate-y-[-5px] transition-transform duration-200">
                    <h1 className="tracking-wide ">XP</h1>
                </div>
                <div className="flex row items-center mr-20">
                    <WiStars size = {30}/>
                    <h1 className="text-lg underline mb-1">Your Tasks</h1>
                </div>
                <div>
                    
                </div>
            </div>
            
            {/* Fitness */}
            <div className=" ">
                <div className="flex justify-between"><h1 className="text-normal mb-2">Fitness</h1> <button className=""><CiSquarePlus size = {25}/></button></div>
                <div className="w-96 h-32 border custom-gray border-black shadow-sharp  cursor-pointer hover:translate-y-[-5px] transition-transform duration-200 cursor-pointer" >
                    <div className="ml-6 mt-4 space-y-2">
                        <form>
                            <input type="checkbox" name="category" id="fitness" className="custom-checkbox form-radio h-5 w-5 text-gray-600" />
                            <label htmlFor="fitness" className="ml-2 text-sm">Deadlift</label>
                        </form>
                        <form>
                            <input type="checkbox" name="category" id="fitness" className="custom-checkbox form-radio h-5 w-5 text-black-600" />
                            <label htmlFor="fitness" className="ml-2 text-sm">Curl 20lb dumbbells</label>
                        </form>
                        <form>
                            <input type="checkbox" name="category" id="fitness" className="custom-checkbox form-radio h-5 w-5 text-gray-600" />
                            <label htmlFor="fitness" className="ml-2 text-sm">Cardio for 20 minutes</label>
                        </form>
                    </div>
                </div>
            </div>

            {/* Work */}
            <div>   
                <div className="flex justify-between">
                    <h1 className="text-normal mb-2">Work</h1> 
                    <CiSquarePlus className="cursor-pointer" 
                                    size = {25}/>
                </div>
                <div className="w-96 h-24 border custom-gray border-black shadow-sharp hover:translate-y-[-5px] transition-transform duration-200 cursor-pointer">
                    <div className="ml-6 mt-4 space-y-2">
                        <form>
                            <input type="checkbox" name="category" id="fitness" className="custom-checkbox form-radio h-5 w-5 text-gray-600" />
                            <label htmlFor="fitness" className="ml-2 text-sm">Deadlift</label>
                        </form>
                        <form>
                            <input type="checkbox" name="category" id="fitness" className="custom-checkbox form-radio h-5 w-5 text-black-600" />
                            <label htmlFor="fitness" className="ml-2 text-sm">Curl 20lb dumbbells</label>
                        </form>
                      
                    </div>
                </div>
            </div>

            {/* Personal */}
            <div>
                <div className="flex justify-between">
                    <h1 className="text-normal mb-2">Personal</h1> 
                    <CiSquarePlus className="cursor-pointer" 
                                    size = {25}/>
                </div>
                <div className="w-96 h-32 border custom-gray border-black shadow-sharp hover:translate-y-[-5px] transition-transform duration-200 cursor-pointer">
                    <div className="ml-6 mt-4 space-y-2">
                        <form>
                            <input type="checkbox" name="category" id="fitness" className="custom-checkbox form-radio h-5 w-5 text-gray-600" />
                            <label htmlFor="fitness" className="ml-2 text-sm">Deadlift</label>
                        </form>
                        <form>
                            <input type="checkbox" name="category" id="fitness" className="custom-checkbox form-radio h-5 w-5 text-black-600" />
                            <label htmlFor="fitness" className="ml-2 text-sm">Curl 20lb dumbbells</label>
                        </form>
                        <form>
                            <input type="checkbox" name="category" id="fitness" className="custom-checkbox form-radio h-5 w-5 text-gray-600 rounded-none" />
                            <label htmlFor="fitness" className="ml-2 text-sm">Cardio for 20 minutes</label>
                        </form>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Tasks