import {useState} from 'react'
import {RxHamburgerMenu} from 'react-icons/rx'
import { MdHome } from "react-icons/md";
import { GiScrollUnfurled } from "react-icons/gi";
import { FaTree } from "react-icons/fa";
import { PiSmileyFill } from "react-icons/pi";

const Navbar = () =>{
    const [hamburgerOption, setHamburgerOption] = useState<boolean>(false)
    return(
    <div >
        {/* options not opened */}
        <div className='flex flex-row justify-between' >
            <h1>Life XP</h1>
            <div>
                <RxHamburgerMenu className='cursor-pointer' onClick={()=>{setHamburgerOption(!hamburgerOption)}}/>
            </div>
        </div>

        {/* options opened - small screens */}
        <div className={`${hamburgerOption?'block':'hidden'} flex flex-col items-center justify-center fixed inset-0 bg-slate-50 
        space-y-8`}>
            
            <div className='absolute top-4 right-4'>
                <RxHamburgerMenu 
                    size={25}
                    className='cursor-pointer' 
                    onClick={()=>{setHamburgerOption(!hamburgerOption)}}
                />
            </div>

            {/* profile circle icon */}
            <div className='border border-black rounded-full w-[50px] h-[50px] cursor-pointer'>
        
            </div>
            
            {/* navbar options */}
            <ul className='flex flex-col items-start space-y-10'>
                <li className='flex items-center space-x-2 cursor-pointer'>
                    <MdHome size = {30}/>
                    <span className='underline'>
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

        </div>

    </div>
    )
}

export default Navbar