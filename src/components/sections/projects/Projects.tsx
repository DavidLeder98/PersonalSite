import './Projects.css';
import bwlogo from '../../../assets/bwlogo.png';
import dlwd from '../../../assets/dlwd.png';
import { Link } from 'react-router-dom';

const Projects = () => {

    return (
        <section id="projects">
            <div className="projects-container">
                <h1>Deployed Projects</h1>
                <div className="projects-list">
                    <div className="project-li">
                        <Link className="proj-logo-cont" to="/bookwyrm">
                            <img className="project-logo" src={bwlogo} />
                        </Link>
                        <div className="proj-desc">
                            <h2>Book Wyrm</h2>
                            <p>I built this e-commerce books store as a demo-project to showcase my skills and abilities as a developer. It handles cart managment, user authentication, user tracking and much, more! Except actual purchases.</p>
                            <p>Main features:</p>
                            <ul>
                                <li><span className="underlined">Entity Framework</span></li>
                                <li><span className="underlined">Identity Framework</span> (cookies)</li>
                                <li>a <span className="underlined">TypeScript</span> front end</li>
                            </ul>
                            <p>Click <Link className="here-link" to="/bookwyrm">here</Link> to find out more.</p>
                        </div>
                    </div>
                    <div className="project-li">
                        <Link className="proj-logo-cont" to="/dlwd">
                            <img className="project-logo" src={dlwd} />
                        </Link>
                        <div className="proj-desc">
                            <h2>DLWD</h2>
                            <p>This is my personal website. I built it to share my skills, abilities, and projects with potential employers. It’s designed to be simple, modern, and easy to navigate, giving visitors a clear look at my journey and what I can bring to the table as a web developer.</p>
                            <p>Click <Link className="here-link" to="/dlwd">here</Link> to find out more.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Projects;