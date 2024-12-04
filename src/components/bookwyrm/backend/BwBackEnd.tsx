import './BwBackEnd.css';

const BwBackEnd = () => {
    return (
        <div className="bwbe-container">
            <h1>Back End</h1>
            <div className="bwbe-content">
                <h2 className="bwbe-h2">Robust Data Managment</h2>
                <p className="bwbe-p">Book Wyrm’s back end is built using <b>.NET Core</b>, ensuring high performance and scalability. The application relies on <b>Entity Framework</b> to manage database operations efficiently, providing seamless integration with SQL databases and enabling features like CRUD operations for books, bundles, user data and much more.</p>
            </div>
            <div className="bwbe-content">
                <h2 className="bwbe-h2">Secure Foundation</h2>
                <p className="bwbe-p">To secure the platform, I implemented <b>Identity Framework</b> for authentication and authorization. User authentication is managed via secure cookies, ensuring privacy and session integrity. Role-based authorization divides access into two distinct roles: User and Admin. Regular users can browse and purchase books, while admins have additional privileges to manage products, bundles, and the structure of the website.</p>
            </div>
        </div>
    );
};

export default BwBackEnd;