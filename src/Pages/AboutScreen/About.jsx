import React from 'react';
import css from "./About.module.css";
import JakeImage from "../../Images/jakebravo.png";

const About = () => {
    return (
        <div className={css.AboutPage}>
            <div className={css.ParallaxSection}>
                <h1>About Me</h1>
            </div>

            <div className={css.ContentSection}>
                <div className={css.Bio}>
                    <h2>Who is Jake Bravo?</h2>
                    <p>
                        I'm a passionate software developer with a background in Computer Science and Mathematics. My journey began in campus, where I built my first startup using HELB funds to serve fellow students with affordable printing solutions.
                    </p>
                    <p>
                        Over the years, I've evolved into a full-stack web and mobile developer, leveraging the MERN stack and Flutter to build products that solve real-world problems.
                    </p>
                    <p>
                        My recent social e-commerce app helps users group buy and share costs—showcasing my focus on local empowerment and economic innovation.
                    </p>
                    <p>
                        Whether it’s automating tasks with Python, integrating Firebase, or deploying scalable APIs, I strive to make technology accessible and impactful.
                    </p>
                </div>

                <div className={css.ImageContainer}>
                    <img src={JakeImage} alt="Jake Bravo" />
                </div>
            </div>

            {/* Extra space to enable scrolling */}
            <div className={css.ScrollSpacer}>
                <h1>Technical Skills</h1>
            </div>
            <div className={css.TechnicalSkills}>
                <div className={css.SkillsGrid}>
                    <div>
                        <h4>Languages</h4>
                        <ul>
                            <li>Python</li>
                            <li>Dart</li>
                            <li>JavaScript</li>
                            <li>HTML5</li>
                            <li>CSS3</li>
                        </ul>
                    </div>
                    <div>
                        <h4>Frameworks & Libraries</h4>
                        <ul>
                            <li>Flutter</li>
                            <li>Riverpod</li>
                            <li>Node.js</li>
                            <li>React.js</li>
                        </ul>
                    </div>
                    <div>
                        <h4>Databases</h4>
                        <ul>
                            <li>Firebase</li>
                            <li>MongoDB</li>
                        </ul>
                    </div>
                    <div>
                        <h4>CI/CD Tools</h4>
                        <ul>
                            <li>GitLab</li>
                        </ul>
                    </div>
                    <div>
                        <h4>Version Control</h4>
                        <ul>
                            <li>Git</li>
                            <li>GitHub</li>
                        </ul>
                    </div>
                    <div>
                        <h4>Other Tools</h4>
                        <ul>
                            <li>Visual Studio Code</li>
                            <li>Figma</li>
                            <li>Postman</li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default About;
