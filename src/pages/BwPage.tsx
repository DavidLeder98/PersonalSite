import '../App.css';
import BwBackEnd from '../components/bookwyrm/backend/BwBackEnd';
import BwDeployment from '../components/bookwyrm/deployment/BwDeployment';
import BwFrontEnd from '../components/bookwyrm/frontend/BwFrontEnd';
import BwHeader from '../components/bookwyrm/header/BwHeader';
import BackSmall from '../components/buttons/backsmall/BackSmall';
import { useEffect } from 'react';

const BwPage = () => {
    
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);

    return (
        <div className="page">
            <BwHeader />
            <BwBackEnd />
            <BwFrontEnd />
            <BwDeployment />
            <BackSmall />
        </div>
    );
};

export default BwPage;