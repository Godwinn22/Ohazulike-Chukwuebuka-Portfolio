import { BrowserRouter } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";

const App = () => {
    return (
        <BrowserRouter>
            <Sidebar />
            <Navbar />
        </BrowserRouter>
    );
};

export default App;
