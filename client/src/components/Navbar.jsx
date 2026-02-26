import { useState, useRef, useEffect } from "react";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import logo from "../assets/react.svg";

const simulatorFeatures = [
  {
    to: "/investment-simulator",
    label: "Investment Journey",
    description: "Simulate 6-month market decisions",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
  },
  {
    to: "/sip-calculator",
    label: "SIP Calculator",
    description: "Plan your monthly investments",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
  },
  {
    to: "/risk-profiler",
    label: "Risk Profiler",
    description: "Discover your risk appetite",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    to: "/market-quiz",
    label: "Market Quiz",
    description: "Test your financial knowledge",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
        <line x1="12" y1="17" x2="12.01" y2="17" />
      </svg>
    ),
  },
];

const navLinks = [
  {
    to: "/content",
    label: "Content",
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
      </svg>
    ),
  },
  {
    to: "/about",
    label: "About",
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <line x1="12" y1="16" x2="12" y2="12" />
        <line x1="12" y1="8" x2="12.01" y2="8" />
      </svg>
    ),
  },
];

function SimulatorIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
    </svg>
  );
}

function ChevronDown({ open }) {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ transition: "transform 200ms", transform: open ? "rotate(180deg)" : "rotate(0deg)" }}
    >
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
}

function HamburgerIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="3" y1="6" x2="21" y2="6" />
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}

