import Slide from "./components/Slide";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ColormodeSwitcher from "./components/ColormodeSwitcher";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
function App() {
  return (
    <BrowserRouter>
      <Slide />
      <ColormodeSwitcher/>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Gallery" element={<Gallery />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
