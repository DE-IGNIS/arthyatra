import { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/react.svg";

const navLinks = [
  {
    to: "/simulator",
    label: "Simulator",
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
  },
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

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

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

          <nav className="hidden md:flex items-center gap-0.5 text-[#e5e5e5]" aria-label="Main navigation">
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
            
          {/* Signup and login */}
          {/* <div className="hidden md:flex items-center gap-2">
            <NavLink
              to="/signin"
              className="px-4 py-1.5 rounded-md text-sm font-medium text-stone-800 border border-stone-300 bg-white hover:bg-stone-50 transition-colors duration-150"
            >
              Sign In
            </NavLink>
            <NavLink
              to="/signup"
              className="px-4 py-1.5 rounded-md text-sm font-medium text-white bg-stone-900 hover:bg-stone-700 transition-colors duration-150"
            >
              Get Started
            </NavLink>
          </div> */}

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
        <div
          id="mobile-menu"
          className="md:hidden border-t border-stone-200 bg-stone-50 px-4 pt-2 pb-4"
        >
          <nav className="flex flex-col gap-0.5" aria-label="Mobile navigation">
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

          {/* Mobile CTA Buttons */}
          {/* <div className="flex flex-col gap-2 mt-4 pt-4 border-t border-stone-200">
            <NavLink
              to="/signin"
              onClick={closeMenu}
              className="flex items-center justify-center px-4 py-2.5 rounded-md text-sm font-medium text-stone-800 border border-stone-300 bg-white hover:bg-stone-50 transition-colors duration-150"
            >
              Sign In
            </NavLink>
            <NavLink
              to="/signup"
              onClick={closeMenu}
              className="flex items-center justify-center px-4 py-2.5 rounded-md text-sm font-medium text-white bg-stone-900 hover:bg-stone-700 transition-colors duration-150"
            >
              Get Started
            </NavLink>
          </div> */}
        </div>
      )}
    </header>
  );
}

export default Navbar;
