import { GameIcon, Enter } from "../Icons/Icons"
const LandingPage = () => {
    return(
        <div className="flex flex-row items-center justify-between h-14">
            <div className='flex flex-row cursor-pointer items-center ml-6 mt-1'> 
                    <GameIcon />
                    <h1 className='text-lg ml-2' >
                        Life XP
                    </h1>
            </div>
            <button className=" flex flex-row items-center justify-center h-[60%]  w-32 mr-6 mt-1 border custom-gray border-black shadow-sharp shadow-transition hover:shadow-sharp-xl icon-hover4  cursor-pointer">
                <h1 className="mr-2">Login</h1><Enter />
            </button>
        </div>
       
   )
}
export default LandingPage