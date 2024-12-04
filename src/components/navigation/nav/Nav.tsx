import './Nav.css';
import NavLarge from '../navlarge/NavLarge';
import NavSmall from '../navsmall/NavSmall';
import { useState, useEffect } from 'react';

const Nav = () => {
    const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth > 1200);

    useEffect(() => {
        const handleResize = () => {
            setIsLargeScreen(window.innerWidth > 1200);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className="nav-container">
            {isLargeScreen ? <NavLarge /> : <NavSmall />}
        </div>
    );
};


export default Nav;