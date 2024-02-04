import { GameIcon, Enter } from "../Icons/Icons"
import taskImg from '../../assets/tasks.png'

const backendUrl = "http://localhost:5000";

const LandingPage = () => {
    return(
        <div className="h-screen">
            {/* Nav */}
            <div className="flex flex-row items-center justify-between h-14">
                <div className='flex flex-row cursor-pointer items-center ml-6 mt-1'> 
                        <GameIcon height={"22"} width={"22"} />
                        <h1 className='text-lg ml-2' >
                            Life XP
                        </h1>
                </div>
                <a href={`${backendUrl}/auth/google`} 
                className="flex flex-row items-center justify-center h-[60%] w-32 mr-6 mt-1 border custom-gray border-black shadow-sharp shadow-transition hover:shadow-sharp-xl icon-hover4 cursor-pointer">
                    <h1 className="mr-2">Login</h1>
                    <Enter />
                </a>
                
            </div>
            {/* main content */}
            <div className="flex items-center mt-10 space-x-4 ml-8 ">
                    <GameIcon width={"40"} height={"40"}/>
                    <h1 className="text-[44px] tracking-wider">
                        Your Life Into XP!
                    </h1> 
                    
                </div>
            <div className="flex flex-col justify-center items-center">
               
                <div className="grid grid-cols-2 w-[90%]">
                    <div className=" flex flex-col justify-center ">
                           
                        <h1 className="text-3xl mb-5">
                            Get xp from tasks!
                        </h1>
                        <h2 className="text-xl mb-10">
                            Gain experience points from your day to day tasks!
                        </h2>
                        
                        <button className="flex flex-row space-x-4 items-center justify-center h-9 w-40 mr-6 mt-1 border custom-gray border-black shadow-sharp shadow-transition hover:shadow-sharp-xl icon-hover4 cursor-pointer">
                            <span>Get Started</span>
                            <GameIcon width={"14"} height={"14"}/>
                        </button>
                    </div>
                    
                    <img src={taskImg} width={600} height={600}/>
                </div>
            </div>
        </div>
       
   )
}
export default LandingPage