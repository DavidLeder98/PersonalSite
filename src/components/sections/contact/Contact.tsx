import './Contact.css';
import mailicon from '../../../assets/mail.png';
import linkedin from '../../../assets/linkedin.png';
import phone from '../../../assets/phone.png';
import github from '../../../assets/github.png';

const Contact = () => {
    return (
        <section id="contact">
            <div className="contact-container">
                <h1>Contact & Info</h1>
                <div className="contact-content">
                    <div className="cc-left">
                        <h2>Contact</h2>
                        <ul className="cc-ul">
                            <li className="cc-li"><img src={phone} className="cc-icon" />Tel : +381 60 151 8552</li>
                            <li className="cc-li"><img src={mailicon} className="cc-icon" />david.leder.dev@gmail.com</li>
                            <li className="cc-li">
                                <a
                                    href="https://www.linkedin.com/in/david-leder/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <img src={linkedin} className="cc-icon" />LinkedIn
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="cc-right">
                        <h2>Other information</h2>
                        <p className="cc-li">
                            <a
                                href="https://github.com/DavidLeder98/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img src={github} className="cc-icon git-icon" />My Github Page
                            </a>
                        </p>
                        <p className="cc-li">Check out my GitHub page to explore my coding journey, view projects, and dive into code repositories showcasing my skills in React, TypeScript, .NET Core, and more. Feel free to leave notes as well</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;