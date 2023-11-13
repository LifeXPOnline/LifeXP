import {RxHamburgerMenu} from 'react-icons/rx'
// import {useState} from 'react'
const Navbar = () =>{
    // const [clicked, setClicked] = useState<boolean>(false)
    return(
    <div className='flex flex-row justify-between'>
        <h1>Life XP</h1>

        <div className='cursor-pointer'>
            <RxHamburgerMenu />
        </div>
        <ul>
            <li><span>Home</span></li>
            <li><span>Quests</span></li>
            <li><span>Skill Tree</span></li>
            <li><span>Check-in</span></li>
        </ul>
    </div>
    )
}

export default Navbar