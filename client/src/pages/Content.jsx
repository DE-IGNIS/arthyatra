import TradingViewWidget from "../components/TradingViewWidget";

export default function Content() {
  return (
    <div className="min-h-[calc(100vh-56px)] bg-stone-50 flex items-center justify-center p-6">
      <div className="w-full max-w-150 aspect-square rounded-2xl overflow-hidden shadow-md border border-stone-200">
        <TradingViewWidget />
      </div>
    </div>
  );
}
