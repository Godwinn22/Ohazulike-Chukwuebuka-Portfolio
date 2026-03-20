import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

const App = () => {
    return (
        <BrowserRouter>
            <Sidebar />
            <Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
			</Routes>
        </BrowserRouter>
    );
};

export default App;
