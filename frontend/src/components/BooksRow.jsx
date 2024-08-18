import { FaFire } from "react-icons/fa6";
import Book from "./Book";

const BooksRow = ({ name, books }) => {
  return (
    <div className="books-row">
      <div className="row-name">
        <FaFire />
        <h3>{name}</h3>
      </div>

      <div className="books">
        {books.map((book) => (
          <Book
            key={book.id}
            cover={book.cover}
            id={book.id}
            price={book.price}
            title={book.title}
          />
        ))}
      </div>
    </div>
  );
};

export default BooksRow;
