import { useEffect, useState } from "react";
import Book from "../components/Book";
import axios from "axios";
import { useParams } from "react-router-dom";

const BookPage = () => {
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
      .get("http://127.0.0.1:5000/api/books/get_similar_books/" + bid)
      .then((res) => {
        setSimilarBooks(res.data.books);
      })
      .catch((err) => console.log(err));
  }, [bid]);

  return (
    <div className="book-page">
      <div className="main">
        <div className="left">
          <img src={book.cover} alt="cover" />
        </div>
        <div className="right">
          <h3>{book.title}</h3>
          <div className="tags">
            {book.tags &&
              book.tags.map((tag, i) => (
                <div className="tag" key={i}>
                  {tag}
                </div>
              ))}
          </div>
          <p>{book.description}</p>
        </div>
      </div>

      <div className="similar-books">
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
      </div>
    </div>
  );
};

export default BookPage;
