import { useState } from "react";

const questions = [
  {
    id: "1",
    question: "How comfortable are you with taking financial risks?",
    options: [
      {
        q_id: "A",
        score: 1,
        option: "I prefer to play it extremely safe.",
      },
      {
        q_id: "B",
        score: 2,
        option: "I take calculated risks with safer options.",
      },
      {
        q_id: "C",
        score: 3,
        option: "I usually invest based on professional advice.",
      },
      {
        q_id: "D",
        score: 5,
        option: "I am willing to take bold, high-risk decisions.",
      },
    ],
  },
  {
    id: "2",
    question:
      "How long are you willing to wait to see returns on your investment?",
    options: [
      {
        q_id: "A",
        score: 1,
        option: "I am comfortable waiting several years if needed.",
      },
      {
        q_id: "B",
        score: 2,
        option: "I can wait, but I may lose patience over time.",
      },
      {
        q_id: "C",
        score: 3,
        option: "I prefer investments that provide quicker returns.",
      },
      {
        q_id: "D",
        score: 5,
        option: "I want fast results and dislike waiting.",
      },
    ],
  },
  {
    id: "3",
    question: "When making financial decisions, what approach do you prefer?",
    options: [
      {
        q_id: "A",
        score: 1,
        option: "I seek expert advice and also do my own research.",
      },
      {
        q_id: "B",
        score: 2,
        option: "I listen to advice but decide independently.",
      },
      {
        q_id: "C",
        score: 3,
        option: "I rely heavily on expert recommendations.",
      },
      {
        q_id: "D",
        score: 5,
        option: "I trust my own judgment over external advice.",
      },
    ],
  },
];

function getScoreProfile(score) {
  if (score <= 5)
    return {
      label: "Conservative",
      description:
        "You prefer stability and safety in your financial decisions.",
      color: "bg-emerald-100 text-emerald-800",
    };
  if (score <= 9)
    return {
      label: "Moderate",
      description: "You balance risk and reward with a thoughtful approach.",
      color: "bg-sky-100 text-sky-800",
    };
  return {
    label: "Aggressive",
    description:
      "You embrace risk and aim for high returns in your investments.",
    color: "bg-amber-100 text-amber-800",
  };
}

function FinancialQuiz() {
  const [quiz_score, setQuizScore] = useState(0);
  const [quiz_end, setQuizEnd] = useState(false);
  const [count, setCount] = useState(1);

  const handleOption = (e) => {
    var option = e.target.value;

    if (count === 3) {
      setQuizEnd(true);
    }

    switch (option) {
      case "A":
        console.log(option);
        setCount((prev) => prev + 1);
        setQuizScore((prev) => prev + 1);
        return;
      case "B":
        console.log(option);
        setCount((prev) => prev + 1);
        setQuizScore((prev) => prev + 2);
        return;
      case "C":
        console.log(option);
        setCount((prev) => prev + 1);
        setQuizScore((prev) => prev + 3);
        return;
      case "D":
        console.log(option);
        setCount((prev) => prev + 1);
        setQuizScore((prev) => prev + 5);
        return;
    }
  };

  const currentQuestion = questions[count - 1];
  const profile = getScoreProfile(quiz_score);

  return (
    <main className="min-h-screen bg-stone-50">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 py-10">
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-1">
            <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold tracking-widest uppercase bg-stone-900 text-white">
              Quiz
            </span>
          </div>
          <h1 className="text-2xl font-bold text-stone-900 tracking-tight mt-2">
            Financial Quiz
          </h1>
          <p className="text-sm text-stone-500 mt-1">
            Answer a few questions to understand your financial personality.
          </p>
        </div>

        {quiz_end ? (
          <div className="bg-white border border-stone-200 rounded-2xl shadow-sm overflow-hidden">
            <div className="px-6 py-5 border-b border-stone-100 flex items-center gap-3">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold tracking-widest uppercase bg-stone-900 text-white">
                Results
              </span>
            </div>

            <div className="px-6 py-8 flex flex-col items-center text-center gap-4">
              <div className="w-20 h-20 rounded-full bg-stone-900 flex items-center justify-center shadow-sm">
                <span className="text-2xl font-bold text-white">
                  {quiz_score}
                </span>
              </div>

              <div>
                <p className="text-xs font-semibold text-stone-400 uppercase tracking-widest mb-1">
                  Your Score
                </p>
                <span
                  className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold tracking-wide ${profile.color}`}
                >
                  {profile.label} Investor
                </span>
              </div>

              <p className="text-sm text-stone-600 max-w-sm leading-relaxed mt-1">
                {profile.description}
              </p>

              <div className="w-full max-w-xs mt-2">
                <div className="flex justify-between text-xs text-stone-400 mb-1.5">
                  <span>Conservative</span>
                  <span>Aggressive</span>
                </div>
                <div className="h-2 rounded-full bg-stone-100 overflow-hidden">
                  <div
                    className="h-full rounded-full bg-stone-900 transition-all duration-500"
                    style={{
                      width: `${Math.min((quiz_score / 15) * 100, 100)}%`,
                    }}
                  />
                </div>
              </div>
            </div>

            <div className="px-6 pb-6 flex justify-center">
              <button
                onClick={() => {
                  setQuizScore(0);
                  setQuizEnd(false);
                  setCount(1);
                }}
                className="px-5 py-2.5 rounded-xl bg-stone-900 text-white text-sm font-semibold hover:bg-stone-700 transition-colors duration-150 cursor-pointer"
              >
                Retake Quiz
              </button>
            </div>
          </div>
        ) : (
          <div className="bg-white border border-stone-200 rounded-2xl shadow-sm overflow-hidden">
            <div className="px-6 py-4 border-b border-stone-100">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-semibold text-stone-400 uppercase tracking-widest">
                  Question {count} of {questions.length}
                </span>
                <span className="text-xs font-semibold text-stone-400">
                  {Math.round(((count - 1) / questions.length) * 100)}% complete
                </span>
              </div>
              <div className="h-1.5 rounded-full bg-stone-100 overflow-hidden">
                <div
                  className="h-full rounded-full bg-stone-900 transition-all duration-300"
                  style={{
                    width: `${((count - 1) / questions.length) * 100}%`,
                  }}
                />
              </div>
            </div>

            <div className="px-6 py-5">
              <p className="text-stone-800 text-base font-medium leading-relaxed">
                {currentQuestion.question}
              </p>
            </div>

            <div className="px-6 pb-6">
              <p className="text-xs font-semibold text-stone-400 uppercase tracking-widest mb-3">
                Choose your answer
              </p>
              <div className="flex flex-col gap-2.5">
                {currentQuestion.options.map((opt) => (
                  <button
                    key={opt.q_id}
                    value={opt.q_id}
                    onClick={handleOption}
                    type="button"
                    className="group flex items-center gap-3 w-full text-left px-4 py-3 rounded-xl border border-stone-200 bg-stone-50 text-stone-700 text-sm font-medium hover:border-stone-400 hover:bg-stone-100 transition-all duration-150 cursor-pointer"
                  >
                    <span className="shrink-0 w-6 h-6 rounded-full bg-stone-200 text-stone-600 group-hover:bg-stone-300 flex items-center justify-center text-xs font-bold pointer-events-none">
                      {opt.q_id}
                    </span>
                    <span className="leading-snug pointer-events-none">
                      {opt.option}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {!quiz_end && (
          <p className="text-center text-xs text-stone-400 mt-6">
            Select an option to automatically advance to the next question.
          </p>
        )}
      </div>
    </main>
  );
}

export default FinancialQuiz;
