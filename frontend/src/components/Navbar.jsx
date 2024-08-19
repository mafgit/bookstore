import { useContext } from "react";
import { FaCartShopping, FaFire, FaLock, FaUser } from "react-icons/fa6";
import { AuthContext } from "../App";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = () => {
  const { loggedIn, isAdmin } = useContext(AuthContext);

  return (
    <nav className="navbar">
      <div className="left"></div>
      <Link to="/" className="mid">
        <FaFire className="fire" />
        <h3>Bookstore</h3>
      </Link>
      <div className="right">
        <Link className="link-btn" to="/cart">
          <FaCartShopping style={{ fontSize: "1.2em" }} />
        </Link>

        {loggedIn ? (
          <Link className="link-btn" to="/profile">
            <FaUser style={{ fontSize: "1.2em" }} />
          </Link>
        ) : (
          <Link className="link-btn login-btn" to="/login">
            Login
          </Link>
        )}

        {isAdmin && (
          <Link className="link-btn" to="/admin">
            <FaLock style={{ fontSize: "1.2em" }} />
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
