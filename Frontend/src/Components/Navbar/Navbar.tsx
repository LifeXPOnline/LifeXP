import {useState, useRef} from 'react'
import {RxHamburgerMenu} from 'react-icons/rx'
import { MdHome } from "react-icons/md";
import { GiScrollUnfurled,GiAchievement } from "react-icons/gi";
import { FaTree, FaDoorOpen  } from "react-icons/fa";
import { PiSmileyFill } from "react-icons/pi";
import { IoMdSettings } from "react-icons/io";
import { NavLink } from "react-router-dom"
import useOutsideClick from '../../Hooks/useOutsideClick';
import { GameIcon2 } from "../Icons/Icons"


const Navbar = () =>{
    const [hamburgerOption, setHamburgerOption] = useState<boolean>(false)
    const [openProfileOptions, setOpenProfileOptions] = useState<boolean>(false)
    const ProfileOptionsRef:React.MutableRefObject<null> = useRef(null)
    useOutsideClick({ ref: ProfileOptionsRef, callback: () => { setOpenProfileOptions(false) }});

  
    return(
    <div className='md:flex md:justify-center w-full bg-slate-50 fixed z-50'>
        {/* hamburger not opened */}
        <div className='flex flex-row justify-between py-3 md:border-b md:border-black w-full' >
            <div className='flex flex-row cursor-pointer justify-center items-center ml-6'> 
                <GameIcon2 />
                <h1 className='text-lg ml-2' >
                    Life XP
                </h1>
            </div>
            <div className='md:hidden'>
                <RxHamburgerMenu 
                    size={25} 
                    className='cursor-pointer mr-6 icon-hover2' 
                    onClick={()=>{setHamburgerOption(!hamburgerOption)}}
                />
            </div>
            {/* Navbar md screen and up */}
            <nav className='hidden md:block'>
                <ul className='flex flex-row items-center  space-x-9'>
                    <li>
                        <NavLink 
                            to ="/" 
                            className={({ isActive }) => isActive ? 'active-link' : ''}>
                            <div className='flex items-center cursor-pointer icon-hover2 space-x-2'>
                                <MdHome size = {30}/>
                                <span className='tracking-wide text-sm'>
                                    Home
                                </span>
                            </div>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            to="/quests"
                            className={({ isActive }) => isActive ? 'active-link' : ''}
                            >
                            <div className='flex items-center icon-hover2 space-x-2 cursor-pointer'>
                                <GiScrollUnfurled size = {25}/>
                                <span className='text-sm'>
                                    Quests
                                </span>
                            </div>
                        </NavLink>
                    </li>
                    <li >
                        <NavLink 
                            to="/skilltree"
                            className={({ isActive }) => isActive ? 'active-link' : ''}
                            >
                            <div className='flex items-center icon-hover2 space-x-2 cursor-pointer'>
                                <FaTree size = {25}/>
                                <span className='text-sm'>
                                    Skill Tree
                                </span>
                            </div>
                        </NavLink>
                    </li>
                    <li >
                        <NavLink 
                            to="/checkin"
                             className={({ isActive }) => isActive ? 'active-link' : ''}
                            >
                            <div className='flex items-center icon-hover2 space-x-2 cursor-pointer'>
                                <PiSmileyFill size = {25}/>
                                <span className='text-sm'>
                                    Check-in
                                </span>
                            </div>
                        </NavLink>
                    </li>
                    
                </ul>
            </nav>

           {/* profile circle icon  and its menu*/}
            <div className='hidden md:flex relative'>
                 {/* profile circle icon */}
                <div
                    onClick={()=>{setOpenProfileOptions(!openProfileOptions)}} 
                    className='hidden md:flex border border-black rounded-full w-[40px] h-[40px] mr-4 cursor-pointer'>
            
                </div>

                {/* menu */}
                {openProfileOptions&&
                <div ref={ProfileOptionsRef} className='absolute right-3 top-11 hidden md:block'>
                    <div className='flex flex-col   w-36 h-32 border border-b-2 border-black bg-slate-50'>
                        <div className='flex items-center space-x-1 flex-row ml-2 mt-2 hover:underline cursor-pointer'>
                            <IoMdSettings size={24} />
                            <h1 className='text-sm '>
                                Settings
                            </h1>
                        </div>
                        
                        <div className='flex items-center flex-row ml-1 mt-3 hover:underline cursor-pointer'>
                            <GiAchievement size={28}/>
                            <h1 className='text-sm '>
                                Achievements
                            </h1> 
                        </div>
                        <div className='flex items-center space-x-1 flex-row ml-2 mt-3 hover:underline cursor-pointer'>
                            <FaDoorOpen size={21}/>
                            <h1 className='text-sm '>
                                Logout
                            </h1> 
                            
                        </div>
                    </div>
                </div>
                }
            </div>
        </div>

        {/* navbar hamburger opened - small screens */}
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
        <div className='flex justify-center items-center'>
        
        </div>
    </div>
    )
}

export default Navbar