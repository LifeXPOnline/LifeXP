// import { HiEmojiHappy } from "react-icons/hi";
import Moodcard from "./Moodcard";

const Checkin = () => {

    const Happy = () =>{
        return <svg width="62" height="62" viewBox="0 0 62 62" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M31 0C13.875 0 0 13.875 0 31C0 48.125 13.875 62 31 62C48.125 62 62 48.125 62 31C62 13.875 48.125 0 31 0ZM41 21C43.2125 21 45 22.7875 45 25C45 27.2125 43.2125 29 41 29C38.7875 29 37 27.2125 37 25C37 22.7875 38.7875 21 41 21ZM21 21C23.2125 21 25 22.7875 25 25C25 27.2125 23.2125 29 21 29C18.7875 29 17 27.2125 17 25C17 22.7875 18.7875 21 21 21ZM45.35 42.275C41.7875 46.55 36.5625 49 31 49C25.4375 49 20.2125 46.55 16.65 42.275C14.95 40.2375 18.025 37.6875 19.725 39.7125C22.525 43.075 26.625 44.9875 31 44.9875C35.375 44.9875 39.475 43.0625 42.275 39.7125C43.95 37.6875 47.0375 40.2375 45.35 42.275Z" fill="black"/>
            </svg>
        
    }


    return(
    <div className="border-[1.5px] border-black h-screen md:w-[99%]">
       
       <div className="mt-16">
         <button>
            3
        </button>
        <div className="flex flex-col items-center">
            <h1 className="mb-4">
                How's your mood today?
            </h1>
            {/* Mood cards */}
            <div className="flex flex-row space-x-6">
                <Moodcard Mood = {Happy()} />
                <Moodcard Mood = {Happy()} />
                <Moodcard Mood = {Happy()} />
                <Moodcard Mood = {Happy()} />
                <Moodcard Mood = {Happy()} />
                <Moodcard Mood = {Happy()} />
            </div>

        </div>
        </div>
    </div>)
}
export default Checkin