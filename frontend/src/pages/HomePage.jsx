import { useEffect, useState } from "react";
import BooksRow from "../components/BooksRow";
import SearchInput from "../components/SearchInput";
import axios from "axios";

const HomePage = () => {
  const [trendingBooks, setTrendingBooks] = useState([]);
  const [popularBooks, setPopularBooks] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/books/search?tags=trending") // fixed here
      .then((response) => {
        setTrendingBooks(response.data);
      })
      .catch((err) => {
        console.log(err.response.data);
      });

    axios
      .get("http://localhost:5000/api/books/search?tags=popular") // fixed here
      .then((response) => {
        setPopularBooks(response.data);
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  }, []);

  return (
    <div className="home-page">
      <SearchInput />
      {trendingBooks.length > 0 ? (
        <BooksRow name="Trending books" books={trendingBooks} />
      ) : (
        <p>No trending books found.</p>
      )}
      {popularBooks.length > 0 ? (
        <BooksRow name="Popular books" books={popularBooks} />
      ) : (
        <p>No popular books found.</p>
      )}
    </div>
  );
};

export default HomePage;
