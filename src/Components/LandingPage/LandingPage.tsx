import taskImg from "../../assets/Tasks.png"
import levelImg from "../../assets/levelmeter.png"
import questingImg from "../../assets/Questing.png"
import emcheckinImg from "../../assets/Emcheckin.png"

import { GameIcon, Enter } from "../Icons/Icons"

import { NavLink } from "react-router-dom"

// const backendUrl = "http://localhost:5000";

const LandingPage = () => {
    return(
        <div className="h-screen">
            {/* Nav */}
            <div className="flex flex-row items-center justify-between h-14 w-full">
                <div className='flex flex-row cursor-pointer items-center ml-6 mt-1'> 
                        <GameIcon height={"22"} width={"22"} />
                        <h1 className='text-lg ml-2' >
                            Life XP
                        </h1>
                </div>
               
               <NavLink to={"/"}>
                    <button
                       
                        className="flex flex-row items-center justify-center h-9 w-32 sm:mr-6 mt-1 border custom-gray 
                                border-black shadow-sharp shadow-transition hover:shadow-sharp-xl icon-hover4 
                                cursor-pointer">
                        <h1 className="mr-2">Login</h1>
                        <Enter />
                    </button>
                </NavLink>
                
              
                
            </div>
            {/* {toHomeScreen && <Navigate to="/"/>} */}
            {/* main content */}
            {/* Tasks section */}
            <div className="lg:ml-10 mb-5 mt-10">
                    <div className="hidden lg:flex items-center space-x-4 lg:ml-20 ">
                        <GameIcon width={"37"} height={"37"}/>
                        <h1 className="text-[36px] tracking-wider text-gray-900">
                            Your Life Into XP!
                        </h1> 
                        
                    </div>

                    <div className="flex flex-col justify-center items-center  md:mt-0">
                    
                        <div className="grid lg:grid-cols-2 w-[85%] justify-center">
                            <div className=" flex flex-col justify-center items-center lg:items-start ml-6 lg:ml-0">
                                
                                <h1 className="text-3xl mb-5">
                                    Get xp from tasks!
                                </h1>
                                <p className="text-xl mb-10 w-[450px]">
                                    Gain experience points from your day to day tasks!
                                </p>
                                <NavLink to={"/"}>
                                    <button className="flex flex-row space-x-4 items-center justify-center 
                                                        h-10 w-40 mr-6 mt-1 mb-2 border custom-gray border-black shadow-sharp 
                                                        shadow-transition hover:shadow-sharp-xl icon-hover4 cursor-pointer">
                                        <span>Get Started</span>
                                        <GameIcon width={"14"} height={"14"}/>
                                    </button>
                                </NavLink>
                            </div>
                            <div>
                                <img src={taskImg} width={600} height={600}/>
                            </div>
                        </div>
                    </div>
            </div>

            {/* levelup  section*/}
            <div className="hidden lg:flex flex-col justify-center items-center h-[580px] ml-8">
                <div className="grid lg:grid-cols-2 w-[80%] ">
                    <img src={levelImg} width={400}/>
                    <div className=" flex flex-col items justify-center">
                            
                            <h1 className="text-3xl mb-5 lg:text-right mt-10 md:mt-0">
                                Gain Levels!
                            </h1>
                            <p className="text-xl mb-10 lg:text-right">
                                Gain levels from your day to day tasks from work, fitness, to personal!
                            </p>
                            
                            <div className="flex lg:justify-end ">
                                <NavLink to={"/"}>
                                    <button className="flex flex-row space-x-4 items-center justify-center h-10 w-40  
                                                        mt-1 border custom-gray border-black shadow-sharp shadow-transition 
                                                        hover:shadow-sharp-xl icon-hover4 cursor-pointer   ">
                                        <span>Level Up</span>
                                        <GameIcon width={"14"} height={"14"}/>
                                    </button>
                                </NavLink>
                            </div>
                    </div>
                </div>
            </div>
            {/* Questing section */}
            <div className="hidden lg:flex justify-center items-center h-[620px] ml-12">
                <div className="grid lg:grid-cols-2 w-[90%]">
                    <div className=" flex flex-col items justify-center">
                                
                        <h1 className="text-3xl mb-5">
                           Complete Quests!
                        </h1>
                        <p className="text-xl mb-10 w-[500px]">
                            Take on quests similar to your day to day tasks and gain Rewards and levels!
                        </p>
                        <NavLink to={"/"}>
                            <button className="flex flex-row space-x-4 items-center justify-center h-10 w-40  
                                                mt-1 border custom-gray border-black shadow-sharp shadow-transition 
                                                hover:shadow-sharp-xl icon-hover4 cursor-pointer">
                                <span>Get Questing</span>
                                <GameIcon width={"14"} height={"14"}/>
                            </button>
                        </NavLink>
                        </div>
                    <img src={questingImg} width={500}/>
                </div>
            </div>

             {/* Emotional check-in section */}
             <div className="hidden lg:flex justify-center items-center h-[620px] ml-12">
                <div className="grid lg:grid-cols-2 w-[85%]">
                    <img src={emcheckinImg} width={500}/>
                    <div className=" flex flex-col items justify-center">
                                
                        <h1 className="text-3xl mb-5 text-right">
                           Emotional Check-in
                        </h1>
                        <p className="text-xl mb-10  text-right">
                            You’ll have emotional check-ins daily to document your moods as well as journal entries 
                            where you can document your thoughts!
                        </p>
                        <div className="flex justify-end">
                            <NavLink to={"/"}>
                                <button className="flex flex-row space-x-4 items-center justify-center h-10 w-40  
                                                    mt-1 border custom-gray border-black shadow-sharp shadow-transition 
                                                    hover:shadow-sharp-xl icon-hover4 cursor-pointer">
                                    <span>Get Started</span>
                                    <GameIcon width={"14"} height={"14"}/>
                                </button>
                            </NavLink>
                        </div>
                    </div>
                    
                </div>
            </div>

            {/* What is LifeXP */}
            <div className="h-[620px] mt-32 mb-10 lg:mb-0 md:mt-0 flex flex-col justify-center items-center space-y-16">
                <h1 className="text-2xl md:text-3xl">What exactly is LifeXP?</h1>
                <p className="w-[90%] text-center text-lg leading-10 tracking-normal md:text-left md:w-[60%] md:text-xl ">
                    Life XP is a gamified productivity app designed to cater to a broader range of needs beyond task management. 
                    Life XP integrates features that focus on emotional well-being, personal development, and highly customizable 
                    user engagement models. Life XP aims to be a holistic tool for life management. This innovative blend makes Life XP 
                    a comprehensive solution for boosting productivity and emotional health.
                </p>
                <NavLink to={"/"}>
                    <button className="flex flex-row space-x-4 items-center justify-center h-10 w-40  
                                        mt-1 border custom-gray border-black shadow-sharp shadow-transition 
                                        hover:shadow-sharp-xl icon-hover4 cursor-pointer">
                        <span>Get Started</span>
                        <GameIcon width={"14"} height={"14"}/>
                    </button>
                </NavLink>
            </div>
            
            <footer className="border-t border-black h-[130px] mt-40 lg:mt-10">
                <div className="flex justify-center items-center cursor-default mt-3">
                    <h1 className="text-2xl border-r border-black px-2 mr-2">
                        Life XP
                    </h1>
                    <h2>
                        Your life into XP 
                    </h2>
                </div>
                <div className="flex justify-between mt-12">
                    <div className="flex flex-row space-x-4 lg:space-x-12 ml-6">
                        <h2 className="hover:underline cursor-pointer">Privacy Policy</h2>
                        <h2 className="hover:underline cursor-pointer">Terms of Use</h2>
                    </div>
                    <div className="mr-6 cursor-default">
                        <h1>
                            {"@2024 Lifexponline.com"}
                        </h1>
                    </div>
                </div>
            </footer>
        </div>
       
   )
}
export default LandingPage