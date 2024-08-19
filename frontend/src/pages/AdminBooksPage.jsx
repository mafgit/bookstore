import { useEffect, useState } from "react";
import axios from "axios";

const Book = ({ id, title, description, createdAt, amount, author, cover }) => {
  const [deleted, setDeleted] = useState(false);

  return (
    !deleted && (
      <div className="book">
        <img src={cover} alt="cover" />
        <p>{title}</p>
        <p>{description}</p>
        <p>{createdAt}</p>
        <p>{amount}</p>
        <p>{author}</p>

        <button
          onClick={() => {
            axios
              .delete("http://127.0.0.1:5000/api/auth/delete_book/" + id, {
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

const AdminBooksPage = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:5000/api/books/search", {
        withCredentials: true,
      })
      .then((res) => {
        setBooks(res.data.books);
      });
  }, []);

  return (
    <div className="admin-Books-page">
      {books.map((book) => (
        <Book
          key={book._id}
          id={book._id}
          title={book.title}
          cover={book.cover}
          createdAt={book.createdAt}
          description={book.description}
          amount={book.amount}
          author={book.author}
        />
      ))}
    </div>
  );
};

export default AdminBooksPage;
