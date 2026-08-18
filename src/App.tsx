// src/App.tsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Advertising from "./pages/Advertising";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/advertising" element={<Advertising/>}/>
      </Routes>
    </BrowserRouter>
  );
}