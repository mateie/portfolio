import { BrowserRouter } from "react-router-dom";
import Sidebar from "./components/Sidebar";

const App = () => {
    return (
        <div className="flex">
            <BrowserRouter>
                <Sidebar />
                <div className="block"></div>
            </BrowserRouter>
        </div>
    );
};

export default App;
