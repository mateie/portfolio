import { Link } from "react-router-dom";

const links = [
    {
        name: "About",
        url: "/about",
    },
    {
        name: "Experience",
        url: "/experience",
    },
    {
        name: "Projects",
        url: "/projects",
    },
    {
        name: "Contact",
        url: "/contact",
    },
];

const Navigation = () => {
    return (
        <nav className="flex flex-col justify-center items-center gap-2">
            {links.map((link) => (
                <Link to={link.url} key={link.name} className="text-2xl">
                    {link.name}
                </Link>
            ))}
        </nav>
    );
};

export default Navigation;
