import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Socials = () => {
    return (
        <div className="flex justify-center items-center p-4">
            <a
                href="https://github.com/mateie"
                target="_blank"
                rel="noreferrer noopener"
            >
                <FaGithub className="text-2xl mx-2" />
            </a>
            <a
                href="https://www.linkedin.com/in/mate-machitidze/"
                target="_blank"
                rel="noreferrer noopener"
            >
                <FaLinkedin className="text-2xl mx-2" />
            </a>
        </div>
    );
};

export default Socials;
