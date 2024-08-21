import { useEffect, useState } from "react";
import Book from "../components/Book";
import axios from "axios";
import { useParams } from "react-router-dom";
import "../styles/BookPage.css";
import {
  FaCartShopping,
  FaMoneyBill,
  FaMoneyBills,
  FaMoneyBillWave,
  FaWallet,
} from "react-icons/fa6";
import BooksRow from "../components/BooksRow";

const BookPage = ({ cart, setCart, saveCart }) => {
  const [book, setBook] = useState({});
  const [similarBooks, setSimilarBooks] = useState([]);
  const { bid } = useParams();

  useEffect(() => {
    axios
      .get("http://127.0.0.1:5000/api/books/get_book/" + bid)
      .then((res) => {
        setBook(res.data.book);
      })
      .catch((err) => console.log(err));

    axios
      .get("http://127.0.0.1:5000/api/books/find_similar_books/" + bid)
      .then((res) => {
        setSimilarBooks(res.data.books);
      })
      .catch((err) => console.log(err));
  }, [bid]);

  const pickRandomColor = () => {
    const colors = ["#7583ff", "#64c1ff", "#fa75ff", "#75ff81", "#ff8575"];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  return (
    <div className="book-page page">
      <div className="main">
        <div className="left">
          <img src={book.cover} alt="cover" />
        </div>
        <div className="right">
          <h3>{book.title}</h3>
          <div className="tags">
            {book.tags &&
              book.tags.map((tag, i) => (
                <div
                  className="tag"
                  key={i}
                  style={{
                    border: `2px solid ${pickRandomColor()}`,
                  }}
                >
                  {tag}
                </div>
              ))}
          </div>
          <p>{book.description}</p>

          <p className="price">
            <FaWallet /> RS. {book.price}
          </p>

          <button
            className="add-btn"
            onClick={() => {
              for (let i = 0; i < cart.length; i++) {
                if (cart[i] == book._id) return;
              }

              setCart([...cart, book._id]);
              saveCart([...cart, book._id]);
            }}
          >
            <FaCartShopping /> Add to Cart
          </button>
        </div>
      </div>

      {/* <div className="similar-books">
        {similarBooks &&
          similarBooks.map((book) => (
            <Book
              key={book._id}
              cover={book.cover}
              id={book._id}
              price={book.price}
              title={book.title}
            />
          ))}
      </div> */}
      <BooksRow name="Similar books" books={similarBooks} />
    </div>
  );
};

export default BookPage;
