import { useState } from "react";
import NavigationBar from "./components/NavigationBar";
import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const switchTheme = () => {
    setDarkMode(!darkMode);
  }
  return (
    <div className={`${darkMode && "dark"} relative h-screen w-full font-inter`}>
      <NavigationBar switchTheme={switchTheme}/>
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
