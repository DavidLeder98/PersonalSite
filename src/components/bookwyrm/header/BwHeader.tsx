import './BwHeader.css';
import bwimg from '../../../assets/bwlogo.png'

const BwHeader = () => {
    return (
        <div className="bwh-container">
            <h1>About the Project</h1>
            <div className="bwhc-mobie-img">
                <a
                    href="https://www.bookwyrm.store"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img src={bwimg} />
                </a>
            </div>
            <div className="bwh-content">
                <div className="bwhc-left">
                    <p><b>Name: </b>Book Wyrm</p>
                    <p><b>Resources: </b>.Net Core, React TS, Azure</p>
                    <p className="bwhcl-spacer">
                        <b>Live Project : </b>
                        <a
                            href="https://www.bookwyrm.store/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <span className="bwhc-blue">www.bookwyrm.store</span>
                        </a>
                    </p>
                    <p>
                        <b>Github</b>  - Back End:
                        <a
                            href="https://github.com/DavidLeder98/BookWyrmAPI2"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <span className="bwhc-blue"> github.com/DavidLeder98/ BookWyrmAPI2</span>
                        </a>
                    </p>
                    <p>
                        <b>Github </b>- Front End:
                        <a
                            href="https://github.com/DavidLeder98/BWFEvercel"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <span className="bwhc-blue"> github.com/DavidLeder98/ BWFEvercel</span>
                        </a>
                    </p>
                </div>
                <div className="bwhc-right">
                    <a
                        href="https://www.bookwyrm.store"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img src={bwimg} />
                    </a>
                </div>
            </div>
            <p><b>Description: </b>This website is a demo e-commerce platform I created to showcase my skills and abilities as a full-stack web developer. While the site is fully functional, it is not a real online store and does not support online payments.</p>
        </div>
    );
};

export default BwHeader;