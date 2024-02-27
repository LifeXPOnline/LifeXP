//This file contains all the Components that repeat across multiple pages
//Intention of this file is too reduce reduncy
//Anything that is used on multple pages should be put here
import {GameIcon} from "./Icons"

export const LogoWithBrandName = () => {
    return (
        <div className='flex flex-row cursor-pointer items-center ml-6 mt-1'>
            <GameIcon height={"22"} width={"22"} />
            <h1 className='text-lg ml-2' >
                Life XP
            </h1>
        </div>
    )
}

interface IMainButton {
    label: string;
    type: "button" | "reset" | "submit";
    handler?: (event: React.SyntheticEvent) => void;
}

export const MainButton = ({label, type, handler}: IMainButton) => {
    return (
        <button onClick={handler} type={type} className="bg-quest-gray2 border-[1.5px] border-black text-white 
                                w-7/12 h-10 rounded-md text-xs hover:bg-quest-gray4">
            {label}
        </button>
    )
}


