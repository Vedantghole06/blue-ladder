import { useState, useRef, useEffect } from "react"
import { Link } from "react-router-dom"
import BookMeeting from "../pages/BookMeeting"

const Popup = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="fixed inset-0 bg-black opacity-50" onClick={onClose}></div>
      <div className="bg-white rounded-lg shadow-xl z-10 max-w-4xl w-full mx-4 flex flex-col max-h-[90vh]">
        <div className="flex justify-between items-center border-b p-4">
          <h3 className="text-lg font-medium">Book Your Meeting</h3>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="overflow-y-auto p-10 flex-grow">{children}</div>
      </div>
    </div>
  )
}

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false)
  const [productsDropdownOpen, setProductsDropdownOpen] = useState(false)
  const [isPopupOpen, setIsPopupOpen] = useState(false)

  // State for sub-dropdowns
  const [pebDropdownOpen, setPebDropdownOpen] = useState(false)
  const [engineeringDropdownOpen, setEngineeringDropdownOpen] = useState(false)
  const [epcDropdownOpen, setEpcDropdownOpen] = useState(false)

  // Desktop refs
  const aboutRef = useRef(null)
  const productsRef = useRef(null)
  const pebRef = useRef(null)
  const engineeringRef = useRef(null)
  const epcRef = useRef(null)

  // Mobile refs (separate from desktop)
  const mobileMenuRef = useRef(null)
  const mobileAboutRef = useRef(null)
  const mobileProductsRef = useRef(null)
  const mobilePebRef = useRef(null)
  const mobileEngineeringRef = useRef(null)
  const mobileEpcRef = useRef(null)

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  // Open booking popup
  const openBookingPopup = () => {
    closeAllDropdowns()
    setIsPopupOpen(true)
  }

  // Close booking popup
  const closeBookingPopup = () => {
    setIsPopupOpen(false)
  }

  // Function to close all dropdowns
  const closeAllDropdowns = () => {
    setAboutDropdownOpen(false)
    setProductsDropdownOpen(false)
    setPebDropdownOpen(false)
    setEngineeringDropdownOpen(false)
    setEpcDropdownOpen(false)
    setIsMenuOpen(false)
  }

  // Handle clicking outside to close dropdowns for desktop
  useEffect(() => {
    const handleClickOutside = (event) => {
      // Ignore clicks inside the mobile menu
      if (mobileMenuRef.current && mobileMenuRef.current.contains(event.target)) {
        return
      }

      // Handle desktop dropdowns
      if (aboutRef.current && !aboutRef.current.contains(event.target)) {
        setAboutDropdownOpen(false)
      }
      if (productsRef.current && !productsRef.current.contains(event.target)) {
        setProductsDropdownOpen(false)
        setPebDropdownOpen(false)
        setEngineeringDropdownOpen(false)
        setEpcDropdownOpen(false)
      }
      if (pebRef.current && !pebRef.current.contains(event.target)) {
        setPebDropdownOpen(false)
      }
      if (engineeringRef.current && !engineeringRef.current.contains(event.target)) {
        setEngineeringDropdownOpen(false)
      }
      if (epcRef.current && !epcRef.current.contains(event.target)) {
        setEpcDropdownOpen(false)
      }

      // Close the mobile menu when clicking outside
      if (
        !mobileMenuRef.current?.contains(event.target) &&
        event.target.tagName !== "BUTTON" &&
        !event.target.closest("button")
      ) {
        setIsMenuOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  // Custom Link component that closes all dropdowns on click
  const NavLink = ({ to, className, children }) => (
    <Link to={to} className={className} onClick={closeAllDropdowns}>
      {children}
    </Link>
  )

  return (
    <nav className="bg-white py-4 px-6 shadow-sm">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <div className="mr-2">
              <img src="/logo.png" alt="Blue Ladder" className="h-12 w-auto" />
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <NavLink to="/" className="text-gray-700 hover:text-blue-600">
              Home
            </NavLink>

            {/* About Us Dropdown */}
            <div className="relative" ref={aboutRef}>
              <button
                className="text-gray-700 hover:text-blue-600 flex items-center"
                onClick={(e) => {
                  e.stopPropagation()
                  setAboutDropdownOpen(!aboutDropdownOpen)
                  setProductsDropdownOpen(false)
                }}
              >
                About Us
                <svg
                  className={`ml-1 h-4 w-4 transform ${aboutDropdownOpen ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {aboutDropdownOpen && (
                <div className="absolute mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10 text-left">
                  <NavLink to="/about/why-us" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Why Us
                  </NavLink>
                  <NavLink to="/about/our-team" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Our Team
                  </NavLink>
                  <NavLink to="/about/peb" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    What is PEB
                  </NavLink>
                </div>
              )}
            </div>

            {/* Products & Services Dropdown */}
            <div className="relative" ref={productsRef}>
              <button
                className="text-gray-700 hover:text-blue-600 flex items-center"
                onClick={(e) => {
                  e.stopPropagation()
                  setProductsDropdownOpen(!productsDropdownOpen)
                  setAboutDropdownOpen(false)
                  // Close sub-dropdowns when main dropdown is toggled
                  setPebDropdownOpen(false)
                  setEngineeringDropdownOpen(false)
                  setEpcDropdownOpen(false)
                }}
              >
                Product & Services
                <svg
                  className={`ml-1 h-4 w-4 transform ${productsDropdownOpen ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {productsDropdownOpen && (
                <div className="absolute mt-2 w-64 bg-white rounded-md shadow-lg py-1 z-10 text-left">
                  {/* PEB Sub-dropdown */}
                  <div className="relative" ref={pebRef}>
                    <button
                      className="flex items-center justify-between w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 text-left"
                      onClick={(e) => {
                        e.stopPropagation()
                        setPebDropdownOpen(!pebDropdownOpen)
                        setEngineeringDropdownOpen(false)
                        setEpcDropdownOpen(false)
                      }}
                    >
                      <span>Pre Engineered Steel Structures</span>
                      <svg
                        className={`ml-1 h-4 w-4 transform ${pebDropdownOpen ? "rotate-180" : ""}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                      </svg>
                    </button>

                    {pebDropdownOpen && (
                      <div className="absolute left-full top-0 w-56 bg-white rounded-md shadow-lg py-1 z-20 text-left">
                        <NavLink to="/pre-engg" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                          Pre Engineered Steel Structures
                        </NavLink>
                        <NavLink
                          to="/pre-engg/pre-engg-building"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          Pre Engineered Buildings
                        </NavLink>
                        <NavLink
                          to="/pre-engg/peb-warehouse"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          PEB Warehouse
                        </NavLink>
                        <NavLink
                          to="/pre-engg/peb-sheds"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          PEB Sheds
                        </NavLink>
                        <NavLink
                          to="/pre-engg/poultry-shed"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          Poultry Sheds
                        </NavLink>
                        <NavLink
                          to="/pre-engg/peb-mills"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          PEB Mills
                        </NavLink>
                        <NavLink
                          to="/pre-engg/peb-multistory"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          PEB Multi Storey Buildings
                        </NavLink>
                        <NavLink
                          to="/pre-engg/peb-spinning"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          PEB Spinning & Grinding Sheds
                        </NavLink>
                        <NavLink
                          to="/pre-engg/ethanol"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          Ethanol Sheds
                        </NavLink>
                        <NavLink
                          to="/pre-engg/peb-metro"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          PEB Metro Station
                        </NavLink>
                      </div>
                    )}
                  </div>

                  {/* Engineering & Technical Advisory Service Sub-dropdown */}
                  <div className="relative" ref={engineeringRef}>
                    <button
                      className="flex items-center justify-between w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 text-left"
                      onClick={(e) => {
                        e.stopPropagation()
                        setEngineeringDropdownOpen(!engineeringDropdownOpen)
                        setPebDropdownOpen(false)
                        setEpcDropdownOpen(false)
                      }}
                    >
                      <span>Engineering & Technical Advisory Service</span>
                      <svg
                        className={`ml-1 h-4 w-4 transform ${engineeringDropdownOpen ? "rotate-180" : ""}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                      </svg>
                    </button>

                    {engineeringDropdownOpen && (
                      <div className="absolute left-full top-0 w-56 bg-white rounded-md shadow-lg py-1 z-20 text-left">
                        <NavLink
                          to="/engg-technical-services"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          Engineering & Technical Advisory Service
                        </NavLink>
                        <NavLink
                          to="/engg-technical-services/fire-service"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          Fire Services
                        </NavLink>
                        <NavLink
                          to="/engg-technical-services/mep-service"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          MEP Services
                        </NavLink>
                        <NavLink
                          to="/engg-technical-services/civil-foundation"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          Civil Foundation Work
                        </NavLink>
                      </div>
                    )}
                  </div>

                  {/* EPC Turnkey Solutions Sub-dropdown */}
                  <div className="relative" ref={epcRef}>
                    <button
                      className="flex items-center justify-between w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 text-left"
                      onClick={(e) => {
                        e.stopPropagation()
                        setEpcDropdownOpen(!epcDropdownOpen)
                        setPebDropdownOpen(false)
                        setEngineeringDropdownOpen(false)
                      }}
                    >
                      <span>EPC Turnkey Solutions</span>
                      <svg
                        className={`ml-1 h-4 w-4 transform ${epcDropdownOpen ? "rotate-180" : ""}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                      </svg>
                    </button>

                    {epcDropdownOpen && (
                      <div className="absolute left-full top-0 w-56 bg-white rounded-md shadow-lg py-1 z-20 text-left">
                        <NavLink
                          to="/turnkey-solution"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          EPC -Turnkey Solutions
                        </NavLink>
                        <NavLink
                          to="/turnkey-solution/erection-services"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          Erection Services
                        </NavLink>
                        <NavLink
                          to="/turnkey-solution/mep"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          MEP Designing
                        </NavLink>
                        <NavLink
                          to="/turnkey-solution/peb"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          PEB Designing
                        </NavLink>
                        <NavLink
                          to="/turnkey-solution/civil-structure"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          Civil Structure Design
                        </NavLink>
                        <NavLink
                          to="/turnkey-solution/peb-designing"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          PEB Design Vetting
                        </NavLink>
                      </div>
                    )}
                  </div>
                  <NavLink to="/smart-and-green" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Smart & Green Buildings
                  </NavLink>

                </div>
              )}
            </div>

            <NavLink to="/our-project" className="text-gray-700 hover:text-blue-600">
              Our Projects
            </NavLink>
            <NavLink to="/blog" className="text-gray-700 hover:text-blue-600">
              Blog
            </NavLink>
            <NavLink to="/career" className="text-gray-700 hover:text-blue-600">
              Careers
            </NavLink>

            <button
              onClick={openBookingPopup}
              className="bg-[#CABA99] text-gray-700 px-4 py-2 rounded hover:bg-amber-300 transition duration-300"
            >
              Book a Meeting
            </button>

            <a
              href="#"
              onClick={closeAllDropdowns}
              className="bg-[#345CA5D6] text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300"
            >
              Customize your own PEB
            </a>
          </div>

          {/* Booking Meeting Popup */}
          <Popup isOpen={isPopupOpen} onClose={closeBookingPopup}>
            <BookMeeting />
          </Popup>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={(e) => {
                e.stopPropagation()
                toggleMenu()
              }}
              className="text-gray-700 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? <path d="M6 18L18 6M6 6l12 12" /> : <path d="M4 6h16M4 12h16M4 18h16" />}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pt-4 border-t border-gray-200" ref={mobileMenuRef}>
            <div className="flex flex-col space-y-3">
              <NavLink to="/" className="text-gray-700 hover:text-blue-600 py-1">
                Home
              </NavLink>

              {/* Mobile About Us Dropdown */}
              <div ref={mobileAboutRef}>
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    setAboutDropdownOpen(!aboutDropdownOpen)
                    setProductsDropdownOpen(false)
                    setPebDropdownOpen(false)
                    setEngineeringDropdownOpen(false)
                    setEpcDropdownOpen(false)
                  }}
                  className="flex items-center justify-between w-full text-left text-gray-700 hover:text-blue-600 py-1"
                >
                  <span>About Us</span>
                  <svg
                    className={`h-4 w-4 transform ${aboutDropdownOpen ? "rotate-180" : ""}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {aboutDropdownOpen && (
                  <div className="pl-4 mt-2 space-y-1">
                    <NavLink to="/about/why-us" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      Why Us
                    </NavLink>
                    <NavLink to="/about/our-team" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      Our Team
                    </NavLink>
                    <NavLink to="/about/peb" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      What is PEB
                    </NavLink>
                  </div>
                )}
              </div>

              {/* Mobile Products & Services Dropdown */}
              <div ref={mobileProductsRef}>
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    setProductsDropdownOpen(!productsDropdownOpen)
                    setAboutDropdownOpen(false)
                    setPebDropdownOpen(false)
                    setEngineeringDropdownOpen(false)
                    setEpcDropdownOpen(false)
                  }}
                  className="flex items-center justify-between w-full text-left text-gray-700 hover:text-blue-600 py-1"
                >
                  <span>Product & Services</span>
                  <svg
                    className={`h-4 w-4 transform ${productsDropdownOpen ? "rotate-180" : ""}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {productsDropdownOpen && (
                  <div className="pl-4 mt-2 space-y-2">
                    {/* Mobile PEB Sub-dropdown */}
                    <div ref={mobilePebRef}>
                      <button
                        onClick={(e) => {
                          e.stopPropagation()
                          setPebDropdownOpen(!pebDropdownOpen)
                          setEngineeringDropdownOpen(false)
                          setEpcDropdownOpen(false)
                        }}
                        className="flex items-center justify-between w-full text-left text-gray-700 hover:text-blue-600 py-1"
                      >
                        <span>Pre Engineered Steel Structures</span>
                        <svg
                          className={`h-4 w-4 transform ${pebDropdownOpen ? "rotate-180" : ""}`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>

                      {pebDropdownOpen && (
                        <div className="pl-4 mt-1 space-y-1">
                          <NavLink to="/pre-engg" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                            Pre Engineered Steel Structures
                          </NavLink>
                          <NavLink
                            to="/pre-engg/pre-engg-building"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          >
                            Pre Engineered Buildings
                          </NavLink>
                          <NavLink
                            to="/pre-engg/peb-warehouse"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          >
                            PEB Warehouse
                          </NavLink>
                          <NavLink
                            to="/pre-engg/peb-sheds"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          >
                            PEB Sheds
                          </NavLink>
                          <NavLink
                            to="/pre-engg/poultry-shed"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          >
                            Poultry Sheds
                          </NavLink>
                          <NavLink
                            to="/pre-engg/peb-mills"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          >
                            PEB Mills
                          </NavLink>
                          <NavLink
                            to="/pre-engg/peb-multistory"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          >
                            PEB Multi Storey Buildings
                          </NavLink>
                          <NavLink
                            to="/pre-engg/peb-spinning"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          >
                            PEB Spinning & Grinding Sheds
                          </NavLink>
                          <NavLink
                            to="/pre-engg/ethanol"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          >
                            Ethanol Sheds
                          </NavLink>
                          <NavLink
                            to="/pre-engg/peb-metro"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          >
                            PEB Metro Station
                          </NavLink>
                        </div>
                      )}
                    </div>

                    {/* Mobile Engineering Service Sub-dropdown */}
                    <div ref={mobileEngineeringRef}>
                      <button
                        onClick={(e) => {
                          e.stopPropagation()
                          setEngineeringDropdownOpen(!engineeringDropdownOpen)
                          setPebDropdownOpen(false)
                          setEpcDropdownOpen(false)
                        }}
                        className="flex items-center justify-between w-full text-left text-gray-700 hover:text-blue-600 py-1"
                      >
                        <span>Engineering & Technical Advisory</span>
                        <svg
                          className={`h-4 w-4 transform ${engineeringDropdownOpen ? "rotate-180" : ""}`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>

                      {engineeringDropdownOpen && (
                        <div className="pl-4 mt-1 space-y-1">
                          <NavLink
                            to="/engg-technical-services"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          >
                            Engineering & Technical Advisory Service
                          </NavLink>
                          <NavLink
                            to="/engg-technical-services/fire-service"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          >
                            Fire Services
                          </NavLink>
                          <NavLink
                            to="/engg-technical-services/mep-service"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          >
                            MEP Services
                          </NavLink>
                          <NavLink
                            to="/engg-technical-services/civil-foundation"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          >
                            Civil Foundation Work
                          </NavLink>
                        </div>
                      )}
                    </div>

                    {/* Mobile EPC Sub-dropdown */}
                    <div ref={mobileEpcRef}>
                      <button
                        onClick={(e) => {
                          e.stopPropagation()
                          setEpcDropdownOpen(!epcDropdownOpen)
                          setPebDropdownOpen(false)
                          setEngineeringDropdownOpen(false)
                        }}
                        className="flex items-center justify-between w-full text-left text-gray-700 hover:text-blue-600 py-1"
                      >
                        <span>EPC Turnkey Solutions</span>
                        <svg
                          className={`h-4 w-4 transform ${epcDropdownOpen ? "rotate-180" : ""}`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>

                      {epcDropdownOpen && (
                        <div className="pl-4 mt-1 space-y-1">
                          <NavLink
                            to="/turnkey-solution"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          >
                            EPC -Turnkey Solutions
                          </NavLink>
                          <NavLink
                            to="/turnkey-solution/erection-services"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          >
                            Erection Services
                          </NavLink>
                          <NavLink
                            to="/turnkey-solution/mep"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          >
                            MEP Designing
                          </NavLink>
                          <NavLink
                            to="/turnkey-solution/peb"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          >
                            PEB Designing
                          </NavLink>
                          <NavLink
                            to="/turnkey-solution/civil-structure"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          >
                            Civil Structure Design
                          </NavLink>
                          <NavLink
                            to="/turnkey-solution/peb-designing"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          >
                            PEB Design Vetting
                          </NavLink>
                        </div>
                      )}
                    </div>

                    <NavLink to="/smart-and-green" className="block text-gray-700 hover:text-blue-600 py-1">
                      Smart & Green Buildings
                    </NavLink>
                  </div>
                )}
              </div>

              <NavLink to="/our-project" className="text-gray-700 hover:text-blue-600">
                Our Projects
              </NavLink>
              <NavLink to="/blog" className="text-gray-700 hover:text-blue-600">
                Blog
              </NavLink>
              <NavLink to="/career" className="text-gray-700 hover:text-blue-600">
                Careers
              </NavLink>

              <div className="pt-3 space-y-3">
                <button
                  onClick={openBookingPopup}
                  className="bg-[#CABA99] text-gray-700 px-4 py-2 rounded hover:bg-amber-300 transition duration-300"
                >
                  Book a Meeting
                </button>

                <a
                  href="#"
                  onClick={closeAllDropdowns}
                  className="block bg-blue-600 text-white px-4 py-2 rounded text-center hover:bg-blue-700"
                >
                  Customize your own PEB
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
