import { useContext } from "react";
import { FaCartShopping, FaFire, FaLock, FaUser } from "react-icons/fa6";
import { AuthContext } from "../App";

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
        <button>
          <FaCartShopping />
        </button>
        {isAdmin && (
          <button>
            <FaLock />
          </button>
        )}
        {loggedIn ? (
          <button>
            <FaUser />
          </button>
        ) : (
          <button>Login</button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
