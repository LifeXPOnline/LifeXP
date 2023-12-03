import Navbar from "./Components/Navbar"
import Home from "./Components/Homepage/Home"
import Quests from "./Components/Questpage/Quests"
import './index.css'
import Checkin from "./Components/CheckinPage/Checkin"
function App() {

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
    </div>
  )
}

export default App
