import Navbar from "./Components/Navbar"
import Home from "./Components/Homepage/Home"
import Quests from "./Components/Questpage/Quests"
import './index.css'
import Checkin from "./Components/CheckinPage/Checkin"
import Logs from "./Components/CheckinPage/Logs"
import Welcomepage from "./Components/SkillTree/Welcomepage"

const App = ()=> {

  return (
    <div className=" bg-slate-50 font-source-code-pro tracking-tight">
      <Navbar />
      <div className="hidden">
        <Home />
      </div>
      <div className="hidden">
        <Quests />
      </div>
      <div className="block">
        <Checkin />
      </div>
      <div className="hidden">
        <Logs />
      </div>
      <div className="hidden">
        <Welcomepage />
      </div>
    </div>
  )
}

export default App
