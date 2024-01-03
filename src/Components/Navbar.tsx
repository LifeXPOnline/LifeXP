import {useState} from 'react'
import {RxHamburgerMenu} from 'react-icons/rx'
import { MdHome } from "react-icons/md";
import { GiScrollUnfurled } from "react-icons/gi";
import { FaTree } from "react-icons/fa";
import { PiSmileyFill } from "react-icons/pi";
import { IoMdSettings } from "react-icons/io";
import { FaDoorOpen } from "react-icons/fa";
// import { MdGamepad } from "react-icons/md";
// import { BsFillDpadFill } from "react-icons/bs";

const Navbar = () =>{
    const [hamburgerOption, setHamburgerOption] = useState<boolean>(false)

    const gameIcon = () => {
        return <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <mask id="mask0_2_482"  maskUnits="userSpaceOnUse" x="0" y="0" width="22" height="22">
                    <path d="M8.8 6.05L11 8.25L13.2 6.05V0H8.8V6.05ZM8.8 15.95L11 13.75L13.2 15.95V22H8.8V15.95ZM15.95 13.2L13.75 11L15.95 8.8H22V13.2H15.95ZM6.05 8.8L8.25 11L6.05 13.2H0V8.8H6.05Z" fill="white"/>
                    </mask>
                    <g mask="url(#mask0_2_482)">
                    <path d="M-2.2 -2.20001H24.2V24.2H-2.2V-2.20001Z" fill="black"/>
                    </g>
            </svg>    
    }
    return(
    <div className='md:flex md:justify-center w-full bg-slate-50 fixed z-50'>
        {/* hamburger not opened */}
        <div className='flex flex-row justify-between py-3 md:border-[1.2px] md:border-black md:w-[99%] rounded-md' >
            <div className='flex flex-row cursor-pointer justify-center items-center ml-6 cursor-default'> 
                {/* <div><MdGamepad size = {24}/></div> */}
                {gameIcon()}
                <h1 className='text-lg ml-2' >Life XP</h1>
            </div>
            <div className='md:hidden'>
                <RxHamburgerMenu 
                    size={25} 
                    className='cursor-pointer mr-6' 
                    onClick={()=>{setHamburgerOption(!hamburgerOption)}}
                />
            </div>
            
            <ul className='hidden md:flex flex-row  space-x-9'>
                <li className='flex items-center cursor-pointer'>
                    <div className='flex flex-row icon-hover2  justify-center items-center space-x-1 border-2 py-1 border-black rounded-3xl w-28'>
                        <MdHome size = {30}/>
                        <span className='tracking-wide text-sm'>
                            Home
                        </span>
                    </div>
                </li>
                <li className='flex items-center icon-hover2 space-x-2 cursor-pointer'>
                    <GiScrollUnfurled size = {24}/>
                    <span className='text-sm'>
                        Quests
                    </span>
                </li>
                <li className='flex items-center icon-hover2 space-x-2 cursor-pointer'>
                    <FaTree size = {26}/>
                    <span className='text-sm'>
                        Skill Tree
                    </span>
                </li>
                <li className='flex items-center icon-hover2 space-x-2 cursor-pointer'>
                    <PiSmileyFill size = {27}/>
                    <span className='text-sm'>
                        Check-in
                    </span>
                </li>
                
            </ul>

            {/* profile circle icon */}
            <div className='hidden md:flex border border-black rounded-full w-[40px] h-[40px] mr-4 cursor-pointer'>
        
            </div>
        </div>

        {/* hamburger opened - small screens */}
        <div className={`${hamburgerOption?'block':'hidden'} flex flex-col items-center justify-center fixed inset-0 bg-slate-50 z-50`}>
            
            <div className='absolute top-[9px] right-[25.5px]'>
                <RxHamburgerMenu 
                    size={25}
                    className='cursor-pointer' 
                    onClick={()=>{setHamburgerOption(!hamburgerOption)}}
                />
            </div>

            {/* profile circle icon */}
            <div className='border border-black rounded-full w-[70px] h-[70px] cursor-pointer mb-16'>
        
            </div>
            
            {/* navbar options */}
            <ul className='flex flex-col items-start space-y-12'>
                <li className='flex items-center space-x-2 cursor-pointer'>
                    <MdHome size = {30}/>
                    <span className='underline tracking-wide'>
                        Home
                    </span>
                </li>
                <li className='flex items-center space-x-3 cursor-pointer'>
                    <GiScrollUnfurled size = {24}/>
                    <span>
                        Quests
                    </span>
                </li>
                <li className='flex items-center space-x-2 cursor-pointer'>
                    <FaTree size = {26}/>
                    <span>
                        Skill Tree
                    </span>
                </li>
                <li className='flex items-center space-x-2 cursor-pointer'>
                    <PiSmileyFill size = {27}/>
                    <span>
                        Check-in
                    </span>
                </li>
                
            </ul>

            {/* settings */}
            <div className='text-sm absolute bottom-4 left-4 flex flex-row items-center space-x-2 cursor-pointer'>
              <IoMdSettings size = {23} /> <h1>Settings</h1>
            </div>

            <div className='text-sm absolute bottom-4 right-4 flex flex-row items-center space-x-2 cursor-pointer'>
               <h1>Logout</h1> <FaDoorOpen size={23}/>
            </div>
        </div>
        <div className='flex justify-center items-center'>
        {/* <div className=' border-b-[1.5px] border-black w-[95%]'></div> */}
        </div>
    </div>
    )
}

export default Navbar