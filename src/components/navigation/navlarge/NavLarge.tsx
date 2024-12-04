import { useLocation, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './NavLarge.css';

const NavLarge = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 80) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleLogoClick = () => {
        if (location.pathname === '/') {
            if (window.scrollY === 0) {
                window.location.reload();
            } else {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        } else {
            navigate('/');
        }
    };

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
        <div className={`nav-large ${isScrolled ? 'scrolled' : ''}`}>
            <div className="nl-content">
                <div className="nlc-logo" onClick={handleLogoClick}>
                    <h1 className={`nlc-name ${isScrolled ? 'scrolled' : ''}`}>David Leder</h1>
                    <h2 className={`nlc-profession ${isScrolled ? 'scrolled' : ''}`}>[ Web Developer ]</h2>
                </div>
                <ul className="nlc-items">
                    <li className="nlc-item" onClick={() => handleScrollToSection('about')}>About</li>
                    <li className="nlc-item" onClick={() => handleScrollToSection('projects')}>Projects</li>
                    <li className="nlc-item" onClick={() => handleScrollToSection('tech-stack')}>Tech Stack</li>
                    <li className="nlc-item" onClick={() => handleScrollToSection('education')}>Education</li>
                    <li className="nlc-item" onClick={() => handleScrollToSection('contact')}>Contact</li>
                </ul>
            </div>
        </div>
    );
};

export default NavLarge;