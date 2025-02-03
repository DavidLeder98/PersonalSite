import './NavSmall.css';
import burger from '../../../assets/burger.png';
import { useLocation, useNavigate } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';

const NavSmall = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [menuOpen, setMenuOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);

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

        setMenuOpen(false);
    };

    const toggleMenu = () => {
        setMenuOpen((prev) => !prev);
    };
    
    const handleClickOutside = (event: MouseEvent) => {
        if (
            menuRef.current &&
            !menuRef.current.contains(event.target as Node) &&
            !(event.target as HTMLElement).closest('.nsc-burger') // Allow clicking the burger icon to toggle
        ) {
            setMenuOpen(false);
        }
    };
    
    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);
    
    return (
        <div className="nav-small">
            <div className="ns-content">
                <div className="nsc-burger" onClick={toggleMenu}>
                    <img src={burger} alt="Menu" />
                </div>
                <div className="nsc-logo" onClick={handleLogoClick}>
                    <h2>David Leder</h2>
                    <h3>[ Web Developer ]</h3>
                </div>
            </div>
            <div ref={menuRef} className={`ns-menu ${menuOpen ? 'open' : 'closed'}`}>
                <ul className="ns-ul">
                    <li className="ns-li" onClick={() => handleScrollToSection('about')}>About</li>
                    <li className="ns-li" onClick={() => handleScrollToSection('projects')}>Projects</li>
                    <li className="ns-li" onClick={() => handleScrollToSection('tech-stack')}>Tech Stack</li>
                    <li className="ns-li" onClick={() => handleScrollToSection('education')}>Education</li>
                    <li className="ns-li" onClick={() => handleScrollToSection('contact')}>Contact</li>
                </ul>
            </div>
        </div>
    );
};

export default NavSmall;