function SimulatorDropdown({ onClose }) {
  const location = useLocation();
  const navigate = useNavigate();

  const handleFeatureClick = (to) => {
    navigate(to);
    onClose();
  };

  return (
    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-80 bg-white border border-stone-200 rounded-2xl shadow-lg overflow-hidden z-50">
      <div className="px-4 pt-3.5 pb-2 border-b border-stone-100">
        <p className="text-xs font-semibold text-stone-400 uppercase tracking-widest">Simulator Tools</p>
      </div>
      <div className="grid grid-cols-2 gap-px bg-stone-100 p-px">
        {simulatorFeatures.map(({ to, label, description, icon }) => {
          const isActive = location.pathname === to;
          return (
            <button
              key={to}
              onClick={() => handleFeatureClick(to)}
              className={`flex flex-col gap-2 px-4 py-4 text-left transition-colors duration-150 cursor-pointer ${
                isActive
                  ? "bg-stone-900 text-white"
                  : "bg-white hover:bg-stone-50 text-stone-700"
              }`}
            >
              <span className={isActive ? "text-white" : "text-stone-500"}>
                {icon}
              </span>
              <div>
                <p className={`text-sm font-semibold leading-tight ${isActive ? "text-white" : "text-stone-800"}`}>
                  {label}
                </p>
                <p className={`text-xs mt-0.5 leading-snug ${isActive ? "text-stone-300" : "text-stone-400"}`}>
                  {description}
                </p>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [simulatorOpen, setSimulatorOpen] = useState(false);
  const [mobileSimulatorOpen, setMobileSimulatorOpen] = useState(false);
  const dropdownRef = useRef(null);
  const location = useLocation();

  const closeMenu = () => {
    setMenuOpen(false);
    setMobileSimulatorOpen(false);
  };

  const isSimulatorActive = simulatorFeatures.some((f) => f.to === location.pathname);

  // Close dropdown on click outside
  useEffect(() => {
    if (!simulatorOpen) return;
    const handleClick = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setSimulatorOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [simulatorOpen]);

  // Close desktop dropdown on route change
  useEffect(() => {
    setSimulatorOpen(false);
  }, [location.pathname]);

  return (
    <header className="sticky top-0 z-50 bg-stone-50 border-b border-stone-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">
          <NavLink
            to="/"
            onClick={closeMenu}
            className="flex items-center gap-2 group focus:outline-none"
            aria-label="ArthYatra Home"
          >
            <img
              src={logo}
              alt=""
              width="22"
              height="22"
              className="transition-transform duration-300 group-hover:rotate-12"
            />
            <span className="text-2xl font-semibold text-stone-900 tracking-tight select-none">
              ArthYatra
            </span>
          </NavLink>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-0.5" aria-label="Main navigation">
            {/* Simulator Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setSimulatorOpen((prev) => !prev)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-sm transition-colors duration-150 cursor-pointer ${
                  isSimulatorActive
                    ? "bg-stone-200 text-stone-900 font-medium"
                    : "text-stone-600 hover:bg-stone-100 hover:text-stone-900"
                }`}
                aria-haspopup="true"
                aria-expanded={simulatorOpen}
              >
                <span className="opacity-70">
                  <SimulatorIcon />
                </span>
                Explore
                <ChevronDown open={simulatorOpen} />
              </button>

              {simulatorOpen && (
                <SimulatorDropdown onClose={() => setSimulatorOpen(false)} />
              )}
            </div>

            {/* Other nav links */}
            {navLinks.map(({ to, label, icon }) => (
              <NavLink
                key={to}
                to={to}
                className={({ isActive }) =>
                  `flex items-center gap-1.5 px-3 py-1.5 rounded-md text-sm transition-colors duration-150 ${
                    isActive
                      ? "bg-stone-200 text-stone-900 font-medium"
                      : "text-stone-600 hover:bg-stone-100 hover:text-stone-900"
                  }`
                }
              >
                <span className="opacity-70">{icon}</span>
                {label}
              </NavLink>
            ))}
          </nav>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden flex items-center justify-center w-9 h-9 rounded-md text-stone-600 hover:bg-stone-100 hover:text-stone-900 transition-colors duration-150 focus:outline-none"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            {menuOpen ? <CloseIcon /> : <HamburgerIcon />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div id="mobile-menu" className="md:hidden border-t border-stone-200 bg-stone-50 px-4 pt-2 pb-4">
          <nav className="flex flex-col gap-0.5" aria-label="Mobile navigation">
            {/* Mobile Simulator expandable */}
            <div>
              <button
                onClick={() => setMobileSimulatorOpen((prev) => !prev)}
                className={`w-full flex items-center justify-between gap-2 px-3 py-2.5 rounded-md text-sm transition-colors duration-150 cursor-pointer ${
                  isSimulatorActive
                    ? "bg-stone-200 text-stone-900 font-medium"
                    : "text-stone-600 hover:bg-stone-100 hover:text-stone-900"
                }`}
              >
                <span className="flex items-center gap-2">
                  <span className="opacity-70">
                    <SimulatorIcon />
                  </span>
                  Simulator
                </span>
                <ChevronDown open={mobileSimulatorOpen} />
              </button>

              {mobileSimulatorOpen && (
                <div className="mt-1 mx-2 grid grid-cols-2 gap-1">
                  {simulatorFeatures.map(({ to, label, description, icon }) => {
                    const isActive = location.pathname === to;
                    return (
                      <NavLink
                        key={to}
                        to={to}
                        onClick={closeMenu}
                        className={`flex flex-col gap-1.5 px-3 py-3 rounded-xl text-left transition-colors duration-150 ${
                          isActive
                            ? "bg-stone-900 text-white"
                            : "bg-white border border-stone-200 text-stone-700 hover:bg-stone-50"
                        }`}
                      >
                        <span className={isActive ? "text-white" : "text-stone-500"}>
                          {icon}
                        </span>
                        <div>
                          <p className={`text-xs font-semibold ${isActive ? "text-white" : "text-stone-800"}`}>
                            {label}
                          </p>
                          <p className={`text-[10px] mt-0.5 leading-snug ${isActive ? "text-stone-300" : "text-stone-400"}`}>
                            {description}
                          </p>
                        </div>
                      </NavLink>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Other mobile links */}
            {navLinks.map(({ to, label, icon }) => (
              <NavLink
                key={to}
                to={to}
                onClick={closeMenu}
                className={({ isActive }) =>
                  `flex items-center gap-2 px-3 py-2.5 rounded-md text-sm transition-colors duration-150 ${
                    isActive
                      ? "bg-stone-200 text-stone-900 font-medium"
                      : "text-stone-600 hover:bg-stone-100 hover:text-stone-900"
                  }`
                }
              >
                <span className="opacity-70">{icon}</span>
                {label}
              </NavLink>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}

export default Navbar;
