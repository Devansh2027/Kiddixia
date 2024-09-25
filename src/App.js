import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import KiddixiaUI from './kid_ui'; // Ensure the correct filename is used

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<KiddixiaUI />} />
      </Routes>
    </Router>
  );
}

export default App;
