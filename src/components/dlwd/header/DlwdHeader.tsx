import './DlwdHeader.css';
import dlwdimg from '../../../assets/dlwd.png';

const DlwdHeader = () => {
    return (
        <div className="dlwd-container">
            <h1>About the Project</h1>
            <div className="dc-content">
                <div className="dcc-left">
                    <p><b>Name: </b>David Leder - Web Developer</p>
                    <p><b>Resources Used: </b>React, Vercel</p>
                    <p>
                        <b>URL: </b>
                        <a
                            href="https://www.lederdavid.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <span className="dcc-blue">www.lederdavid.com</span>
                        </a>
                    </p>
                    <p>
                        <b>GitHub Repository: </b>
                        <a
                            href="https://www.lederdavid.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <span className="dcc-blue">placeholder</span>
                        </a>
                    </p>
                </div>
                <div className="dcc-right">
                    <img src={dlwdimg} />
                </div>
            </div>
            <p><b>Description: </b>A humble static website I built using React and published via Vercel. It serves as my publicly accessible resume. On it, you’ll find the projects I’m working on, along with insights and reflections on the challenges and lessons I encounter while building them. </p>
        </div>
    );
};

export default DlwdHeader;