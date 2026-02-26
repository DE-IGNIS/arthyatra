import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Content from "./pages/Content";
import About from "./pages/About";
import Simulator from "./pages/InvestmentSimulator";
import SipCalculator from "./pages/SipCalculator";
import RiskProfiler from "./pages/RiskProfiler";
import MarketQuiz from "./pages/MarketQuiz";
import Layout from "./layouts/Layout";

function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/investment-simulator" element={<Simulator />} />
          <Route path="/sip-calculator" element={<SipCalculator />} />
          <Route path="/risk-profiler" element={<RiskProfiler />} />
          <Route path="/market-quiz" element={<MarketQuiz />} />
          <Route path="/content" element={<Content />} />
          <Route path="/about" element={<About />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
