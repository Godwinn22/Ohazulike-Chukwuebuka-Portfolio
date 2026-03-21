import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import { Contact } from "lucide-react";

const App = () => {
    return (
        <BrowserRouter>
            <Sidebar />
            <Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
			</Routes>
			<ContactForm />
            <Footer />
        </BrowserRouter>
    );
};

export default App;
