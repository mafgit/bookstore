const Book = ({ id, title, price, cover }) => {
  return (
    <div className="book">
      <img src={cover} alt="cover" />
      <div className="bottom">
        <p>{title}</p>
        <p>{price}</p>
      </div>
    </div>
  );
};

export default Book;
