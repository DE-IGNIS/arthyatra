import { Link } from "react-router-dom";

// ── Icons ──────────────────────────────────────────────────────────────────

function TrendingIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
    </svg>
  );
}

function QuizIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
      <line x1="12" y1="17" x2="12.01" y2="17" />
    </svg>
  );
}

function CalculatorIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="4" y="2" width="16" height="20" rx="2" />
      <line x1="8" y1="6" x2="16" y2="6" />
      <line x1="8" y1="10" x2="8.01" y2="10" />
      <line x1="12" y1="10" x2="12.01" y2="10" />
      <line x1="16" y1="10" x2="16.01" y2="10" />
      <line x1="8" y1="14" x2="8.01" y2="14" />
      <line x1="12" y1="14" x2="12.01" y2="14" />
      <line x1="16" y1="14" x2="16.01" y2="14" />
      <line x1="8" y1="18" x2="8.01" y2="18" />
      <line x1="12" y1="18" x2="12.01" y2="18" />
      <line x1="16" y1="18" x2="16.01" y2="18" />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  );
}

function MonitorIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="3" width="20" height="14" rx="2" />
      <line x1="8" y1="21" x2="16" y2="21" />
      <line x1="12" y1="17" x2="12" y2="21" />
    </svg>
  );
}

function ArrowRightIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}

// ── Sub-components ─────────────────────────────────────────────────────────

function FeatureCard({ icon, title, description, to }) {
  return (
    <div className="bg-white border border-stone-200 rounded-2xl p-6 flex flex-col gap-4 hover:shadow-sm transition-shadow duration-200">
      <div className="w-10 h-10 rounded-xl bg-stone-100 flex items-center justify-center text-stone-700">
        {icon}
      </div>
      <div className="flex flex-col gap-1.5">
        <h3 className="text-base font-semibold text-stone-900">{title}</h3>
        <p className="text-sm text-stone-500 leading-relaxed">{description}</p>
      </div>
      {to && (
        <Link
          to={to}
          className="mt-auto flex items-center gap-1.5 text-sm font-medium text-stone-700 hover:text-stone-900 transition-colors duration-150 group"
        >
          Try it
          <span className="transition-transform duration-150 group-hover:translate-x-0.5">
            <ArrowRightIcon />
          </span>
        </Link>
      )}
    </div>
  );
}

function StatTile({ value, label, description, inverted }) {
  return (
    <div
      className={`rounded-2xl p-6 flex flex-col gap-2 border ${
        inverted
          ? "bg-stone-900 border-stone-900 text-white"
          : "bg-white border-stone-200 text-stone-900"
      }`}
    >
      <span className={`text-2xl font-bold tracking-tight ${inverted ? "text-white" : "text-stone-900"}`}>
        {value}
      </span>
      <span className={`text-sm font-semibold ${inverted ? "text-stone-300" : "text-stone-700"}`}>
        {label}
      </span>
      <p className={`text-xs leading-relaxed ${inverted ? "text-stone-400" : "text-stone-500"}`}>
        {description}
      </p>
    </div>
  );
}

function ToolCard({ icon, label, description, to }) {
  return (
    <Link
      to={to}
      className="flex flex-col gap-3 px-5 py-4 rounded-2xl border border-stone-200 bg-white hover:bg-stone-50 hover:border-stone-300 transition-all duration-150 group shrink-0 w-52 sm:w-auto"
    >
      <span className="text-stone-500 group-hover:text-stone-700 transition-colors duration-150">
        {icon}
      </span>
      <div>
        <p className="text-sm font-semibold text-stone-800">{label}</p>
        <p className="text-xs text-stone-400 mt-0.5 leading-snug">{description}</p>
      </div>
    </Link>
  );
}

// ── Main Page ──────────────────────────────────────────────────────────────

