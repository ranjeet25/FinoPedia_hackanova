import { useState } from 'react'
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Homepage from './LandingPage/Homepage'
import Login from './AuthPage/Login'
import Dashboard from './Dashboard/Dashboard';
import GenAI from './Dashboard/GenAI/GenAI';
import Taxation from './Dashboard/Taxation/Taxation';
function App() {

  return (
   
    <BrowserRouter>
    <Routes>
    
      <Route index element={<Homepage></Homepage>} />
      <Route path="/login" element={<Login></Login>} />
      <Route path="/dash" element={<Dashboard></Dashboard>} />
      <Route path="/talk" element={<GenAI></GenAI>}/>
      <Route path="/taxation" element={<Taxation></Taxation>}/>
    </Routes>
    </BrowserRouter>
   
  
  )
}

export default App
