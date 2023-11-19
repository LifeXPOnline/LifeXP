import Navbar from "./Components/Navbar"
import Home from "./Components/Home"
import Quests from "./Components/Quests"
import './index.css'
function App() {

  return (
    <div className="bg-slate-50 font-source-code-pro tracking-tight">
     <Navbar />
     <div className="block">
     <Home />
     </div>
    <div className="hidden">
    <Quests />
    </div>
    </div>
  )
}

export default App
