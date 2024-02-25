import {useOutsideClick} from '../../../Hooks'
import {useState, useRef} from 'react'

import {NavLink} from "react-router-dom"

const ProfileAndMenu = () => {
    const [openProfileOptions, setOpenProfileOptions] = useState<boolean>(false)

    const ProfileOptionsRef: React.MutableRefObject<null> = useRef(null)
    useOutsideClick({ref: ProfileOptionsRef, callback: () => {setOpenProfileOptions(false)}});


    return (<div className='hidden md:flex relative'>
        {/* profile circle icon */}
        <div
            onClick={() => {setOpenProfileOptions(!openProfileOptions)}}
            className='hidden md:flex border border-black rounded-full w-[40px] h-[40px] mr-4 cursor-pointer'>

        </div>

        {/* menu */}
        {openProfileOptions &&
            <div ref={ProfileOptionsRef} className='absolute right-3 top-11 hidden md:block'>
                <div className='flex flex-col items  w-32 h-32 border border-b-2 border-black bg-white'>
                    <div className='flex items-center space-x-1 flex-row mt-2 h-6 hover:bg-gray-200 cursor-pointer'>

                        <h1 className='text-sm ml-2'>
                            Settings
                        </h1>
                    </div>

                    <div className='flex items-center flex-row mt-2 h-6 hover:bg-gray-200 cursor-pointer'>

                        <h1 className='text-sm ml-2 '>
                            Achievements
                        </h1>
                    </div>
                    <NavLink to={"/"}>
                        <div className='flex items-center space-x-1 flex-row hover:bg-gray-200 mt-2 h-6 cursor-pointer'>
                            <h1 className='text-sm ml-2'>
                                Logout
                            </h1>
                        </div>
                    </NavLink>
                </div>
            </div>
        }
    </div>)
}
export default ProfileAndMenu
