const OPTION_LABELS = ["A", "B", "C", "D", "E", "F"];

function getGridCols(count) {
  if (count === 1) return "grid-cols-1";
  if (count === 2) return "grid-cols-1 sm:grid-cols-2";
  if (count === 3) return "grid-cols-1 sm:grid-cols-3";
  return "grid-cols-1 sm:grid-cols-2";
}

export default function Card({ day, scene, options = [], onSelect, selected }) {
  return (
    <div className="bg-white border border-stone-200 rounded-2xl shadow-sm overflow-hidden">

      <div className="px-6 py-4 border-b border-stone-100 flex items-center gap-3">
        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold tracking-wide bg-stone-900 text-white uppercase">
          {day}
        </span>
      </div>

      <div className="px-6 py-5">
        <p className="text-stone-700 text-sm leading-relaxed">{scene}</p>
      </div>

      {options.length > 0 && (
        <div className="px-6 pb-6">
          <p className="text-xs font-semibold text-stone-400 uppercase tracking-widest mb-3">
            Choose your action
          </p>
          <div className={`grid gap-2.5 ${getGridCols(options.length)}`}>
            {options.map((option, i) => {
              const isSelected = selected === i;
              return (
                <button
                  key={i}
                  onClick={() => onSelect?.(i)}
                  className={`group flex items-start gap-3 w-full text-left px-4 py-3 rounded-xl border text-sm font-medium transition-all duration-150 cursor-pointer
                    ${
                      isSelected
                        ? "border-stone-900 bg-stone-900 text-white"
                        : "border-stone-200 bg-stone-50 text-stone-700 hover:border-stone-400 hover:bg-stone-100"
                    }`}
                >
                  <span
                    className={`shrink-0 mt-0.5 w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold
                      ${
                        isSelected
                          ? "bg-white text-stone-900"
                          : "bg-stone-200 text-stone-600 group-hover:bg-stone-300"
                      }`}
                  >
                    {OPTION_LABELS[i] ?? i + 1}
                  </span>
                  <span className="leading-snug">{option}</span>
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
