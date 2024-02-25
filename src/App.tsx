import Navbar from "./Components/DashboardPage/Navbar/Navbar"
import Home from "./Components/DashboardPage/Homepage/Home"
import Quests from "./Components/DashboardPage/Questpage/Quests"
import CheckinParent from "./Components/DashboardPage/CheckinPage/CheckinParent"
import LandingPage from "./Components/LandingPage/LandingPage"
import Welcomepage from "./Components/DashboardPage/SkillTree/Welcomepage"

import './index.css'

import {Route, Routes, } from "react-router-dom"


const App = ()=> {

  // const handleLoginSuccess = () => {
  //   return <Navigate to="/" />;
  // }
  return (
      <div >
        {/* landing page */}
        <div className=" bg-white font-source-code-pro tracking-tight">
          <Routes>
                <Route path="/" element={<LandingPage />}/>
          </Routes>
        </div>
        {/* login/register */}
        <div>
          <Routes></Routes>
        </div>

        {/* main content */}
        <div className=" bg-white font-source-code-pro">
        
          <Navbar />

          <Routes>
              {/* Webapp nav links */}
              <Route path="/home" element={<Home />} />
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
