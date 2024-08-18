import { useContext } from "react";
import { FaCartShopping, FaFire, FaLock, FaUser } from "react-icons/fa6";
import { AuthContext } from "../App";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { loggedIn, isAdmin } = useContext(AuthContext);

  return (
    <nav className="navbar">
      <div className="left"></div>
      <div className="mid">
        <FaFire />
        <h3>Bookstore</h3>
      </div>
      <div className="right">
        <Link to="/cart">
          <FaCartShopping />
        </Link>

        {isAdmin && (
          <Link to="/admin">
            <FaLock />
          </Link>
        )}
        {loggedIn ? (
          <Link to="/profile">
            <FaUser />
          </Link>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
