import { useEffect, useState } from "react";
import axios from "axios";
import "../styles/BookPage.css";
import Book from "../components/Book";
// const Book = ({
//   id,
//   title,
//   description,
//   createdAt,
//   amount,
//   author,
//   cover,
//   tags,
// }) => {
//   const [deleted, setDeleted] = useState(false);

//   return (
//     !deleted && (
//       <div className="main">
//         <div className="left">
//           <img src={cover} alt="cover" />
//         </div>
//         <div className="right">
//           <h3>{title}</h3>
//           <p>{author}</p>
//           <div className="tags">
//             {tags &&
//               tags.map((tag, i) => (
//                 <div
//                   className="tag"
//                   key={i}
//                   style={{
//                     border: `2px solid orange`,
//                   }}
//                 >
//                   {tag}
//                 </div>
//               ))}
//           </div>
//           <p>{description}</p>

//           <p className="price">RS. {amount}</p>
//         </div>
//       </div>
//     )
//   );
// };

const AdminBooksPage = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios
      .get("/api/books/search", {
        withCredentials: true,
      })
      .then((res) => {
        setBooks(res.data.books);
      });
  }, []);

  return (
    <div className="admin-books-page page">
      <div className="books">
        {books.map((book) => (
          <Book
            key={book._id}
            id={book._id}
            title={book.title}
            cover={book.cover}
            createdAt={book.createdAt}
            description={book.description}
            price={book.price}
            author={book.author}
            tags={book.tags}
          />
        ))}
      </div>
    </div>
  );
};

export default AdminBooksPage;
