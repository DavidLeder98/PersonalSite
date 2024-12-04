import './BackSmall.css';
import arrowleft from '../../../assets/arrow-left.png';
import { Link } from 'react-router-dom';

const BackSmall = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'auto' });
    };

    return (
        <div className="btn-back-small">
            <Link onClick={scrollToTop} to="/">
                <img className="bbs-img" src={arrowleft} />
                <span className="bbs-txt">Back to Home</span>
            </Link>
        </div>
    );
};

export default BackSmall;