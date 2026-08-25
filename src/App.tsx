// src/App.tsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Advertising from "./pages/Advertising";
import Contact from "./pages/Contact";
import Foco from "./pages/Foco";
import Fofo from "./pages/Fofo";
import Battery from "./pages/Battery";
import PrivacyPolicy from "./components/Privacypolicy";
import TermsAndConditions from "./components/Termsandconditions";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/advertising" element={<Advertising />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/foco" element={<Foco />} />
        <Route path="/fofo" element={<Fofo />} />
        <Route path="/battery" element={<Battery />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-conditons" element={<TermsAndConditions />} />
      </Routes>
    </BrowserRouter>
  );
}