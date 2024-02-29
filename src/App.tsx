import Navbar from "./Components/DashboardPage/Navbar/Navbar"
import Home from "./Components/DashboardPage/Homepage/Home"
import Quests from "./Components/DashboardPage/Questpage/Quests"
import CheckinParent from "./Components/DashboardPage/CheckinPage/CheckinParent"
import LandingPage from "./Components/LandingPage/LandingPage"
import Welcomepage from "./Components/DashboardPage/SkillTree/Welcomepage"

import './index.css'

import {Route, Routes, } from "react-router-dom"
import Register from "./Components/DashboardPage/Login-Register/Register"


const App = () => {

    // const handleLoginSuccess = () => {
    //   return <Navigate to="/" />;
    // }
    return (
        <div className="bg-white font-source-code-pro">
            <Routes>
                {/* landing page */}
                <Route path="/" element={<LandingPage />} />

                {/* TODO: login/register route */}
                <Route path="/register" element={<Register />} />

                {/* main content */}
                <Route element={<Navbar />} >
                    <Route path="/home" element={<Home />} />
                    <Route path="/quests" element={<Quests />} />
                    <Route path="/checkin" element={<CheckinParent />} />
                    <Route path="/skilltree" element={<Welcomepage />} />
                </Route>
            </Routes>
        </div>
    )
}

export default App
