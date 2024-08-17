import { useEffect, useState } from "react";
import BooksRow from "../components/BooksRow";
import SearchInput from "../components/SearchInput";
import axios from "axios";

const HomePage = () => {
  const [trendingBooks, setTrendingBooks] = useState([]);
  const [popularBooks, setPopularBooks] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/search?tags=trending")
      .then((data) => {
        setTrendingBooks(data);
      })
      .catch((err) => {
        console.log(err);
      });

    axios
      .get("http://localhost:5000/search?tags=popular")
      .then((data) => {
        setPopularBooks(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="home-page">
      <SearchInput />
      <BooksRow name="Trending books" books={trendingBooks} />
      <BooksRow name="Popular books" books={popularBooks} />
    </div>
  );
};

export default HomePage;
