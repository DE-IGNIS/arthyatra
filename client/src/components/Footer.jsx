import { NavLink } from "react-router-dom";
import logo from "../assets/arth-icon.svg";

const toolLinks = [
  { to: "/investment-simulator", label: "Investment Journey" },
  { to: "/sip-calculator", label: "SIP Calculator" },
  { to: "/risk-profiler", label: "Risk Profiler" },
  { to: "/financial-quiz", label: "Financial Quiz" },
];

const learnLinks = [
  { to: "/content", label: "Content Library" },
  { to: "/about", label: "About ArthYatra" },
];

function FooterLinkGroup({ heading, links }) {
  return (
    <div className="flex flex-col gap-3">
      <p className="text-xs font-semibold text-stone-400 uppercase tracking-widest">
        {heading}
      </p>
      <ul className="flex flex-col gap-2">
        {links.map(({ to, label }) => (
          <li key={to}>
            <NavLink
              to={to}
              className={({ isActive }) =>
                `text-sm transition-colors duration-150 ${
                  isActive
                    ? "text-stone-900 font-medium"
                    : "text-stone-500 hover:text-stone-800"
                }`
              }
            >
              {label}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-stone-50 border-t border-stone-200">
      {/* Main footer body */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-14">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 sm:gap-8">

          {/* Brand column */}
          <div className="flex flex-col gap-4 sm:col-span-1">
            <NavLink
              to="/"
              className="flex items-center gap-2 w-fit focus:outline-none group"
              aria-label="ArthYatra Home"
            >
              <img
                src={logo}
                alt="ArthYatra logo"
                width="20"
                height="20"
                className="transition-transform duration-300 group-hover:rotate-12"
              />
              <span className="text-xl font-semibold text-stone-900 tracking-tight select-none">
                ArthYatra
              </span>
            </NavLink>
            <p className="text-sm text-stone-500 leading-relaxed max-w-xs">
              Spreading financial literacy through interactive simulations, quizzes,
              and planning tools — free for everyone.
            </p>
            <span className="inline-flex items-center gap-1.5 text-xs text-stone-400">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
              </svg>
              Built to make finance accessible for everyone
            </span>
          </div>

          {/* Nav columns */}
          <div className="grid grid-cols-2 gap-8 sm:col-span-2 sm:grid-cols-2">
            <FooterLinkGroup heading="Explore Tools" links={toolLinks} />
            <FooterLinkGroup heading="Learn" links={learnLinks} />
          </div>

        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-stone-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs text-stone-400">
            © {year} ArthYatra. All rights reserved.
          </p>
          <p className="text-xs text-stone-400">
            Free · Open · Educational
          </p>
        </div>
      </div>
    </footer>
  );
}
