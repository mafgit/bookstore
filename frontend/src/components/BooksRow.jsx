import { FaFire } from "react-icons/fa6";
import Book from "./Book";
import "../styles/BooksRow.css";

const BooksRow = ({ name, books }) => {
  // console.log(books);

  return (
    <div className="books-row">
      <div className="row-name">
        <FaFire className="fire" />
        <h3>{name}</h3>
      </div>

      <div className="books">
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
    </div>
  );
};

export default BooksRow;
