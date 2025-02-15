import './About.css';
import pfp from '../../../assets/pfp.png';

const About = () => {
    return (
        <section id="about">
            <div className="about-container">
                <div className="about-left">
                    <img className="pfp" src={pfp} />
                </div>
                <div className="about-right">
                    <h1>About me</h1>
                    <p>Hi, I’m David, a junior web developer with a focus on crafting robust, functional, and visually striking websites that bring ideas to life. I specialize in building user-friendly applications using modern tools like <span className="highlighted">React, .NET Core</span> and <span className="highlighted">SQL</span> databases.</p>
                    <p>Currently, I’m expanding my skills in full-stack development and focusing on creating projects that showcase my abilities, such as an e-commerce site that integrates advanced features like cart management, authentication, and responsive design.</p>
                    <p>My goal is to grow as a developer by tackling challenging projects that make a real impact. When I’m not coding, I enjoy hiking, cycling, and woodworking.</p>
                </div>
            </div>
        </section>
    )
}

export default About;