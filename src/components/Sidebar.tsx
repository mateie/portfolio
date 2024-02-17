import Navigation from "./Navigation";

const Sidebar = () => {
    return (
        <div className="flex flex-col gap-20">
            <div className="header flex flex-col justify-center items-center gap-2 p-5">
                <div className="logo">
                    <img
                        src="https://via.placeholder.com/150"
                        alt="Placeholder"
                        className="rounded-full"
                    />
                </div>
                <div className="info flex flex-col items-center">
                    <div className="name">Mate Machitidze</div>
                    <div className="title">Full Stack Software Engineer</div>
                </div>
                <div className="resume">
                    <a
                        href="/resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <button className="bg-green-500 text-white p-2 pr-5 pl-5 rounded-md">
                            Resume
                        </button>
                    </a>
                </div>
            </div>
            <Navigation />
        </div>
    );
};

export default Sidebar;
