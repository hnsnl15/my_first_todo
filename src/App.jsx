import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header";
import Todo from "./components/Todo";
import TOTD from "./components/TOTD";

function App() {
  return (
    <Router>
      <main className="App">
        <Header />
        <Routes>
          <Route path="/Todo" element={<Todo />} />
          <Route path="/TOTD" element={<TOTD />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
