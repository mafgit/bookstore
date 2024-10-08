import { useEffect, useState } from "react";
import BooksRow from "../components/BooksRow";
import SearchInput from "../components/SearchInput";
import axios from "axios";
import "../styles/HomePage.css";

const HomePage = () => {
  const [trendingBooks, setTrendingBooks] = useState([]);
  const [popularBooks, setPopularBooks] = useState([]);

  useEffect(() => {
    axios
      .get("/api/books/search?tags=trending") // fixed here
      .then((res) => {
        setTrendingBooks(res.data.books);
      })
      .catch((err) => {
        console.log(err);
      });

    axios
      .get("/api/books/search?tags=popular") // fixed here
      .then((res) => {
        setPopularBooks(res.data.books);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="home-page page">
      <SearchInput setSearch={() => {}} />
      {trendingBooks && trendingBooks.length ? (
        <BooksRow name="Trending books" books={trendingBooks} />
      ) : (
        <p>No trending books found.</p>
      )}
      {popularBooks && popularBooks.length ? (
        <BooksRow name="Popular books" books={popularBooks} />
      ) : (
        <p>No popular books found.</p>
      )}
    </div>
  );
};

export default HomePage;
