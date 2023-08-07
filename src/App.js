import Slide from "./components/Slide";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ColormodeSwitcher from "./components/ColormodeSwitcher";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import Program from "./components/Program";
function App() {
  return (
    <BrowserRouter>
      <Slide />
      <ColormodeSwitcher/>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Gallery" element={<Gallery />} />
      <Route path="/Program" element={<Program />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
