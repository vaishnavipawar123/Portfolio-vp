import React from "react";
import Header from "./components/Header";
import MainPage from "./components/MainPage";
import About from "./components/About";
import Footer from "./components/Footer";
import Projects from "./components/Projects";
import Contact from "./components/Contact"
import Extra from "./components/extra";

function App() {
  return (
    <div>
      {/* Header Component */}
      <Header />

      {/* Main Content Section */}
      <main className="main-content">
        <MainPage />
        <About />
        <Projects />
        <Extra />
        <Contact/>
        {/* Add additional sections here */}
      </main>
      <Footer /> {/* Use the Footer component here */}
    </div>
    
  );
}

export default App;
