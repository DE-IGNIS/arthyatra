import { useState } from "react";
import Card from "../components/ui/Card";
import TradingViewWidget from "../components/TradingViewWidget";

// const script = [
//   {
//     day: "Day 1",
//     scene:
//       "You've stumbled across two completely opposite takes today. A seasoned financial advisor is warning anyone who'll listen — tech stocks are overheating, a bubble is forming, and the smart money is quietly moving into mutual funds and government bonds. But your social feed tells a different story. Tesla is everywhere. Screenshots of gains. People talking about how they 'wish they'd bought earlier.' Every finance thread, every reel, same name. You've already opened your brokerage account. Now you're just sitting there, cursor hovering.",
//     options: [
//       "Go down the rabbit hole — search Tesla, read the gain stories",
//       "Take the warning seriously and research the tech bubble angle",
//       "Close the app. It's the weekend. Not today.",
//       "Spend the day learning about portfolio diversification instead",
//     ],
//   },
//   {
//     day: "Day 2",
//     scene:
//       "Markets are open. The buzz from yesterday is still sitting in the back of your head. You've done some reading, maybe too much. The bubble argument makes sense on paper. But so does the EV future. Your advisor friend keeps saying 'start small, stay consistent.' You open your portfolio screen. The numbers feel very real now.",
//     options: [
//       "Dip your toes in — invest ₹10,000 to start",
//       "Go bigger — put ₹50,000 into Tesla",
//       "Invest in the diversified fund your advisor suggested",
//       "Watch the market for a few more days before touching anything",
//     ],
//   },
//   {
//     day: "Day 7",
//     scene:
//       "One week in and honestly? It's going well. Your portfolio is up 12% and you're checking it more than you'd like to admit. But now there's noise — a Reddit thread is swearing up and down that some small-cap stock is about to 10x. The comments are wild. People are already claiming early positions. That familiar itch is back.",
//     options: [
//       "Dump your current holdings and chase the Reddit stock",
//       "Add another ₹2,000 to your existing position while it's hot",
//       "Do nothing. You made a plan, stick to it.",
//       "Take your profits now and call the first week a win",
//     ],
//   },
//   {
//     day: "Day 14",
//     scene:
//       "Out of nowhere, an inflation report drops and the market doesn't like it. Your portfolio gives back 8% in a day. Headlines are doing what headlines do — 'Is this the crash everyone feared?' Your chest is a little tighter than usual. You keep refreshing the screen like the numbers are going to change if you look enough.",
//     options: [
//       "Sell everything. Better to lose a little than lose it all.",
//       "Hold. You knew this could happen. Trust the plan.",
//       "Actually buy more — lower prices, same companies",
//       "Pull out half, keep the rest, hedge your nerves",
//     ],
//   },
//   {
//     day: "Day 25",
//     scene:
//       "The dip? Gone. The market bounced back and then climbed even higher. You're back in the green and feeling sharper than ever. Then your coworker casually drops that they doubled their money on an options trade last week. They make it sound simple. Maybe it is. Maybe you've been playing too safe.",
//     options: [
//       "Look into options — bigger risk, bigger reward",
//       "Stay exactly where you are. Don't get greedy.",
//       "Put an extra ₹3,000 into index funds, slow and steady",
//       "Take back your original investment, let only the profits ride",
//     ],
//   },
//   {
//     day: "Month 2",
//     scene:
//       "Earnings season hits and one of your stocks reports numbers that disappoint the market. Not catastrophically bad — just not great. It drops 20% overnight while you were sleeping. You wake up, check your phone, and feel it in your stomach. The rest of the portfolio is flat. You start second-guessing everything you thought you knew.",
//     options: [
//       "Cut the loss, move on, learn from it",
//       "Average down — buy more at the lower price",
//       "Hold everything, let it ride out",
//       "Rebalance, shift some weight into safer assets",
//     ],
//   },
//   {
//     day: "Month 3",
//     scene:
//       "Recovery. Slow, unexciting, but real. The stock that tanked is clawing its way back. Then out of nowhere, a sector rotation — investors are dumping tech and piling into energy and healthcare. Your tech-heavy portfolio takes a 15% hit in four days. No crash, no headline event. Just the market quietly changing its mind. It's one of those weeks where you question if you actually understand any of this.",
//     options: [
//       "Rotate into energy or healthcare to follow the money",
//       "Stay in tech — cycles turn, this will pass",
//       "Add some defensive stocks (utilities, consumer staples) as a buffer",
//       "Park a chunk in bonds and wait for the dust to settle",
//     ],
//   },
//   {
//     day: "Month 4",
//     scene:
//       "Things are flat. Like, genuinely boring. No big wins, no scary dips. You're up maybe 3% total and it feels like watching paint dry. Then a targeted ad catches your eye — some algorithm promising 30% monthly returns. The testimonials look real. Meanwhile your index fund just quietly posted 4% for the quarter and nobody's excited about that.",
//     options: [
//       "Try the algorithm with a small amount, just to see",
//       "Boring works — add more to the index fund",
//       "Pull everything out, this is moving too slow",
//       "Diversify into REITs or dividend stocks for some passive income",
//     ],
//   },
//   {
//     day: "Month 5",
//     scene:
//       "A geopolitical flare-up you weren't tracking spooks the market. Everything drops 10% in a week. Your portfolio is now down from its peak, and for the first time, you're sitting on a real loss. Not a paper loss from a bad day — an actual, looking-at-the-numbers loss. Friends are asking if you're 'still doing that investing thing.' It stings a little more than you expected.",
//     options: [
//       "Stop investing until things stabilize",
//       "This is noise — keep your monthly contribution going",
//       "Shift everything into gold or safer assets as a hedge",
//       "Cut losses on the weakest holdings and consolidate",
//     ],
//   },
//   {
//     day: "Month 6",
//     scene:
//       "Six months. You've had a 12% week and a 20% overnight drop. You've felt smarter than everyone and dumber than everyone, sometimes within the same day. Right now your portfolio is up overall — not life-changing, but real. The market is at all-time highs and analysts are split straight down the middle: bubble or bull run. You've been here long enough now to know that nobody actually knows. The question is what you do with that.",
//     options: [
//       "Cash out. Take the profit, the experience, and walk away for now.",
//       "Stay fully invested — you've seen enough to trust the process",
//       "Sell half, move it into bonds, protect what you've built",
//       "Keep investing every month, same amount, regardless of headlines",
//     ],
//   },
// ];