export default function About() {
  const features = [
    {
      icon: <TrendingIcon />,
      title: "Investment Simulation",
      description:
        "Step into real market scenarios. Make buy/sell decisions across a 6-month journey and see how your choices impact your portfolio.",
      to: "/investment-simulator",
    },
    {
      icon: <QuizIcon />,
      title: "Financial Quizzes",
      description:
        "Test and sharpen your financial knowledge with topic-wise quizzes designed for all experience levels.",
      to: "/financial-quiz",
    },
    {
      icon: <CalculatorIcon />,
      title: "Planning Tools",
      description:
        "From SIP calculators to risk profilers — get clarity on your financial future with our suite of tools.",
      to: "/sip-calculator",
    },
  ];

  const stats = [
    {
      value: "100% Free",
      label: "Always",
      description: "All tools and simulations are completely free, forever.",
      inverted: false,
    },
    {
      value: "Learn by Doing",
      label: "Not by Reading",
      description: "Simulations put you in the driver's seat — no textbooks, just experience.",
      inverted: true,
    },
    {
      value: "Plain Language",
      label: "Beginner Friendly",
      description: "No finance degree required. We explain everything in simple terms.",
      inverted: true,
    },
    {
      value: "Realistic Data",
      label: "Data-Driven",
      description: "Our tools use realistic market data to give you actionable insights.",
      inverted: false,
    },
  ];

  const tools = [
    {
      icon: <TrendingIcon />,
      label: "Investment Journey",
      description: "Simulate 6-month market decisions",
      to: "/investment-simulator",
    },
    {
      icon: <MonitorIcon />,
      label: "SIP Calculator",
      description: "Plan your monthly investments",
      to: "/sip-calculator",
    },
    {
      icon: <ShieldIcon />,
      label: "Risk Profiler",
      description: "Discover your risk appetite",
      to: "/risk-profiler",
    },
    {
      icon: <QuizIcon />,
      label: "Financial Quiz",
      description: "Test your financial knowledge",
      to: "/financial-quiz",
    },
  ];

  return (
    <main className="bg-stone-50 min-h-screen">

      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <section className="border-b border-stone-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
          <div className="max-w-2xl">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold tracking-wide bg-stone-900 text-white uppercase mb-6">
              About ArthYatra
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-stone-900 tracking-tight leading-tight mb-5">
              Empowering India, One Financial Decision at a Time
            </h1>
            <p className="text-base sm:text-lg text-stone-500 leading-relaxed mb-8">
              We believe every Indian deserves access to quality financial education. ArthYatra
              bridges the gap between complex financial concepts and everyday decision-making
              through interactive simulations, quizzes, and planning tools.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/investment-simulator"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-stone-900 text-white text-sm font-medium hover:bg-stone-800 transition-colors duration-150"
              >
                Start Simulating
                <ArrowRightIcon />
              </Link>
              <Link
                to="/financial-quiz"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-stone-300 bg-white text-stone-800 text-sm font-medium hover:bg-stone-100 transition-colors duration-150"
              >
                Take a Quiz
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── What We Offer ────────────────────────────────────────────── */}
      <section className="border-b border-stone-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="mb-10">
            <p className="text-xs font-semibold text-stone-400 uppercase tracking-widest mb-2">
              What We Offer
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold text-stone-900 tracking-tight">
              Learn by doing, not just reading.
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {features.map((f) => (
              <FeatureCard key={f.title} {...f} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Why ArthYatra ────────────────────────────────────────────── */}
      <section className="border-b border-stone-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="mb-10">
            <p className="text-xs font-semibold text-stone-400 uppercase tracking-widest mb-2">
              Why ArthYatra?
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold text-stone-900 tracking-tight">
              Built around how people actually learn.
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {stats.map((s) => (
              <StatTile key={s.label} {...s} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Tools Showcase ───────────────────────────────────────────── */}
      <section className="border-b border-stone-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="mb-10">
            <p className="text-xs font-semibold text-stone-400 uppercase tracking-widest mb-2">
              Explore Our Tools
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold text-stone-900 tracking-tight">
              Everything you need to get started.
            </h2>
          </div>
          {/* Horizontally scrollable on mobile */}
          <div className="flex gap-3 overflow-x-auto pb-2 sm:grid sm:grid-cols-2 lg:grid-cols-4 sm:overflow-visible sm:pb-0">
            {tools.map((t) => (
              <ToolCard key={t.label} {...t} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Mission CTA ──────────────────────────────────────────────── */}
      <section>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="bg-stone-900 rounded-2xl px-8 sm:px-14 py-14 flex flex-col items-center text-center gap-5">
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight max-w-xl leading-tight">
              Ready to start your financial journey?
            </h2>
            <p className="text-sm sm:text-base text-stone-400 max-w-md leading-relaxed">
              ArthYatra is free, beginner-friendly, and built for the everyday Indian investor.
            </p>
            <Link
              to="/investment-simulator"
              className="inline-flex items-center gap-2 mt-2 px-6 py-3 rounded-xl bg-white text-stone-900 text-sm font-semibold hover:bg-stone-100 transition-colors duration-150"
            >
              Get Started — It's Free
              <ArrowRightIcon />
            </Link>
            <p className="text-xs text-stone-600 mt-1">
              Built with ❤️ to make finance accessible for everyone.
            </p>
          </div>
        </div>
      </section>

    </main>
  );
}
