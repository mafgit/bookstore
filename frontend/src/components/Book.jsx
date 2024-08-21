import { useNavigate } from "react-router-dom";
import "../styles/Book.css";

const Book = ({ id, title, author, price, cover }) => {
  const navigate = useNavigate();
  return (
    <div className="book" onClick={() => navigate("/book/" + id)}>
      <img src={cover} alt="cover" />
      <div className="bottom">
        <p>{title}</p>
        <i className="author">{author}</i>
        <p className="amount">RS. {price}</p>
      </div>
    </div>
  );
};

export default Book;
