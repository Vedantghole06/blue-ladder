import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Contact from './pages/Contact'
import AboutWhy from './pages/AboutWhy'
import AboutTeam from './pages/AboutTeam'
import AboutPeb from './pages/AboutPeb'
import OurProject from './pages/OurProject'
import Career from './pages/Career'
import BookMeeting from './pages/BookMeeting'
import PositionPage from './pages/PositionPage'
import BlogPage from './pages/Blog'
import SmartAndGreen from './pages/SmartAndGreen'
import TurnkeySolution from './pages/TurnkeySolution'
import ErectionServices from './pages/ErectionServices'
import Mep from './pages/Mep'
import Peb from './pages/Peb'
import CivilStructure from './pages/CivilStructure'
import PebDesigning from './pages/PebDesigning'
import FireServices from './pages/FireServices'
import EnggTech from './pages/EnggTech'
import CivilFoundation from './pages/CivilFoundation'
import MepService from './pages/MepService'
import PreEngg from './pages/PreEngg.jsx'

const App = () => {
  return (

    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about/why-us" element={<AboutWhy />} />
        <Route path="/about/our-team" element={<AboutTeam />} />
        <Route path="/about/peb" element={<AboutPeb />} />
        <Route path="/our-project" element={<OurProject />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/book-meeting" element={<BookMeeting />} />
        <Route path="/career" element={<Career />} />
        <Route path="/career/positions" element={<PositionPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/smart-and-green" element={<SmartAndGreen />} />
        <Route path="/turnkey-solution" element={<TurnkeySolution />} />
        <Route path="/turnkey-solution/erection-services" element={<ErectionServices />} />
        <Route path="/turnkey-solution/mep" element={<Mep />} />
        <Route path="/turnkey-solution/peb" element={<Peb />} />
        <Route path="/turnkey-solution/civil-structure" element={<CivilStructure />} />
        <Route path="/turnkey-solution/peb-designing" element={<PebDesigning />} />
        <Route path="/engg-technical-services" element={<EnggTech />} />
        <Route path="/engg-technical-services/civil-foundation" element={<CivilFoundation />} />
        <Route path="/engg-technical-services/mep-service" element={<MepService />} />
        <Route path="/engg-technical-services/fire-service" element={<FireServices />} />
        <Route path="/pre-engg" element={<PreEngg />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
