import { FaTrash } from "react-icons/fa6";

const CartPage = ({ books }) => {
  return (
    <div className="cart-page">
      {books.map((book) => (
        <div className="cart-item">
          <img src={book.cover} alt="cover" />
          <p>{book.title}</p>
          <button>
            <FaTrash />
          </button>
        </div>
      ))}
    </div>
  );
};

export default CartPage;
