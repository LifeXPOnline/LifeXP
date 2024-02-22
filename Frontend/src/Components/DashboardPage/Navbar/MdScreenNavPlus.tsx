import { MdHome } from "react-icons/md";
import { GiScrollUnfurled} from "react-icons/gi";
import { FaTree} from "react-icons/fa";
import { PiSmileyFill } from "react-icons/pi";

import { NavLink } from "react-router-dom"

const MdScreenNavPlus = () => {
    return(<nav className='hidden md:block'>
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
</nav>)
}

export default MdScreenNavPlus