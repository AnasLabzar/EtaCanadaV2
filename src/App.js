import React from "react";
import Home from "./Pages/Home";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './Assets/style/app.css'

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
        <Route path="/" caseSensitive={false} element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
