import { Dispatch, SetStateAction } from "react"
import { Fitness, Work } from "../../Icons/Icons";

import PropTypes from 'prop-types'

import { BsListTask } from 'react-icons/bs';
import Tippy from "@tippyjs/react";

// import Streakcalendar from '../../assets/Streakcalendar.png'

interface TrackersProps {
    setThePage : Dispatch<SetStateAction<string>>
}

const Trackers: React.FC<TrackersProps> = ({ setThePage }) => {
    const styles = {
        "quests" : "space-y-3 text-sm flex flex-col items-center",
        "hoverBase":"relative bottom-14 left-0 border-2 bg-white border-black w-80 h-24 rounded-md text-xs space-y-3 flex flex-col justify-center",
        "hover1" : "w-44 h-4 border border-black mr-3 rounded-lg ml-2",
        "hover2" : "bg-levelup-gray1 hover:bg-levelup-gray2 h-3 ml-[2px] mt-[1.2px] border border-black rounded-2xl",
        "pageButton" : "absolute left-5 top-20 md:top-36 md:left-14 ml-0 bg-white flex items-center justify-center lg1:hidden h-11 w-11 border-1"+ 
        "bg-slate-50 border-black shadow-sharp-sm cursor-pointer icon-hover4"+ 
        "transition-transform duration-200 hover:shadow-sharp-md"
}
    
    return (
        
        <div className="w-full border-t border-black flex-col md2:flex lg1:w-96 lg1:border-r lg1:rounded-t-md ">
            <div className="flex flex-col mt-5 space-y-20">
                <div className="space-y-8 ">
                    {/* change page button */}
                    <Tippy 
                        content="Tasks"
                        delay={700}>
                        <div onClick={()=>{setThePage("Tasks")}}
                                className={styles.pageButton}>
                                <BsListTask size={25}/>
                        </div>
                    </Tippy>
                    {/* Daily streak tracker */}
                    <div className="flex flex-col items-center text-sm">
                       
                        {/* <img src={Streakcalendar} width={250} /> */}
                    </div>
                   
                    {/* Task tracker */}
                    <div className={styles.quests}>
                        {/* Daily Quests */}
                        <h1 className="underline">Daily Tasks</h1>
                        <p>Complete all work tasks</p>
                        <p>Complete a quest</p>
                     
                    </div>
                     {/* Tracked quests */}
                     <div className="space-y-3 text-sm flex flex-col items-center w-full">
                        <h1 className="underline">Tracked Quests</h1>
                       
                        <div className="flex flex-col items-center w-full space-y-2">
                           <div className="flex flex-row w-72 border border-black h-10">
                                <Fitness />
                                <p>Complete a mile</p>
                           </div>
                           <div className="w-72 border border-black h-10">
                                <Work />
                           </div>
                           <div className="w-72 border border-black h-10">
                            
                           </div>
                        </div>
                    </div>
                    
                </div>
                {/* level up meter */}
                <div className="flex flex-col items-center text-sm relative mt-12">
                    {/* level and xp */}
                    <div className="mb-4 cursor-default">
                        <h1>Level: 5</h1>
                        <h1>XP: 400/500</h1>
                    </div>
                    {/* meter div */}
                    <div className="meterContainer w-72 h-9 mb-10 border border-black rounded-2xl cursor-pointer">
                        <div className="bg-levelup-gray1 hover:bg-levelup-gray2 w-48 h-7 mb-10 ml-[3px] mt-[3px] border border-black rounded-2xl">

                        </div>
                    </div>
                   
                   {/* hover, level statistics div */}
                    <div className="absolute levelStatistics tracking-tight"> 
                        <div className={`${styles.hoverBase} `}>

                            <div className="flex flex-row">
                                <div className={styles.hover1}> 
                                    <div className={`${styles.hover2} w-8`}>
                                    
                                    </div>
                                </div>
                                <h1>Level 1: Fitness</h1> 
                            </div>

                            <div className="flex flex-row">
                                <div className={styles.hover1}> 
                                    <div className={`${styles.hover2} w-28`}>
                                    
                                    </div>
                                </div>
                                <h1>Level 4: Work</h1> 
                            </div>
                            <div className="flex flex-row">
                                <div className={styles.hover1}> 
                                    <div className={`${styles.hover2} w-20`}>
                                    
                                    </div>
                                </div>
                                <h1>Level 2: Personal</h1> 
                            </div>
                        </div>
                    </div>
            
                </div>
            </div>
        </div>
    )
}

Trackers.propTypes = {
    setThePage : PropTypes.func.isRequired
}

export default Trackers