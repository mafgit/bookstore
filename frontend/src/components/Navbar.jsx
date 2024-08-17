import { FaCartShopping, FaFire, FaLock, FaUser } from "react-icons/fa6";

const Navbar = () => {
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
        <button>
          <FaLock />
        </button>
        <button>
          <FaUser />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
