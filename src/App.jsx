import { useContext, useEffect, useState } from "react";
import "./App.css";
import { Footer } from "./components/footer/Footer";
import { Hero } from "./components/hero/Hero";
import { NasaImg } from "./components/nasaImg/NasaImg";
import { Navbar } from "./components/navbar/Navbar";

function App() {
  return (
    <div className="App dark:bg-zinc-900">
      <Navbar />
      <NasaImg />
      {/* <Hero /> */}
      <Footer />
    </div>
  );
}

export default App;
