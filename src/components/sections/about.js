import React, { useEffect, useRef } from "react";
import { StaticImage } from "gatsby-plugin-image";
import styled from "styled-components";
import { srConfig } from "@config";
import sr from "@utils/sr";
import { usePrefersReducedMotion } from "@hooks";

const StyledAboutSection = styled.section`
    max-width: 900px;

    .inner {
        display: grid;
        grid-template-columns: 3fr 2fr;
        grid-gap: 50px;

        @media (max-width: 768px) {
            display: block;
        }
    }
`;
const StyledText = styled.div`
    ul.skills-list {
        display: grid;
        grid-template-columns: repeat(2, minmax(140px, 200px));
        grid-gap: 0 10px;
        padding: 0;
        margin: 20px 0 0 0;
        overflow: hidden;
        list-style: none;

        li {
            position: relative;
            margin-bottom: 10px;
            padding-left: 20px;
            font-family: var(--font-mono);
            font-size: var(--fz-xs);

            &:before {
                content: "▹";
                position: absolute;
                left: 0;
                color: var(--green);
                font-size: var(--fz-sm);
                line-height: 12px;
            }
        }
    }
`;
const StyledPic = styled.div`
    position: relative;
    max-width: 300px;

    @media (max-width: 768px) {
        margin: 50px auto 0;
        width: 70%;
    }

    .wrapper {
        ${({ theme }) => theme.mixins.boxShadow};
        display: block;
        position: relative;
        width: 100%;
        border-radius: var(--border-radius);
        background-color: var(--green);

        &:hover,
        &:focus {
            outline: 0;

            &:after {
                top: 15px;
                left: 15px;
            }

            .img {
                filter: none;
                mix-blend-mode: normal;
            }
        }

        .img {
            position: relative;
            border-radius: var(--border-radius);
            mix-blend-mode: multiply;
            filter: grayscale(100%) contrast(1);
            transition: var(--transition);
        }

        &:before,
        &:after {
            content: "";
            display: block;
            position: absolute;
            width: 100%;
            height: 100%;
            border-radius: var(--border-radius);
            transition: var(--transition);
        }

        &:before {
            top: 0;
            left: 0;
            background-color: var(--navy);
            mix-blend-mode: screen;
        }

        &:after {
            border: 2px solid var(--green);
            top: 20px;
            left: 20px;
            z-index: -1;
        }
    }
`;

const About = () => {
    const revealContainer = useRef(null);
    const prefersReducedMotion = usePrefersReducedMotion();

    useEffect(() => {
        if (prefersReducedMotion) {
            return;
        }

        sr.reveal(revealContainer.current, srConfig());
    }, []);

    const skills = [
        "TypeScript",
        "JavaScript (ES6)",
        "React",
        "Node.js",
        "GraphQL",
        "MongoDB",
    ];

    return (
        <StyledAboutSection id="about" ref={revealContainer}>
            <h2 className="numbered-heading">About Me</h2>

            <div className="inner">
                <StyledText>
                    <div>
                        <p>
                            Hi! My name is Mate and I like to build websites and
                            apps. When I was young kid I was interesting in web
                            development, because I wanted to make a website for
                            my Minecraft server. Trying to make a website for it
                            taught me quite a bit of HTML &amp; CSS.
                        </p>

                        <p>
                            In past 5 years, I had privilege to work on a lot of
                            different projects, from small websites to big
                            enterprise applications and also at the same time I
                            was learning a lot of new technologies. I am always
                            trying to learn new things and improve my skills. I
                            have worked for{" "}
                            <a
                                href="https://smcnational.com"
                                target="_blank"
                                rel="noreferrer noopener"
                            >
                                dental marketing
                            </a>
                            ; which helped companies to track their leads with
                            their customers, <a>a social media app</a>; which
                            unfortunately disbanded and{" "}
                            <a
                                href="https://pinecreekcarecenter.com"
                                target="_blank"
                                rel="noreferrer noopener"
                            >
                                a nursing home
                            </a>
                            ; which helped people to retire, and be assisted if
                            they need assistance.
                        </p>

                        <p>
                            Here are a few technologies I’ve been working with
                            recently:
                        </p>
                    </div>

                    <ul className="skills-list">
                        {skills &&
                            skills.map((skill, i) => <li key={i}>{skill}</li>)}
                    </ul>
                </StyledText>

                <StyledPic>
                    <div className="wrapper">
                        <StaticImage
                            className="img"
                            src="../../images/me.jpg"
                            width={500}
                            quality={95}
                            formats={["AUTO", "WEBP", "AVIF"]}
                            alt="Headshot"
                        />
                    </div>
                </StyledPic>
            </div>
        </StyledAboutSection>
    );
};

export default About;
