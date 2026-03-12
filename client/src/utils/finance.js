function calculateTotalInvestment(Principal, investmentMonthly, time) {
  const t = time * 12;
  const totalInvested = Principal + investmentMonthly * t;
  return totalInvested;
}

function calculateFutureValue(Principal, annualRate, time, investmentMonthly) {
  const rate = annualRate /100 / 12;
  const t = time * 12;

  if (rate == 0) {
    return Principal * investmentMonthly * t;
  }

  const lumpSum = Principal * Math.pow(1 + rate, t);
  const sip = investmentMonthly * ((Math.pow(1 + rate, t) - 1) / rate);

  const futureValue = lumpSum + sip;
  return futureValue;
}

function calculateInterestEarned(
  Principal,
  annualRate,
  time,
  investmentMonthly,
) {
  const FV = calculateFutureValue(
    Principal,
    annualRate,
    time,
    investmentMonthly,
  );
  const invested = calculateTotalInvestment(Principal, investmentMonthly, time);
  const interestEarned = FV - invested;
  return interestEarned;
}

export {
  calculateFutureValue,
  calculateInterestEarned,
  calculateTotalInvestment,
};
