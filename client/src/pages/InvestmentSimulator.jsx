import { useState } from "react";
import {
  calculateFutureValue,
  calculateInterestEarned,
  calculateTotalInvestment,
} from "../utils/finance";

function InvestmentSimulator() {
  const [principalAmount, setPrincipalAmount] = useState(0);
  const [annualRate, setAnnualRate] = useState(0);
  const [time, setTime] = useState(0);
  const [monthlyInvestment, setMonthlyInvestment] = useState(0);

  const [futureValue, setFutureValue] = useState(0);
  const [totalInvestment, setTotalInvestment] = useState(0);
  const [interestEarned, setInterestEarned] = useState(0);

  const [simulationResult, setSimulationResult] = useState(false);
  const [error, setError] = useState("");

  const formatINR = (value) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      minimumFractionDigits: 2,
    }).format(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const P = Number(principalAmount);
    const R = Number(annualRate);
    const T = Number(time);
    const M = Number(monthlyInvestment);

    if (P < 0 || R < 0 || T <= 1 || M < 0) {
      setError("All values must be valid. Years must be at least 1.");
      setSimulationResult(false);
      return;
    }

    setError("");
    const T_INV = calculateTotalInvestment(P, M, T);
    const FV = calculateFutureValue(P, R, T, M);
    const I_E = calculateInterestEarned(P, R, T, M);

    setFutureValue(FV);
    setInterestEarned(I_E);
    setTotalInvestment(T_INV);

    setSimulationResult(true);

    // Uncomment to debug/verify outputs
    // console.log("Total Investment:", T_INV.toFixed(2));
    // console.log("Future Value:", FV.toFixed(2));
    // console.log("Interest Earned:", I_E.toFixed(2));
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 border border-gray-200 rounded-lg shadow-sm">
      <h2 className="text-xl font-semibold mb-6">Investment Simulator</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          min="0"
          step="0.01"
          name="principal-amount"
          type="number"
          value={principalAmount}
          placeholder="Principal amount"
          onChange={(e) => setPrincipalAmount(e.target.value)}
          className="border border-gray-300 rounded px-3 py-2 text-sm outline-none focus:border-gray-500"
        />
        <input
          min="0"
          step="0.01"
          name="annual-rate"
          type="number"
          value={annualRate}
          placeholder="Annual rate (%)"
          onChange={(e) => setAnnualRate(e.target.value)}
          className="border border-gray-300 rounded px-3 py-2 text-sm outline-none focus:border-gray-500"
        />
        <input
          min="0"
          step="0.01"
          name="time"
          type="number"
          value={time}
          placeholder="Investment time (years)"
          onChange={(e) => setTime(e.target.value)}
          className="border border-gray-300 rounded px-3 py-2 text-sm outline-none focus:border-gray-500"
        />
        <input
          min="0"
          step="0.01"
          name="monthly-investment"
          type="number"
          value={monthlyInvestment}
          placeholder="Monthly investment"
          onChange={(e) => setMonthlyInvestment(e.target.value)}
          className="border border-gray-300 rounded px-3 py-2 text-sm outline-none focus:border-gray-500"
        />
        <button
          type="submit"
          className="bg-gray-900 text-white rounded px-4 py-2 text-sm hover:bg-gray-700 cursor-pointer"
        >
          Simulate
        </button>
      </form>

      <div>
        {error && <p className="text-red-500 text-sm mt-4">{error}</p>}

        {simulationResult && !error && (
          <div className="mt-4 space-y-2">
            <p>Future Value: {formatINR(futureValue)}</p>
            <p>Total Investment: {formatINR(totalInvestment)}</p>
            <p>Interest Earned: {formatINR(interestEarned)}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default InvestmentSimulator;
