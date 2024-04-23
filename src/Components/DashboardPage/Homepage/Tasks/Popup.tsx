const Popup = () => {
    return(<div className="border-2 rounded-md border-black absolute
                 bottom-48 right-50 h-96 w-96 shadow-lg bg-white">
        
        <div className="flex flex-col items-center">
            {/* close button */}
            <h1>X</h1>
            <h1>Task</h1>
            <form className="ml-2">
                <input 
                    className="border-2 border-black h-32 w-64"/>
            </form>
            <h1>Choose Tag</h1>
            <h1>Difficulty</h1>
        </div>
    </div>)
}
export default Popup