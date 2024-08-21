import axios from "axios";
import { useEffect, useState } from "react";
import { FaCartShopping, FaTrash } from "react-icons/fa6";

const CartPage = ({ cart, setCart, saveCart }) => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    cart.forEach((id) => {
      axios
        .get("http://127.0.0.1:5000/api/books/get_book/" + id)
        .then((res) => {
          console.log(books);

          setBooks([...books, res.data.book]);
        })
        .catch((err) => {
          console.log(err);
        });
    });
  }, [cart]);

  return (
    <div className="cart-page page">
      <h3>
        <FaCartShopping /> Cart
      </h3>
      {books.map((book) => (
        <div className="cart-item" key={book._id}>
          <div className="left">
            <img src={book.cover} alt="cover" />
            <p>{book.title}</p>
          </div>
          <button
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
  );
};

export default CartPage;
