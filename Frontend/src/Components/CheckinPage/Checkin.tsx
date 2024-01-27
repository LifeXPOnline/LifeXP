import {Happy, Ok, Angry, Sad, ReallySad, Depressed, Book, Graph} from "../Icons/Icons"
import Moodcard from "./Moodcard"
import { Dispatch, SetStateAction, useState, useRef } from 'react'
import Entry from "./Entry";
import { RxHamburgerMenu } from "react-icons/rx";
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; 
import PropTypes from 'prop-types';
import useOutsideClick from "../../Hooks/useOutsideClick";

interface CheckinProps{
    setThePage: Dispatch<SetStateAction<string>>
}

const Checkin: React.FC<CheckinProps> = ({setThePage}) => {


    const [selectedMood, setSelectedMood] = useState<string >("")
    const [menuOpen, setMenuOpen] = useState<boolean>(false)
    const menuRef:React.MutableRefObject<null> = useRef(null)

    useOutsideClick({ ref: menuRef, callback: () => { setMenuOpen(false) }});

    const handleMoodSelect = (mood: string) => {
        setSelectedMood(mood)

    };

    //moodFace object with corresponding svgs, title as values and svg as keys
    const moodFace: Record<string, React.ReactElement> = {
        "Happy" : <Happy />,
        "Ok" : <Ok />,
        "Angry" : <Angry />,
        "Sad" : <Sad />,
        "Really sad" : <ReallySad />,
        "Depressed" : <Depressed />
        
    }
    //menuIcons object with corresponding svgs
    const menuIcons: Record<string, React.ReactElement> = {
        "book": <Book />,
        "graph": <Graph />
    }
    //card classnames - will switch based on selections
    const cardClass: Record<string, string> = {
        "center" : "flex flex-col space-y-6 md:space-y-0 md:flex-row md:space-x-12 mt-4",
        "grid" : "grid lg:grid-cols-6 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 gap-10 lg:gap-11 mt-4"
    }
    return(
    <div className="flex flex-col h-screen md:w-full">
       
       <div className=" mt-10 md:mt-20 border-t border-black">
            
            <div>
                {/* menu button */}
                <button 
                    onClick={()=>{setMenuOpen(!menuOpen)}}
                    className="rounded-sm mt-8 mb-4 ml-5">
                    <RxHamburgerMenu size={28}/>
                </button>

                {/* menu */}
                {menuOpen&&
                <div ref={menuRef} className="relative">
                   <div  className="flex flex-col border border-b-2 border-black bg-slate-50 w-40 h-20 absolute left-5 top-[-15px] z-0">
                        <div
                            onClick={()=>{setThePage("logs")}} 
                            className="flex flex-row ml-2 mt-3 cursor-pointer hover:underline">
                            {menuIcons.book}
                            <h1 className="ml-2 text-sm tracking-wide">
                                Journal Entry
                            </h1>
                        </div>
                        <Tippy
                            placement="right"
                            content="in progress">
                            <div className="flex flex-row ml-2 mt-3 cursor-pointer hover:underline">
                                {menuIcons.graph}
                                <h1 className="ml-2 text-sm tracking-wide">
                                    Mood Graph
                                </h1>
                            </div>
                        </Tippy>
                    </div>
                </div>
                }
            </div>
            <div className="flex flex-col items-center">
                 {/* mood cards */}
                <h1 className="mb-4">
                    How&#39;s your mood today?
                </h1>
               
                <div className={selectedMood != null? cardClass.center : cardClass.grid}>
                    {Object.entries(moodFace).map(([title, moodElement]) => {
                        // Render the cards only if no mood is selected or the current card is the selected one
                        if (!selectedMood || selectedMood === title) {
                            return (
                                <Moodcard
                                    key={title}
                                    Title={title}
                                    Mood={moodElement}
                                    onSelect={handleMoodSelect}
                                    isActive={selectedMood === title}
                                    selectedMood={selectedMood}
                                />
                            );
                        }
                        return null; // Don't render other cards if a mood is already selected
                    })}
                </div>
                
                {/* Journal entry area - Conditionally rendered */}
                {selectedMood && (
                    <Entry selectedMood={selectedMood} />
                )
                }
            </div>
        </div>
    </div>)
}

Checkin.propTypes = {
    setThePage: PropTypes.func.isRequired,
}
export default Checkin