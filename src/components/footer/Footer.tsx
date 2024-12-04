import './Footer.css';
import mailicon from '../../assets/mail.png';
import linkedin from '../../assets/linkedin.png';
import phone from '../../assets/phone.png';
import github from '../../assets/github.png';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Footer = () => {
    const currentYear = new Date().getFullYear();
    const navigate = useNavigate();
    const location = useLocation();

    const handleScrollToSection = (sectionId: string) => {
        const navigateAndScroll = () => {
            const section = document.getElementById(sectionId);
            if (section) {
                section.scrollIntoView({ behavior: 'smooth' });
            }
        };

        if (location.pathname !== '/') {
            navigate('/');
            setTimeout(navigateAndScroll, 300);
        } else {
            navigateAndScroll();
        }
    };

    return (
        <div className="footer-container">
            <div className="footer-content">
                <div className="footer-section">
                    <h4 className="hs-h5">Ownership</h4>
                    <ul className="footer-ul">
                        <li className="footer-li">Copyright &copy; {currentYear} David Leder</li>
                        <li className="footer-li">All rights reserved</li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h4 className="hs-h5">Contact & Info</h4>
                    <ul className="footer-ul">
                        <li className="footer-li"><img src={phone} className="fli-icon" />Tel : +381 60 151 8552</li>
                        <li className="footer-li"><img src={mailicon} className="fli-icon" />david.leder.dev@gmail.com</li>
                        <li className="footer-li">
                            <a
                                href="https://www.linkedin.com/in/david-leder/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img src={linkedin} className="fli-icon" />LinkedIn
                            </a>
                        </li>
                        <li className="footer-li">
                            <a
                                href="https://github.com/DavidLeder98/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img src={github} className="fli-icon git-icon" />Github
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h4 className="hs-h5">Completed Projects</h4>
                    <ul className="footer-ul">
                        <li className="footer-li  f-link">
                            <Link to="/bookwyrm">Book Wyrm</Link>
                        </li>
                        <li className="footer-li  f-link">
                            <Link to="/dlwd">DLWD</Link>
                        </li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h4 className="hs-h5">Sections</h4>
                    <ul className="footer-ul">
                        <li className="footer-li"><span className="frd" onClick={() => handleScrollToSection('about')}>About</span></li>
                        <li className="footer-li"><span className="frd" onClick={() => handleScrollToSection('about')}>Projects</span></li>
                        <li className="footer-li"><span className="frd" onClick={() => handleScrollToSection('tech-stack')}>Tech Stack</span></li>
                        <li className="footer-li"><span className="frd" onClick={() => handleScrollToSection('education')}>Education</span></li>
                        <li className="footer-li"><span className="frd" onClick={() => handleScrollToSection('contact')}>Contact</span></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Footer;