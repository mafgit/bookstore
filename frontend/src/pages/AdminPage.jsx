import { FaBook, FaTicket, FaUser } from "react-icons/fa6";
import { Link } from "react-router-dom";
import "../styles/Admin.css";

const AdminPage = () => {
  return (
    <div className="admin-page">
      <Link to="/admin/users">
        <FaUser /> <h3>Users</h3>
      </Link>

      <Link to="/admin/books">
        <FaBook /> <h3>Books</h3>
      </Link>

      <Link to="/admin/orders">
        <FaTicket /> <h3>Orders</h3>
      </Link>
    </div>
  );
};

export default AdminPage;
