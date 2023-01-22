import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Footer } from "./components/footer/Footer";
import { Navbar } from "./components/navbar/Navbar";
import { ParticleBackground } from "./components/ParticleBackground";
import { Epic } from "./routes/Epic";
import { Home } from "./routes/Home";
import { ImageDay } from "./routes/ImageDay";
import { Jwst } from "./routes/Jwst";
import { NoMatch } from "./routes/NoMatch";

function App() {
  return (
    <div className="App ">
      <ParticleBackground />
      <Navbar />
      {/* </Route> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="imageday" element={<ImageDay />} />
        <Route path="jwst" element={<Jwst />} />
        <Route path="epic" element={<Epic />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
