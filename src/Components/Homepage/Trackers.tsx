const Trackers = () => {
    const styles = {
        "quests" : "space-y-3 text-sm flex flex-col items-center",
        "hoverBase":"relative bottom-14 left-0 border-2 bg-slate-50 border-black w-80 h-24 rounded-md text-xs space-y-3 flex flex-col justify-center",
        "hover1" : "w-44 h-4 border border-black mr-3 rounded-lg ml-2",
        "hover2" : "bg-levelup-gray1 hover:bg-levelup-gray2 h-3 ml-[2px] mt-[1.2px] border border-black rounded-2xl",

    }
    return (
        
        <div className="hidden md:flex flex-col w-96 border-t border-r border-black">
            <div className="flex flex-col h-full justify-between items-center mt-5 ">
                <div className="space-y-8">
                    {/* Daily streak tracker */}
                    <div className="flex flex-col items-center text-sm">
                        <h1>A 3 day streak!</h1>
                        <div className="w-56 h-44 border border-black"></div>
                    </div>
                    {/* Task tracker */}
                    <div className={styles.quests}>
                        {/* Daily Quests */}
                        <h1>Daily Quests</h1>
                        <p>Complete a fitness task</p>
                        <p>Complete a fitness task</p>
                        <p>Complete a fitness task</p>
                    </div>
                    <div className={styles.quests}>
                        {/* Daily Quests */}
                        <h1>Your Quests</h1>
                       
                    </div>
                </div>
                {/* level up meter */}
                <div className="flex flex-col items-center text-sm relative ">
                    {/* level and xp */}
                    <div className="mb-4 cursor-default">
                        <h1>Level: 5</h1>
                        <h1>XP: 400/500</h1>
                    </div>
                    {/* meter */}
                    <div className="meterContainer w-72 h-9 mb-10 border border-black rounded-2xl cursor-pointer">
                        <div className="bg-levelup-gray1 hover:bg-levelup-gray2 w-48 h-7 mb-10 ml-[3px] mt-[3px] border border-black rounded-2xl">

                        </div>
                    </div>
                   
                   {/* hover, level statistics */}
                    <div className="absolute levelStatistics"> 
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
export default Trackers