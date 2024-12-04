import './BwFrontEnd.css';
import bwadmin from '../../../assets/bw.png';

const BwFrontEnd = () => {
    return (
        <div className="bwfe-container">
            <h1>Front End</h1>
            <div className="bwfe-content">
                <h2 className="bwfe-h2">Connection to the Back End</h2>
                <p className="bwbf-p">The front end of Book Wyrm is built with <b>React</b> and <b>TypeScript</b>, delivering a dynamic and strongly typed user experience. For communication with the back end, <b>Axios</b> is used to handle API requests efficiently, enabling smooth data fetching and updates across the application.</p>
            </div>
            <div className="bwfe-content">
                <h2 className="bwfe-h2">User Friendly Interface</h2>
                <p className="bwfe-p">A key feature of the platform is its guest user tracking, which allows visitors to interact with the site without needing to log in. Guest users can browse the catalog, add items to their cart, and maintain their selections throughout their session. The <b>add-to-cart functionality</b> ensures a seamless shopping experience, persisting data locally for guests and syncing with the database for logged-in users. This flexibility creates a user-friendly environment for all visitors.</p>
            </div>
            <div className="bwfe-content">
                <h2 className="bwfe-h2">Admin Panel</h2>
                <p className="bwfe-p">The admin panel in Book Wyrm is designed to give users with the "Admin" role full control over the platform's content. Admins can perform <b>CRUD</b> (<b>Create</b>, <b>Read</b>, <b>Update</b>, <b>Delete</b>) operations on books, authors, categories, and bundles. This enables them to easily manage the catalog, keep the inventory organized, and curate bundle offers to enhance the shopping experience. With an intuitive interface, the admin panel streamlines content management, ensuring the platform remains dynamic and up-to-date.</p>
            </div>
            <img src={bwadmin} />
        </div>
    );
};

export default BwFrontEnd;