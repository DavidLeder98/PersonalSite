import '../App.css';
import BackSmall from '../components/buttons/backsmall/BackSmall';
import DlwdHeader from '../components/dlwd/header/DlwdHeader';

const DlwdPage = () => {
    return (
        <div className="page">
            <DlwdHeader />
            <BackSmall />
        </div>
    );
};

export default DlwdPage;