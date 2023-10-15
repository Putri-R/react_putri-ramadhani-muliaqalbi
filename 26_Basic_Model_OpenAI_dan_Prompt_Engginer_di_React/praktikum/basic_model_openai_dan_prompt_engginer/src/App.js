import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Openai from './pages/App';
import GrammarCorrection from './pages/grammarCorrectionPage';

function App() {
  return (
    <Router>
        <Routes>
            <Route path="/" element={<Openai />} />
            <Route path="/grammar-correction" element={<GrammarCorrection />} />
        </Routes>
    </Router>
  );
}

export default App;
