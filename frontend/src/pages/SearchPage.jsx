import SearchInput from "../components/SearchInput";
import Book from "../components/Book";
import Filters from "../components/Filters";

const SearchPage = ({ books }) => {
  return (
    <div className="search-page">
      <SearchInput />
      <div className="books-and-filters">
        <div className="books">
          {books.map((book) => (
            <Book />
          ))}
        </div>
        <Filters />
      </div>
    </div>
  );
};

export default SearchPage;
