import { useContext, useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Footer } from "./components/footer/Footer";
import { Hero } from "./components/hero/Hero";
import { NasaImg } from "./components/nasaImg/NasaImg";
import { Navbar } from "./components/navbar/Navbar";
import { Epic } from "./routes/Epic";
import { Home } from "./routes/Home";
import { ImageDay } from "./routes/ImageDay";
import { MarsRover } from "./routes/MarsRover";
import { NoMatch } from "./routes/NoMatch";

function App() {
  return (
    <div className="App dark:bg-zinc-900">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="imageday" element={<ImageDay />} />
        <Route path="marsrover" element={<MarsRover />} />
        <Route path="epic" element={<Epic />} />
        <Route path="*" element={<NoMatch />} />
        {/* </Route> */}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
