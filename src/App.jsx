import { Sidebar } from "./components";

const App = () => {
    return (
        <div className="flex h-screen justify-center items-center bg-neutral-900 text-white relative">
            <Sidebar />
            <div className="flex flex-grow h-full justify-center overflow-y-auto overflow-x-hidden flex-wrap"></div>
        </div>
    );
};

export default App;
