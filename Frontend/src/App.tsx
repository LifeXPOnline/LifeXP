import Navbar from "./Components/Navbar/Navbar"
import Home from "./Components/Homepage/Home"
import Quests from "./Components/Questpage/Quests"
import './index.css'
import Welcomepage from "./Components/SkillTree/Welcomepage"
import {Route, Routes, Navigate} from "react-router-dom"
import CheckinParent from "./Components/CheckinPage/CheckinParent"
import LandingPage from "./Components/LandingPage/LandingPage"


const App = ()=> {

  // const handleLoginSuccess = () => {
  //   return <Navigate to="/" />;
  // }

  return (
    <div>
      {/* Landing page */}
      <div className="block bg-white font-source-code-pro">
          <LandingPage />
      </div>

      {/* Main content */}
      <div className="hidden bg-white font-source-code-pro tracking-tight">
        <Navbar />
        <Routes>
            {/* Webapp nav links */}
            <Route path="/" element={<Home />} />
            <Route path="/quests" element={<Quests />} />
            <Route path="/checkin" element={<CheckinParent />} />
            <Route path="/skilltree" element={<Welcomepage />} /> 
            {/* Link for authentication */}
            {/* <Route path="/login/success" element={handleLoginSuccess()} />    */}
        </ Routes>
      </div>
    </div>
  )
}

export default App
