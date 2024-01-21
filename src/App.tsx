import Navbar from "./Components/Navbar"
import Home from "./Components/Homepage/Home"
import Quests from "./Components/Questpage/Quests"
import './index.css'
import Welcomepage from "./Components/SkillTree/Welcomepage"
import {Route, Routes} from "react-router-dom"
import CheckinParent from "./Components/CheckinPage/CheckinParent"


const App = ()=> {

  return (
    <div className=" bg-slate-50 font-source-code-pro tracking-tight">
     <Navbar />
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quests" element={<Quests />} />
        <Route path="/checkin" element={<CheckinParent />} />
        <Route path="/skilltree" element={<Welcomepage />} />    
      </ Routes>
    </div>
  )
}

export default App
