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




