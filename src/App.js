import React from 'react';
import './style.css';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Auth from './component/Auth';
import 'bootstrap/dist/css/boostrap.min.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/auth" element={<Auth />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
