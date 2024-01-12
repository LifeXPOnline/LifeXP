const Trackers = () => {
    return (
        <div className="hidden md:flex flex-col w-96 border-t border-r border-black">
            <div className="flex flex-col justify-center items-center mt-5 space-y-3">
                {/* Daily tracker */}
                <div className="w-44 h-44 border border-black"></div>
                {/* Task tracker */}
                <div className="space-y-3">
                    <p className="">Complete a fitness task</p>
                    <p className="">Complete a fitness task</p>
                    <p className="">Complete a fitness task</p>
                </div>
            </div>
        </div>
    )
}
export default Trackers