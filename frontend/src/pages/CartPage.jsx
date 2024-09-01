import axios from "axios";
import { useEffect, useState } from "react";
import { FaCartShopping, FaMoneyBill, FaTrash } from "react-icons/fa6";
import "../styles/CartPage.css";

const CartPage = ({ cart, setCart, saveCart }) => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    // cart.forEach((id) => {
    //   axios
    //     .get("/api/books/get_book/" + id)
    //     .then((res) => {
    //       setBooks(() => [...books, res.data.book]);
    //     })
    //     .catch((err) => {
    //       console.log(err);
    //     });
    // });

    let str = "";
    cart.forEach((id) => {
      str += id + ",";
      axios
        .get("/api/books/get_books?ids=" + str)
        .then((res) => {
          setBooks(res.data.books);
        })
        .catch((err) => {
          console.log(err);
        });
    });
  }, [cart]);

  return (
    <div className="cart-page page">
      <div className="header">
        <h3>
          <FaCartShopping /> Cart
        </h3>
        <button>
          <FaMoneyBill /> Buy
        </button>
      </div>

      <div className="cart-items">
        {books.map((book) => (
          <div className="cart-item" key={book._id}>
            <img src={book.cover} alt="cover" />
            <p>{book.title}</p>
            <button
              className="trash-btn"
              onClick={() => {
                const arr = cart.filter((item) => item != book._id);
                setCart([...arr]);
                saveCart([...arr]);
                const books2 = books.filter((b) => book._id != b._id);
                setBooks([...books2]);
              }}
            >
              <FaTrash />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CartPage;
