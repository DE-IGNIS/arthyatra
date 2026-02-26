import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Content from "./pages/Content";
import About from "./pages/About";
import Simulator from "./pages/Simulator";
import Layout from "./layouts/Layout";

function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/simulator" element={<Simulator />} />
          <Route path="/content" element={<Content />} />
          <Route path="/about" element={<About />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
