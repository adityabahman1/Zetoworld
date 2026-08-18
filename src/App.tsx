// src/App.tsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Advertising from "./pages/Advertising";
import Contact from "./pages/Contact"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/advertising" element={<Advertising/>}/>
        <Route path="/contact" element={<Contact/>}/>
        
      </Routes>
    </BrowserRouter>
  );
}