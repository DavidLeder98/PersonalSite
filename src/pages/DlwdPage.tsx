import '../App.css';
import BackSmall from '../components/buttons/backsmall/BackSmall';
import DlwdHeader from '../components/dlwd/header/DlwdHeader';
import { useEffect } from 'react';

const DlwdPage = () => {

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);


    return (
        <div className="page">
            <DlwdHeader />
            <BackSmall />
        </div>
    );
};

export default DlwdPage;