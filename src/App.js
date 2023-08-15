import Slide from "./components/Slide";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ColormodeSwitcher from "./components/ColormodeSwitcher";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import Program from "./components/Program";
import Contact from "./components/Contact";
import Franchise from "./components/Franchise";
function App() {
  return (
    <BrowserRouter>
      <Slide />
      <ColormodeSwitcher/>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Gallery" element={<Gallery />} />
      <Route path="/Program" element={<Program />} />
      <Route path="/Contact" element={<Contact />} />
      <Route path="/Franchise" element={<Franchise />} />
       </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
