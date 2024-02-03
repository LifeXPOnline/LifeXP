import { GameIcon, Enter } from "../Icons/Icons"
import taskImg from '../../assets/tasks.png'

const backendUrl = "http://localhost:5000";

const LandingPage = () => {
    return(
        <div className="h-screen">
            <div className="flex flex-row items-center justify-between h-14">
                <div className='flex flex-row cursor-pointer items-center ml-6 mt-1'> 
                        <GameIcon />
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
            <div className="flex flex-row justify-center">
                <div className="w-6/12 flex flex-col ">
                    <div className="flex flex-row items-center space-x-2">
                        <GameIcon />
                        <h1 className="text-3xl">
                            Get xp from tasks!
                        </h1>
                    </div>

                    <h2>Gain experience points from your day to day tasks!</h2>
                    <button className="flex flex-row items-center justify-center h-9 w-32 mr-6 mt-1 border custom-gray border-black shadow-sharp shadow-transition hover:shadow-sharp-xl icon-hover4 cursor-pointer">
                        <span>Get Started</span>
                            
                    </button>
                </div>
                <img src={taskImg} width={600} height={600}/>
            </div>
        </div>
       
   )
}
export default LandingPage