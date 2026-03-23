import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import Projects from "./pages/Projects";
import ProjectDetails from "./pages/projectDetails";
import Experience from "./pages/Experience";
import TechStack from "./pages/TechStack";

const App = () => {
    // we default to dark mode
    const [isDark, setIsDark] = useState(true);

    const toggleTheme = () => {
        setIsDark((prev) => {
            if (prev) {
                // If currently dark, switching to light
                // Add "light" class to body
                document.body.classList.add("light");
            } else {
                // If currently light, switching to dark
                // Remove "light" class from body
                document.body.classList.remove("light");
            }
            return !prev;
        });
    };
    return (
        <BrowserRouter>
            <Sidebar />
            <Navbar isDark={isDark} toggleTheme={toggleTheme} />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/projects/:slug" element={<ProjectDetails />} />
                <Route path="/experience" element={<Experience />} />
                <Route path="/techstack" element={<TechStack />} />
            </Routes>
            <ContactForm />
            <Footer />
        </BrowserRouter>
    );
};

export default App;
