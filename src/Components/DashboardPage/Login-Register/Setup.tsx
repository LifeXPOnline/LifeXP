import {useState} from "react"

import Register from "./Register"
import Login from "./Login"

const Setup = () => {
    const [showSetup, setShowSetup] = useState<string>("login")
    return (<div>
        {showSetup === "login" && <Login setShowSetup={setShowSetup} />}
        {showSetup === "Register" && <Register setShowSetup={setShowSetup} />}
    </div>)
}
export default Setup
