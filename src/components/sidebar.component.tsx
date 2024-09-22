import React from "react";
import Socials from "./socials.component";
import classNames from "classnames";
import { useLocation } from "react-router-dom";
import { useMediaQuery } from "usehooks-ts";

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

const SidebarMobile = () => {
    return (
        <header className="flex justify-around flex-col items-center w-full p-8 shadow-2xl bg-neutral-700/10 border-b border-red-950">
            <div className="flex flex-col justify-center items-center md:gap-0 gap-2">
                <div className="flex flex-col justify-center items-center header">
                    <span className="header__name">Mate Machitidze</span>
                    <span className="font-semibold text-neutral-300">
                        Software Developer
                    </span>
                </div>
                <nav>
                    <ul className="flex ml-9 items-center justify-center gap-2 list-none">
                        {navLinks.map((link, i) => (
                            <li
                                className="link flex items-center justify-center gap-2"
                                key={link.name}
                            >
                                {i !== 0 && <div className="vertical_line" />}
                                <a
                                    href={link.href}
                                    className={classNames(
                                        "text-lg font-mono hover:underline text-neutral-300",
                                        {
                                            underline:
                                                location.hash === link.href,
                                        }
                                    )}
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

const Sidebar = () => {
    const location = useLocation();
    const mobile = useMediaQuery("(max-width: 768px)");

    if (mobile) return <SidebarMobile />;

    return (
        <header className="flex flex-col justify-around items-center sticky h-full p-8 shadow-2xl bg-neutral-700/10 border-r border-red-950">
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
                                    className={classNames(
                                        "text-xl font-mono hover:underline text-neutral-300",
                                        {
                                            underline:
                                                location.hash === link.href,
                                        }
                                    )}
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
