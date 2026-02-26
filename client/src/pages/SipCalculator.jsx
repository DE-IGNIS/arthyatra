function SipCalculator() {
  return (
    <div className="min-h-[calc(100vh-56px)] bg-stone-50 flex items-center justify-center px-4">
      <div className="text-center">
        <div className="w-16 h-16 rounded-2xl bg-stone-900 flex items-center justify-center mx-auto mb-6">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="3" width="20" height="14" rx="2" />
            <line x1="8" y1="21" x2="16" y2="21" />
            <line x1="12" y1="17" x2="12" y2="21" />
          </svg>
        </div>
        <h1 className="text-2xl font-bold text-stone-900 mb-2">SIP Calculator</h1>
        <p className="text-sm text-stone-500">Coming soon — plan your monthly investments here.</p>
      </div>
    </div>
  );
}

export default SipCalculator;
