import React from "react";
import Cardone from "./components/cardone";
import Function from "./components/function";
import { Routes, Route, useNavigate } from "react-router-dom";

import "../src/App.css";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Cardone></Cardone>}></Route>
      </Routes>

      {/* <div className="container">
        <Function></Function>
      </div> */}
    </div>
  );
}
export default App;
