function RiskProfiler() {
  return (
    <div className="min-h-[calc(100vh-56px)] bg-stone-50 flex items-center justify-center px-4">
      <div className="text-center">
        <div className="w-16 h-16 rounded-2xl bg-stone-900 flex items-center justify-center mx-auto mb-6">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          </svg>
        </div>
        <h1 className="text-2xl font-bold text-stone-900 mb-2">Risk Profiler</h1>
        <p className="text-sm text-stone-500">Coming soon — discover your investment risk appetite.</p>
      </div>
    </div>
  );
}

export default RiskProfiler;
