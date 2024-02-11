import { BsCompass } from "react-icons/bs";
import { Work, Personal, Fitness } from "../../Icons/Icons";

const Welcomepage = () =>{

    const css = {
        "path": "mt-8 w-80 h-80 border-1 border-black rounded-xl flex flex-col items-center space-y-5 shadow-sharp-md hover:shadow-sharp-lg icon-hover3 cursor-pointer",
        "button" : "bg-quest-gray2 border-[1.5px] border-black text-white w-5/12 h-10 rounded-md text-xs hover:bg-quest-gray4",
        "pathdivflex" : "flex flex-col lg:flex-row lg:space-x-20",
        "pathdivgrid" : ""
    } 

    return(<div className="flex flex-col h-screen">
        <div className="md:border-t md:border-black md:mt-20">
            <div className="mt-20 md:mt-14 md:mb-10 flex justify-center md:justify-start md:ml-10">
                <div className="flex items-center border-b border-black w-64">
                    <BsCompass size={20}/>
                    <h1 className="ml-2"> 
                        Your choices, your path 
                    </h1>
                </div>
            </div>
            <div className="flex items-center justify-center">
                {/* choices for skill tree */}
                <div className="grid grid-cols-1 gap-2 lmd:grid-cols-2 lmd:gap-14 lg2:grid-cols-3 lg2:gap-16 ">
                    <div className={css.path}>
                        <h1 className="mt-3">Fitness</h1>
                        <Fitness />
                        <p className="text-sm px-4 w-72">Lorem ipsum dolor sit, amet consectetur ad voluptate esse voluptatibus repellat atque! Tenetur laudantium quo corrupti molestias itaque dolore veritatis, at tempora.</p>
                        <button className={css.button}>
                            Select
                        </button>
                    </div>
                    <div className={css.path}>
                        <h1 className="mt-3">Work</h1>
                        <Work />
                        <p className="text-sm px-4 w-72">Lorem ipsum dolor sit, amet consectetur ad voluptate esse voluptatibus repellat atque! Tenetur laudantium quo corrupti molestias itaque dolore veritatis, at tempora.</p>
                        <button className={css.button}>
                            Select
                        </button>
                    </div>
                    <div className={css.path}>
                        <h1 className="mt-3">Personal</h1>
                        <Personal />
                        <p className="text-sm px-4 w-72">Lorem ipsum dolor sit, amet consectetur ad voluptate esse voluptatibus repellat atque! Tenetur laudantium quo corrupti molestias itaque dolore veritatis, at tempora.</p>
                        <button className={css.button}>
                            Select
                        </button>
                    </div>
                </div>
                
            </div>
        </div>
    </div>)
}
export default Welcomepage