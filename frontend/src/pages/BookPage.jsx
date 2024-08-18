import { useEffect, useState } from "react";
import Book from "../components/Book";
import axios from "axios";
import { useParams } from "react-router-dom";

const BookPage = () => {
  const [book, setBook] = useState({});
  const [similarBooks, setSimilarBooks] = useState({});
  const { bid } = useParams();

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/books/get_book/" + bid)
      .then((data) => {
        setBook(data);
      })
      .catch((err) => console.log(err));

    axios
      .get("http://localhost:5000/api/books/get_similar_books/" + bid)
      .then((data) => {
        setSimilarBooks(data);
      })
      .catch((err) => console.log(err));
  });

  return (
    <div className="book-page">
      <div className="main">
        <div className="left">
          <img src={book.cover} alt="cover" />
        </div>
        <div className="right">
          <h3>{book.title}</h3>
          <div className="tags">
            {book.tags.map((tag) => (
              <div className="tag">{tag}</div>
            ))}
          </div>
          <p>{book.description}</p>
        </div>
      </div>

      <div className="similar-books">
        {similarBooks.map((book) => (
          <Book />
        ))}
      </div>
    </div>
  );
};

export default BookPage;
