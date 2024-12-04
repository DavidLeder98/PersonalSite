import './BwDeployment.css';

const BwDeployment = () => {
    return (
        <div className="bwd-container">
            <h1>Deployment</h1>
            <div className="bwd-content">
                <h2 className="bwd-h2">Seamless and Professional Hosting</h2>
                <p className="bwd-p">Book Wyrm is deployed with a focus on reliability and accessibility. The back-end API is hosted on <b>Azure</b>, providing a secure and scalable environment for handling requests and managing data. The front end is deployed via <b>Vercel</b>, ensuring fast load times and efficient delivery of static assets. To give the platform a polished, professional feel, a <b>custom DNS</b> is configured, allowing users to access the site through a personalized domain. This deployment strategy ensures a seamless experience for both visitors and administrators.</p>
            </div>
            <div className="bwd-content">
                <h2 className="bwd-h2">What I've Learned</h2>
                <p className="bwd-p">Building Book Wyrm has been an invaluable learning experience. I gained a deeper understanding of integrating front-end and back-end technologies, securing user data with authentication and authorization, and implementing efficient state management. Deploying the app taught me how to handle challenges like cross-origin requests and DNS configuration. This project sharpened my problem-solving skills and reinforced the importance of scalability, security, and user-centric design in web development.</p>
            </div>
        </div>
    );
};

export default BwDeployment;