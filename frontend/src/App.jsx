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
import PreEnggBuilding from './pages/PreEnggBuilding.jsx'
import PebWarehouse from './pages/PebWarehouse.jsx'
import PebSheds from './pages/PebSheds.jsx'
import PoultryShed from './pages/PoultryShed.jsx'
import PebMetro from './pages/PebMetro.jsx'
import Ethanol from './pages/Ethanol.jsx'
import PebSpinning from './pages/PebSpinning.jsx'
import PebMultiStory from './pages/PebMultiStory.jsx'
import PebMills from './pages/PebMills.jsx'

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
        <Route path="/pre-engg/pre-engg-building" element={<PreEnggBuilding />} />
        <Route path="/pre-engg/peb-warehouse" element={<PebWarehouse />} />
        <Route path="/pre-engg/peb-sheds" element={<PebSheds />} />
        <Route path="/pre-engg/poultry-shed" element={<PoultryShed />} />
        <Route path="/pre-engg/peb-mills" element={<PebMills />} />
        <Route path="/pre-engg/peb-multistory" element={<PebMultiStory />} />
        <Route path="/pre-engg/peb-spinning" element={<PebSpinning />} />
        <Route path="/pre-engg/ethanol" element={<Ethanol />} />
        <Route path="/pre-engg/peb-metro" element={<PebMetro />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
