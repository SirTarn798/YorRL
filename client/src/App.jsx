import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from '../pages/HomePage';
import Reroute from '../pages/Reroute';
import './app.css'

function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/reroute/:hashedLink" element={<Reroute />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
