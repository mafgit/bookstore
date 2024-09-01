import { useEffect, useState } from "react";
import axios from "axios";
import Book from "../components/Book";

const Order = ({ id, createdAt, amount, books, user }) => {
  const [deleted, setDeleted] = useState(false);

  return (
    !deleted && (
      <div className="order">
        <p>{id}</p>
        <p>{createdAt}</p>
        <p>{amount}</p>
        <div className="">
          {books.map((book) => (
            <Book
              key={book._id}
              cover={book.cover}
              id={book._id}
              price={book.price}
              title={book.title}
            />
          ))}
        </div>

        <div className="">
          <p>{user.name}</p>
          <p>{user.id}</p>
          <p>{user.email}</p>
        </div>

        <button
          onClick={() => {
            axios
              .delete("/orders/delete_order/" + id, {
                withCredentials: true,
              })
              .then((res) => {
                setDeleted(true);
              });
          }}
        >
          Delete
        </button>
      </div>
    )
  );
};

const AdminOrdersPage = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios
      .get("/orders/get_orders", {
        withCredentials: true,
      })
      .then((res) => {
        setOrders(res.data.orders);
      });
  }, []);

  return (
    <div className="admin-orders-page">
      {orders.map((order) => (
        <Order
          key={order._id}
          id={order._id}
          createdAt={order.createdAt}
          amount={order.amount}
          books={order.books}
          user={order.user}
        />
      ))}
    </div>
  );
};

export default AdminOrdersPage;
