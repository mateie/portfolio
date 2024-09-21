import React from "react";
import Socials from "./socials.component";

const navLinks = [
    {
        name: "About",
        href: "#about",
    },
    {
        name: "Experience",
        href: "#experience",
    },
    {
        name: "Projects",
        href: "#projects",
    },
];

const Sidebar = () => {
    return (
        <header className="flex flex-col justify-around items-center sticky h-full w-96 shadow-2xl bg-neutral-700/10 border-r border-red-950">
            <div className="flex flex-col justify-center items-center gap-24">
                <div className="flex flex-col justify-center header">
                    <span className="text-4xl header__name">
                        Mate Machitidze
                    </span>
                    <span className="text-xl font-semibold text-neutral-300">
                        Software Developer
                    </span>
                </div>
                <nav>
                    <ul className="flex flex-col items-start gap-2 list-none">
                        {navLinks.map((link) => (
                            <li className="link" key={link.name}>
                                <a
                                    href={link.href}
                                    className="text-xl font-mono hover:underline text-neutral-300"
                                >
                                    {link.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
            <Socials />
        </header>
    );
};

export default Sidebar;
