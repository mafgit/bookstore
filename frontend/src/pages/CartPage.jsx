import axios from "axios";
import { useEffect, useState } from "react";
import { FaTrash } from "react-icons/fa6";

const CartPage = () => {
  const [items, setItems] = useState([]);
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const data1 = localStorage.getItem("items");
    if (data1) {
      const data2 = JSON.parse(data1);

      data2.forEach((id) => {
        axios.get("http://localhost:5000/get_book/" + id).then((book) => {
          setBooks([...books, book]);
        });
      });
    }
  }, []);

  return (
    <div className="cart-page">
      {books.map((book) => (
        <div className="cart-item">
          <div className="left">
            <img src={book.cover} alt="cover" />
            <p>{book.title}</p>
          </div>
          <button>
            <FaTrash />
          </button>
        </div>
      ))}
    </div>
  );
};

export default CartPage;
