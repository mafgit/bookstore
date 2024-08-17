import { FaUser } from "react-icons/fa6";
import Order from "../components/Order";

const ProfilePage = ({ name, email, orders }) => {
  return (
    <div className="profile-page">
      <div className="account">
        <FaUser />
        <p>Name: {name}</p>
        <p>Email: {email}</p>
        <button>Logout</button>
      </div>

      <div className="orders">
        {orders.map((order) => (
          <Order />
        ))}
      </div>
    </div>
  );
};

export default ProfilePage;
