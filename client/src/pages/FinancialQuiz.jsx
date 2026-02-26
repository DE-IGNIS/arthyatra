function MarketQuiz() {
  return (
    <div className="min-h-[calc(100vh-56px)] bg-stone-50 flex items-center justify-center px-4">
      <div className="text-center">
        <div className="w-16 h-16 rounded-2xl bg-stone-900 flex items-center justify-center mx-auto mb-6">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" />
            <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
            <line x1="12" y1="17" x2="12.01" y2="17" />
          </svg>
        </div>
        <h1 className="text-2xl font-bold text-stone-900 mb-2">Market Quiz</h1>
        <p className="text-sm text-stone-500">Coming soon — test your financial knowledge.</p>
      </div>
    </div>
  );
}

export default MarketQuiz;
