import Navbar from "./Components/Navbar"
import Home from "./Components/Homepage/Home"
import Quests from "./Components/Questpage/Quests"
import './index.css'
import Checkin from "./Components/CheckinPage/Checkin"
// import Logs from "./Components/CheckinPage/Logs"
import Welcomepage from "./Components/SkillTree/Welcomepage"
import {Route, Routes} from "react-router-dom"

const App = ()=> {

  return (
    <div className=" bg-slate-50 font-source-code-pro tracking-tight">
     <Navbar />
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quests" element={<Quests />} />
        <Route path="/checkin" element={<Checkin />} />
        <Route path="/skilltree" element={<Welcomepage />} />    
        {/* <div className="block">
          <Quests />
        </div>
        <div className="hidden">
          <Checkin />
        </div>
        <div className="hidden">
          <Logs />
        </div>
        <div className="hidden">
          <Welcomepage />
        </div> */}
      </ Routes>
    </div>
  )
}

export default App