const script = [
  {
    day: "Day 1",
    scene:
      "You've came across a several blog article stating ->  1.tech stocks are forming a bubble and would de-rail in value soon enough it's adviced to refrain from investing into them and instead focus on mutual funds and government bonds which are considered more safe and with steady returns -- by an concerned experienced financial advisor  2.The market is on fire. Tech stocks are exploding. Every timeline, every reel, every finance thread is talking about one name — Tesla , People who moved early are posting screenshots. Gains. Milestones. “I should’ve bought earlier” stories are everywhere...You’ve already taken the first step by opening your account.Now the question isn’t whether the market is buzzing.It’s whether you want to watch the next surge from the sidelines — or be part of it.Your next investment decision could define the story you tell a year from now",
    options: [
      "Search about tesla stock and explore on stories of people making gains on their stock",
      "Research on whether the possibility of a tech bubble",
      "Avoid the market buzz and enjoy your weekend",
      "Put efforts in researching about diversifying your portfolio",
    ],
  },
  {
    day: "Day 2",
    scene:
      "The time has come , markets have opened for the day and you are going to place your first investments after all yesterday's investment buzz....while the possiblity of a tech bubble seems evident , tesla looks more promising than ever as EV's are going to be the future or playing safe by observing the market or investing in the stock your trusted advisor friend has suggested",
    options: [
      "Invest ₹10000 in initial stock",
      "Invest ₹50000 in a tesla stock",
      "Research more on how to diversify your portfolio",
      "Wait and observe the market first",
    ],
  },
  {
    day: "Day 7",
    scene:
      "One week in. Your initial tech stock is up 12% and your Twitter feed is full of people bragging about their gains.You too are all exicted about the performance of your portfolio...During the day while scrolling on Reddit a thread claims a small-cap stock is about to '10x'. FOMO is kicking in hard and after hearing of all the buzz from tesla stocks..you have decided to",
    options: [
      "Sell your current holdings and chase the Reddit stock",
      "Invest an additional ₹2000 into your initial stock position",
      "Hold steady and do nothing",
      "Add more money to your demat account for future investments",
    ],
  },
  {
    day: "Day 14",
    scene:
      "The market dips suddenly after an unexpected inflation report. Your portfolio is down 8% from its peak. News headlines read: 'Is a crash coming?' Your gut is telling you to get out.",
    options: [
      "Panic sell everything to avoid further losses",
      "Hold and trust your original strategy",
      "Buy more — prices are lower now (buy the dip)",
      "Withdraw half and hold the rest",
    ],
  },
  {
    day: "Day 25",
    scene:
      "The dip recovered and then some. The market is climbing steadily. A coworker brags that they doubled their money on an options trade. You're feeling confident — maybe even overconfident.",
    options: [
      "Move into options trading for bigger gains",
      "Stay the course with your current investments",
      "Invest an extra $300 into index funds",
      "Take out your initial investment and let profits ride",
    ],
  },
  {
    day: "Month 2",
    scene:
      "Two months in. Earnings season is here. One of your holdings reports disappointing results and drops 20% overnight. The rest of your portfolio is flat. You're questioning your choices.",
    options: [
      "Sell the losing stock and cut your losses",
      "Average down — buy more of the fallen stock",
      "Hold everything and wait for recovery",
      "Rebalance your portfolio into safer assets",
    ],
  },
  {
    day: "Month 3",
    scene:
      "The market has been sideways for weeks. No big gains, no big losses. Boredom sets in. A flashy ad promises 30% monthly returns with a 'revolutionary' trading algorithm. Meanwhile, your index fund quietly grew 4%.",
    options: [
      "Invest $500 in the 'revolutionary' algorithm",
      "Stay boring — add more to the index fund",
      "Withdraw everything, this is taking too long",
      "Diversify into REITs or dividend stocks for passive income",
    ],
  },
];

