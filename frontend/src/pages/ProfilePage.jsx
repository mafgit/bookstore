import { FaUser } from "react-icons/fa6";
import Order from "../components/Order";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../App";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ProfilePage = () => {
  const {
    email,
    name,
    id,
    setLoggedIn,
    setUserName,
    setUserEmail,
    setId,
    setIsAdmin,
  } = useContext(AuthContext);
  const [orders, setOrders] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://127.0.0.1:5000/api/orders/get_orders/" + id, {
        withCredentials: true,
      })
      .then((res) => {
        setOrders(res.data.orders);
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
        <button
          onClick={() => {
            axios
              .get("http://127.0.0.1:5000/api/auth/logout", {
                withCredentials: true,
              })
              .then((res) => {
                setLoggedIn(false);
                setUserName("");
                setUserEmail("");
                setId("");
                setIsAdmin(false);
              })
              .catch((err) => {
                console.log(err);
              });

            navigate("/");
          }}
        >
          Logout
        </button>
      </div>

      <div className="orders">
        {orders.map((order) => (
          <Order
            amount={order.amount}
            books={order.books}
            createdAt={order.createdAt}
            id={order._id}
            key={order._id}
            status={order.status}
            updatedAt={order.updatedAt}
            user={order.user}
          />
        ))}
      </div>
    </div>
  );
};

export default ProfilePage;
