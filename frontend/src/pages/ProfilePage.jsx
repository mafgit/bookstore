import { FaUser } from "react-icons/fa6";
import Order from "../components/Order";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../App";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../styles/ProfilePage.css";

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
      .get("/orders/get_orders/" + id, {
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
    <div className="profile-page page">
      <div className="account">
        <FaUser className="account-img" />
        <p>Name: {name}</p>
        <p>Email: {email}</p>
        <button
          onClick={() => {
            axios
              .get("/api/auth/logout", {
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
            window.location.reload();
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