function ProgressBar({ current, total }) {
  const pct = Math.round((current / (total - 1)) * 100);
  return (
    <div className="w-full">
      <div className="flex justify-between items-center mb-2">
        <span className="text-xs font-medium text-stone-500 uppercase tracking-widest">
          Progress
        </span>
        <span className="text-xs font-semibold text-stone-700">
          Step {current + 1} of {total}
        </span>
      </div>

      <div className="relative flex items-center justify-between">
        <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-0.5 bg-stone-200" />
        <div
          className="absolute left-0 top-1/2 -translate-y-1/2 h-0.5 bg-stone-900 transition-all duration-500"
          style={{ width: `${pct}%` }}
        />
        {script.map((s, i) => (
          <div
            key={i}
            className={`relative z-10 flex flex-col items-center gap-1.5`}
          >
            <div
              className={`w-3 h-3 rounded-full border-2 transition-all duration-300 ${
                i < current
                  ? "bg-stone-900 border-stone-900"
                  : i === current
                    ? "bg-white border-stone-900 ring-4 ring-stone-900/10"
                    : "bg-white border-stone-300"
              }`}
            />
          </div>
        ))}
      </div>

      <div className="relative flex justify-between mt-2">
        {script.map((s, i) => (
          <span
            key={i}
            className={`text-[10px] font-medium transition-colors duration-200 ${
              i === current
                ? "text-stone-900"
                : i < current
                  ? "text-stone-500"
                  : "text-stone-300"
            } ${
              i !== 0 && i !== current && i !== script.length - 1
                ? "hidden sm:block"
                : ""
            }`}
          >
            {s.day}
          </span>
        ))}
      </div>
    </div>
  );
}

