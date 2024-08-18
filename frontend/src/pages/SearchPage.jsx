import SearchInput from "../components/SearchInput";
import Book from "../components/Book";
import Filters from "../components/Filters";
import { useEffect, useState } from "react";
import axios from "axios";
import { useSearchParams } from "react-router-dom";

const SearchPage = () => {
  const [search, setSearch] = useState("");
  let [searchParams] = useSearchParams();
  const [books, setBooks] = useState([]);
  // console.log(searchParams.get("text"));

  useEffect(() => {
    axios
      .get(
        `http://127.0.0.1:5000/api/books/search?text=${searchParams.get(
          "text"
        )}&tags=${searchParams.get("tags")}`
      )
      .then((res) => {
        setBooks(res.data.books);
      })
      .catch((error) => {
        console.error("There was an error fetching the books!", error);
      });
  }, [search, searchParams]);

  return (
    <div className="search-page page">
      <SearchInput search={search} setSearch={setSearch} />
      <div className="books-and-filters">
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
        <Filters />
      </div>
    </div>
  );
};

export default SearchPage;
