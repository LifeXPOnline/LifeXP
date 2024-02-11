import {RxHamburgerMenu} from 'react-icons/rx'
import { MdHome } from "react-icons/md";
import { GiScrollUnfurled, } from "react-icons/gi";
import { FaTree, FaDoorOpen  } from "react-icons/fa";
import { PiSmileyFill } from "react-icons/pi";
import { IoMdSettings } from "react-icons/io";

import { Dispatch, SetStateAction } from 'react';

import { NavLink } from "react-router-dom"


interface SmallScreenNavProps {
    hamburgerOption : boolean
    setHamburgerOption :  Dispatch<SetStateAction<boolean>>
}

const SmallScreenNav: React.FC<SmallScreenNavProps> = ( {hamburgerOption, setHamburgerOption} ) => {
    return(
    <div className={`${hamburgerOption?'block':'hidden'} md:hidden flex flex-col items-center justify-center fixed inset-0 bg-slate-50 z-50`}>
            
        <div className='absolute top-[11.8px] right-[24.9px]'>
            <RxHamburgerMenu 
                size={25}
                className='cursor-pointer icon-hover2' 
                onClick={()=>{setHamburgerOption(!hamburgerOption)}}
            />
        </div>

        {/* profile circle icon */}
        <div className='border border-black rounded-full w-[70px] h-[70px] cursor-pointer mb-16'>

        </div>
        
        {/* navbar options */}
        <nav>
            <ul className='flex flex-col items-start space-y-12'>
                <li >
                    <NavLink 
                        to="/"
                        className={({ isActive }) => isActive ? 'active-link2' : ''}
                    >
                        
                        <div 
                            className='flex items-center space-x-2 icon-hover2 cursor-pointer hover:underline'
                            onClick={()=>{setHamburgerOption(!hamburgerOption)}}
                            >
                            <MdHome size = {30}/>
                            <span className='tracking-wide hover:underline'>
                                Home
                            </span>
                        </div>
                    </NavLink>
                </li>
                <li >
                    <NavLink 
                        to="/quests"
                        className={({ isActive }) => isActive ? 'active-link2' : ''}>
                        <div 
                            className='flex items-center space-x-3 icon-hover2 cursor-pointer hover:underline'
                            onClick={()=>{setHamburgerOption(!hamburgerOption)}}
                            >
                            <GiScrollUnfurled size = {24}/>
                            <span className='hover:underline'>
                                Quests
                            </span>
                        </div>
                    </NavLink>
                </li>
                <li >
                    <NavLink 
                        to="/skilltree"
                        className={({ isActive }) => isActive ? 'active-link2' : ''}>
                        <div 
                            className='flex items-center space-x-2 icon-hover2 cursor-pointer hover:underline'
                            onClick={()=>{setHamburgerOption(!hamburgerOption)}}
                            >
                            
                            <FaTree size = {26}/>
                            <span>
                                Skill Tree
                            </span>
                        </div>
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to="/checkin"
                        className={({ isActive }) => isActive ? 'active-link2' : ''}>
                        <div 
                            className='flex items-center space-x-2 icon-hover2 cursor-pointer hover:underline'
                            onClick={()=>{setHamburgerOption(!hamburgerOption)}}
                            >
                            <PiSmileyFill size = {27}/>
                            <span className='hover:underline'>
                                Check-in
                            </span>
                        </div>
                    </NavLink>
                </li>
                
            </ul>
        </nav>

        {/* settings */}
        <div className='text-sm absolute bottom-4 left-4 flex flex-row items-center space-x-2 cursor-pointer'>
        <IoMdSettings size = {23} /> <h1>Settings</h1>
        </div>

        <div className='text-sm absolute bottom-4 right-4 flex flex-row items-center space-x-2 cursor-pointer'>
        <h1>Logout</h1> <FaDoorOpen size={23}/>
        </div>
    </div>
)
}

export default SmallScreenNav