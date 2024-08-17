import BooksRow from "../components/BooksRow";
import SearchInput from "../components/SearchInput";

const HomePage = ({ popular_books, trending_books }) => {
  return (
    <div className="home-page">
      <SearchInput />
      <BooksRow name="Trending books" books={popular_books} />
      <BooksRow name="Popular books" books={trending_books} />
    </div>
  );
};

export default HomePage;