function StartScreen({
  initAmount,
  setInitAmount,
  initStock,
  setInitStock,
  onStart,
}) {
  const invalid = !initAmount || Number(initAmount) <= 0 || !initStock;

  return (
    <div className="min-h-[calc(100vh-56px)] bg-stone-50 flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 rounded-2xl bg-stone-900 flex items-center justify-center">
            <svg
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
            </svg>
          </div>
        </div>

        <h1 className="text-2xl font-bold text-stone-900 text-center mb-2">
          Investment Returns Journey Simulator
        </h1>
        <p className="text-sm text-stone-500 text-center mb-8 leading-relaxed">
          Make real-world financial decisions across 3 yrs of market ups and
          downs. See how your choices play out.
        </p>

        <div className="grid grid-cols-3 gap-3 mb-8">
          {[
            { label: "Scenarios", value: "?" },
            { label: "Duration", value: "3 Yr" },
            { label: "Choices", value: "?" },
          ].map(({ label, value }) => (
            <div
              key={label}
              className="bg-white border border-stone-200 rounded-xl p-3 text-center"
            >
              <p className="text-lg font-bold text-stone-900">{value}</p>
              <p className="text-xs text-stone-500">{label}</p>
            </div>
          ))}
        </div>

        <div className="bg-white border border-stone-200 rounded-2xl p-6 shadow-sm">
          <label className="block text-sm font-semibold text-stone-700 mb-1.5">
            Starting Capital
          </label>
          <p className="text-xs text-stone-400 mb-3">
            How much are you willing to invest?
          </p>
          <div className="flex items-center border border-stone-200 rounded-xl overflow-hidden focus-within:ring-2 focus-within:ring-stone-900 transition-all">
            <span className="px-3 py-3 bg-stone-50 text-stone-500 text-sm font-semibold border-r border-stone-200">
              $
            </span>
            <input
              type="number"
              placeholder="e.g. 1000"
              min="0"
              max="5000"
              step="100"
              value={initAmount}
              onChange={(e) => setInitAmount(e.target.value)}
              className="flex-1 px-3 py-3 text-sm text-stone-900 bg-white focus:outline-none"
            />
          </div>

          <div className="mt-4">
            <label className="block text-sm font-semibold text-stone-700 mb-1.5">
              Select a Stock
            </label>
            <p className="text-xs text-stone-400 mb-3">
              Select a stock which you think would grow in future
            </p>
            <div className="flex items-center border border-stone-200 rounded-xl overflow-hidden focus-within:ring-2 focus-within:ring-stone-900 transition-all">
              <span className="px-3 py-3 bg-stone-50 text-stone-500 text-sm font-semibold border-r border-stone-200">
                $
              </span>
              <select
                value={initStock}
                onChange={(e) => setInitStock(e.target.value)}
                className="flex-1 px-3 py-3 text-sm text-stone-900 bg-white focus:outline-none appearance-none cursor-pointer"
              >
                <option value="">Select a stock</option>
                <option value="NASDAQ:GOOGL">GOOGLE</option>
                <option value="NASDAQ:AAPL">APPLE</option>
                <option value="NASDAQ:TSLA">TESLA</option>
                <option value="NASDAQ:META">META</option>
              </select>
            </div>
            {/* 
            Testing amt and stock selection
            {console.log(initAmount)}
            {console.log(initStock)} */}
          </div>

          <button
            onClick={onStart}
            disabled={invalid}
            className={`mt-4 w-full py-3 rounded-xl text-sm font-semibold transition-all duration-150 ${
              invalid
                ? "bg-stone-200 text-stone-400 cursor-not-allowed"
                : "bg-stone-900 text-white hover:bg-stone-700 cursor-pointer"
            }`}
          >
            Begin Simulation →
          </button>
        </div>
      </div>
    </div>
  );
}

