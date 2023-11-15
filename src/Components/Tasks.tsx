import { WiStars } from "react-icons/wi";

const Tasks = () => {
    return (
        <div className="flex flex-col justify-center items-center h-screen space-y-6">
            
            <div className="flex flex-row  items-center justify-between w-96">
                <div className="ml-0 flex items-center justify-center h-12 w-12 border-1 
                bg-slate-100 border-black shadow-sharp-sm cursor-pointer">
                    <h1 className="tracking-wide text-lg">XP</h1>
                </div>
                <div className="flex flex-col items-center mr-20">
                    <WiStars size = {30}/>
                    <h1 className="text-xl">Tasks</h1>
                </div>
                <div>
                    
                </div>
            </div>

            {/* Fitness */}
            <div className=" ">
                <div className="flex justify-between"><h1 className="text-normal mb-2">Fitness</h1> <h1 className="text-3xl cursor-pointer">+</h1></div>
                <div className="w-96 h-32 border-2 custom-gray border-black shadow-sharp " >
                    <div className="ml-6 mt-4 space-y-2">
                        <form>
                            <input type="checkbox" name="category" id="fitness" className="form-radio h-5 w-5 text-gray-600" />
                            <label htmlFor="fitness" className="ml-2 text-gray-700">Deadlift</label>
                        </form>
                        <form>
                            <input type="checkbox" name="category" id="fitness" className="form-radio h-5 w-5 text-black-600" />
                            <label htmlFor="fitness" className="ml-2 text-gray-700">Curl 20lb dumbbells</label>
                        </form>
                        <form>
                            <input type="checkbox" name="category" id="fitness" className="form-radio h-5 w-5 text-gray-600" />
                            <label htmlFor="fitness" className="ml-2 text-gray-700">Cardio for 20 minutes</label>
                        </form>
                    </div>
                </div>
            </div>

            {/* Work */}
            <div>   
                <div className="flex justify-between"><h1 className="text-normal mb-2">Work</h1> <h1 className="text-3xl cursor-pointer">+</h1></div>
                <div className="w-96 h-32 border-2 custom-gray border-black shadow-sharp ">
                    <div className="ml-6 mt-4 space-y-2">
                        <form>
                            <input type="checkbox" name="category" id="fitness" className="form-radio h-5 w-5 text-gray-600" />
                            <label htmlFor="fitness" className="ml-2 text-gray-700">Deadlift</label>
                        </form>
                        <form>
                            <input type="checkbox" name="category" id="fitness" className="form-radio h-5 w-5 text-black-600" />
                            <label htmlFor="fitness" className="ml-2 text-gray-700">Curl 20lb dumbbells</label>
                        </form>
                        <form>
                            <input type="checkbox" name="category" id="fitness" className="form-radio h-5 w-5 text-gray-600" />
                            <label htmlFor="fitness" className="ml-2 text-gray-700">Cardio for 20 minutes</label>
                        </form>
                    </div>
                </div>
            </div>

            {/* Personal */}
            <div>
                <div className="flex justify-between"><h1 className="text-normal mb-2">Personal</h1> <h1 className="text-3xl cursor-pointer">+</h1></div>
                <div className="w-96 h-32 border-2 custom-gray border-black shadow-sharp ">
                    <div className="ml-6 mt-4 space-y-2">
                        <form>
                            <input type="checkbox" name="category" id="fitness" className="form-radio h-5 w-5 text-gray-600" />
                            <label htmlFor="fitness" className="ml-2 text-gray-700">Deadlift</label>
                        </form>
                        <form>
                            <input type="checkbox" name="category" id="fitness" className="form-radio h-5 w-5 text-black-600" />
                            <label htmlFor="fitness" className="ml-2 text-gray-700">Curl 20lb dumbbells</label>
                        </form>
                        <form>
                            <input type="checkbox" name="category" id="fitness" className="form-radio h-5 w-5 text-gray-600 rounded-none" />
                            <label htmlFor="fitness" className="ml-2 text-gray-700">Cardio for 20 minutes</label>
                        </form>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Tasks