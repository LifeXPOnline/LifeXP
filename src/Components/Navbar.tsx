import {useState} from 'react'
import {RxHamburgerMenu} from 'react-icons/rx'
import { MdHome } from "react-icons/md";
import { GiScrollUnfurled } from "react-icons/gi";
import { FaTree } from "react-icons/fa";
import { PiSmileyFill } from "react-icons/pi";
import { IoMdSettings } from "react-icons/io";
import { FaDoorOpen } from "react-icons/fa";
// import { BsFillDpadFill } from "react-icons/bs";

const Navbar = () =>{
    const [hamburgerOption, setHamburgerOption] = useState<boolean>(false)
    return(
    <div >
        {/* options not opened */}
        <div className='flex flex-row justify-between py-2' >
            <div className='flex flex-row justify-center items-center space-x-2'> 
                <div className='bg-white border-2 border-black w-[25px] h-[25px] ml-6'></div><h1 className='text-lg'>Life XP</h1>
            </div>
            <div className=''>
                <RxHamburgerMenu size={30} className='cursor-pointer mr-6' onClick={()=>{setHamburgerOption(!hamburgerOption)}}/>
            </div>
        </div>

        {/* options opened - small screens */}
        <div className={`${hamburgerOption?'block':'hidden'} flex flex-col items-center justify-center fixed inset-0 bg-slate-50 `}>
            
            <div className='absolute top-3 right-4'>
                <RxHamburgerMenu 
                    size={30}
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

    </div>
    )
}

export default Navbar