function ResultsScreen({ choices, initAmount, initStock, onRestart }) {
  return (
    <div className="min-h-[calc(100vh-56px)] bg-stone-50 flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-lg">
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 rounded-2xl bg-stone-900 flex items-center justify-center">
            <svg
              width="30"
              height="30"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="6 9 6 2 18 2 18 9" />
              <path d="M6 18H4a2 2 0 0 1-2-2v-1a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-2" />
              <rect x="6" y="18" width="12" height="4" rx="1" />
              <path d="M18 9a6 6 0 0 1-12 0" />
            </svg>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-stone-900 text-center mb-1">
          Simulation Complete!
        </h2>
        <p className="text-sm text-stone-500 text-center mb-8">
          Starting capital:{" "}
          <span className="font-semibold text-stone-700">
            ${Number(initAmount).toLocaleString()}
          </span>
        </p>
        <p className="text-sm text-stone-500 text-center mb-8">
          Stock selected:{" "}
          <span className="font-semibold text-stone-700">${initStock}</span>
        </p>

        <div className="bg-white border border-stone-200 rounded-2xl shadow-sm overflow-hidden mb-6">
          <div className="px-5 py-3 border-b border-stone-100">
            <p className="text-xs font-semibold text-stone-400 uppercase tracking-widest">
              Your Decisions
            </p>
          </div>
          <div className="divide-y divide-stone-100">
            {choices.map(({ day, option }, i) => (
              <div key={i} className="flex items-start gap-3 px-5 py-3.5">
                <span className="shrink-0 mt-0.5 w-6 h-6 rounded-full bg-stone-900 text-white text-[10px] font-bold flex items-center justify-center">
                  {i + 1}
                </span>
                <div>
                  <p className="text-xs font-semibold text-stone-400 mb-0.5">
                    {day}
                  </p>
                  <p className="text-sm text-stone-700">{option}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={onRestart}
          className="w-full py-3 rounded-xl bg-stone-900 text-white text-sm font-semibold hover:bg-stone-700 transition-colors duration-150 cursor-pointer"
        >
          ↺ Simulate Again
        </button>
      </div>
    </div>
  );
}

function InvestmentSimulator() {
  const [phase, setPhase] = useState("start");
  const [initAmount, setInitAmount] = useState("");
  const [initStock, setInitStock] = useState("");
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [choices, setChoices] = useState([]);

  const handleStart = () => {
    setCurrentStep(0);
    setSelectedOption(null);
    setChoices([]);
    setPhase("sim");
  };

  const handleNext = () => {
    const newChoices = [
      ...choices,
      {
        day: script[currentStep].day,
        option: script[currentStep].options[selectedOption],
      },
    ];
    setChoices(newChoices);

    if (currentStep < script.length - 1) {
      setCurrentStep((s) => s + 1);
      setSelectedOption(null);
    } else {
      setPhase("results");
    }
  };

  const handleBack = () => {
    if (currentStep === 0) {
      setPhase("start");
      setSelectedOption(null);
    } else {
      setCurrentStep((s) => s - 1);
      const prev = choices[currentStep - 1];
      if (prev) {
        const prevIdx = script[currentStep - 1].options.indexOf(prev.option);
        setSelectedOption(prevIdx >= 0 ? prevIdx : null);
      } else {
        setSelectedOption(null);
      }
      setChoices(choices.slice(0, currentStep - 1));
    }
  };

  const handleRestart = () => {
    setPhase("start");
    setCurrentStep(0);
    setSelectedOption(null);
    setChoices([]);
    setInitAmount("");
  };

  if (phase === "start") {
    return (
      <StartScreen
        initAmount={initAmount}
        setInitAmount={setInitAmount}
        initStock={initStock}
        setInitStock={setInitStock}
        onStart={handleStart}
      />
    );
  }

  if (phase === "results") {
    return (
      <ResultsScreen
        choices={choices}
        initAmount={initAmount}
        initStock={initStock}
        onRestart={handleRestart}
      />
    );
  }

  const isLastStep = currentStep === script.length - 1;

  return (
    <div className="flex h-[calc(100vh-56px)] bg-stone-50 overflow-hidden">
      {/* Left — scrollable simulation panel */}
      <div className="flex-1 overflow-y-auto px-6 py-8">
        <div className="max-w-xl mx-auto">
          <div className="mb-8">
            <ProgressBar current={currentStep} total={script.length} />
          </div>

          <Card
            day={script[currentStep].day}
            scene={script[currentStep].scene}
            options={script[currentStep].options}
            selected={selectedOption}
            onSelect={setSelectedOption}
            invested={initAmount}
          />

          <div className="flex items-center justify-between mt-5">
            <button
              onClick={handleBack}
              className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl border border-stone-200 text-sm font-medium text-stone-600 bg-white hover:bg-stone-50 transition-colors duration-150 cursor-pointer"
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="15 18 9 12 15 6" />
              </svg>
              Back
            </button>

            <button
              onClick={handleNext}
              disabled={selectedOption === null}
              className={`flex items-center gap-1.5 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-150 ${
                selectedOption === null
                  ? "bg-stone-200 text-stone-400 cursor-not-allowed"
                  : "bg-stone-900 text-white hover:bg-stone-700 cursor-pointer"
              }`}
            >
              {isLastStep ? "See Results" : "Continue"}
              {!isLastStep && (
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Right — fixed TradingView widget */}
      <div className="hidden lg:block w-130 shrink-0 border-l border-stone-200">
        <TradingViewWidget stock_symbol={initStock} />
      </div>
    </div>
  );
}

export default InvestmentSimulator;
