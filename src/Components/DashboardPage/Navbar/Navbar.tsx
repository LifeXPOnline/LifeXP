import {useState, } from 'react'

import {RxHamburgerMenu} from 'react-icons/rx'

import {GameIcon} from "../../Icons/Icons"

import SmallScreenNav from './SmallScreenNav';
import MdScreenNavPlus from './MdScreenNavPlus';
import ProfileAndMenu from './ProfileandMenu';

import { Outlet } from 'react-router-dom';



const Navbar = () => {
    const [hamburgerOption, setHamburgerOption] = useState<boolean>(false)

    return (
        <div>
            <div className='md:flex md:justify-center w-full bg-white fixed z-50'>
                {/* hamburger not opened */}
                <div className='flex flex-row justify-between py-3 md:border-b md:border-black w-full' >
                    <div className='flex flex-row cursor-pointer justify-center items-center ml-6'>
                        <GameIcon width={"22"} height={"22"} />
                        <h1 className='text-lg ml-2' >
                            Life XP
                        </h1>
                    </div>
                    <button className='md:hidden'>
                        <RxHamburgerMenu
                            size={25}
                            className='cursor-pointer mr-6 icon-hover2'
                            onClick={() => {setHamburgerOption(!hamburgerOption)}}
                        />
                    </button>
                    {/* Navbar md screen and up */}
                    <MdScreenNavPlus />

                    {/* profile circle icon  and its menu*/}
                    <ProfileAndMenu />
                </div>

                {/* navbar hamburger opened - small screens */}
                <SmallScreenNav
                    hamburgerOption={hamburgerOption}
                    setHamburgerOption={setHamburgerOption}
                />

                <div className='flex justify-center items-center'>

                </div>

            </div>
            <div>
                <Outlet />
            </div>
        </div>

    )
}

export default Navbar
