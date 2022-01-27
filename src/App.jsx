import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.css"
import Home from "./Components/Home"

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="*" elment={<>404 Not Found</>} />
      </Routes>
    </Router>
  );
}

export default App;
