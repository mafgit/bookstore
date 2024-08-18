import Book from "./Book";

const Order = ({ id, user, books, status, amount, createdAt, updatedAt }) => {
  return (
    <div className="order">
      <h3>Order #{id}</h3>

      <div>
        <h4>User:</h4>
        <p>Name: {user.name}</p>
        <p>ID: {user.id}</p>
      </div>

      <div>
        <h4>Books:</h4>
        <div className="books">
          {books.map((book) => (
            <Book
              cover={book.cover}
              price={book.price}
              title={book.title}
              key={book.id}
              id={book.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Order;
