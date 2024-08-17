import Book from "../components/Book";

const BookPage = ({ cover, tags, title, description, similar_books }) => {
  return (
    <div className="book-page">
      <div className="main">
        <div className="left">
          <img src={cover} alt="cover" />
        </div>
        <div className="right">
          <h3>{title}</h3>
          <div className="tags">
            {tags.map((tag) => (
              <div className="tag">{tag}</div>
            ))}
          </div>
          <p>{description}</p>
        </div>
      </div>

      <div className="similar-books">
        {similar_books.map((book) => (
          <Book />
        ))}
      </div>
    </div>
  );
};

export default BookPage;
