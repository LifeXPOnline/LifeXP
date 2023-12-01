import Navbar from "./Components/Navbar"
import Home from "./Components/Homepage/Home"
import Quests from "./Components/Questpage/Quests"
import './index.css'
import Checkin from "./Components/CheckinPage/Checkin"
function App() {

  return (
    <div className="items-center bg-slate-50 font-source-code-pro tracking-tight">
      <Navbar />
      <div className="hidden">
        <Home />
      </div>
      <div className="block===">
        <Quests />
      </div>
      <div className="hidden">
        <Checkin />
      </div>
    </div>
  )
}

export default App
