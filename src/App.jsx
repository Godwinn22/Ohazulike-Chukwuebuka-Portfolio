import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom"
import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import Projects from "./pages/Projects";
import ProjectDetails from "./pages/ProjectDetails";
import Experience from "./pages/Experience";
import TechStack from "./pages/TechStack";
import NotFound from "./pages/NotFound";

const AppContent = ({ isDark, toggleTheme }) => {
  const location = useLocation()

  return (
    <>
      <Sidebar />
      <Navbar isDark={isDark} toggleTheme={toggleTheme} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:slug" element={<ProjectDetails />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/techstack" element={<TechStack />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      {/* 
        key={location.pathname} forces ContactForm and Footer
        to remount every time the route changes — 
        this resets their animations 
      */}
      <ContactForm key={"contact-" + location.pathname} />
      <Footer key={"footer-" + location.pathname} />
    </>
  )
}

const App = () => {
  const [isDark, setIsDark] = useState(true)

  const toggleTheme = () => {
    setIsDark((prev) => {
      if (prev) {
        document.body.classList.add("light")
      } else {
        document.body.classList.remove("light")
      }
      return !prev
    })
  }

  return (
    <BrowserRouter>
      <AppContent isDark={isDark} toggleTheme={toggleTheme} />
    </BrowserRouter>
  )
}

export default App