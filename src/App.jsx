import { BrowserRouter as Router } from "react-router-dom";
import { Sidebar } from "./components";

const App = () => {
    return (
        <Router>
            <div className="md:flex h-screen bg-neutral-900 text-white relative">
                <Sidebar />
                <div className="flex flex-grow h-full justify-center overflow-y-auto overflow-x-hidden flex-wrap"></div>
            </div>
        </Router>
    );
};

export default App;
