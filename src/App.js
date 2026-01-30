import React, { useState, useEffect } from "react";
import Navbar from "./components/navbar";
import Home from "./components/home";
import About from "./components/about";
import FAQ from "./components/faq";
import Donate from "./components/donate";

function App() {
  const [darkNav, setDarkNav] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const about = document.getElementById("about");
      const donate = document.getElementById("donate");

      if (!about || !donate) return;

      const scrollY = window.scrollY + 80;

      if (scrollY >= about.offsetTop && scrollY < donate.offsetTop + donate.offsetHeight) {
        setDarkNav(true);   // About, FAQ, Donate → black links
      } else {
        setDarkNav(false);  // Home → white links
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Navbar dark={darkNav} />
      <Home />
      <About />
      <FAQ />
      <Donate />
    </>
  );
}

export default App;
