import { FaUser } from "react-icons/fa6";
import Order from "../components/Order";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../App";
import axios from "axios";

const ProfilePage = () => {
  const { email, name, id } = useContext(AuthContext);
  const [orders, setOrders] = useState([]);

  useEffect(async () => {
    axios
      .get("http://localhost:5000/get_orders/" + id)
      .then((data) => {
        setOrders(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

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
