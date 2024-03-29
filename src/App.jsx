
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Homepage from './LandingPage/Homepage'
import Login from './AuthPage/Login'
import Dashboard from './Dashboard/Dashboard';
import GenAI from './Dashboard/GenAI/GenAI';
import Signup from "./AuthPage/Signup";
function App() {

  return (
   
    <BrowserRouter>
    <Routes>
    
      <Route index element={<Homepage></Homepage>} />
      <Route path="/login" element={<Login></Login>} />
      <Route path="/signup" element={<Signup></Signup>} />
      <Route path="/dash" element={<Dashboard></Dashboard>} />
      <Route path="/talk" element={<GenAI></GenAI>}/>
    </Routes>
    </BrowserRouter>
   
  
  )
}

export default App
