import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Footer } from "./components/footer/Footer";
import { Navbar } from "./components/navbar/Navbar";
import { ParticleBackground } from "./components/ParticleBackground";
import { Epic } from "./routes/Epic";
import { Home } from "./routes/Home";
import { ImageDay } from "./routes/ImageDay";
import { MarsRover } from "./routes/MarsRover";
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
        <Route path="mars-rover" element={<MarsRover />} />
        <Route path="epic" element={<Epic />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
