import { useSearchParams } from "react-router-dom";
import "../styles/Filters.css";

const Filter = ({ addTag, removeTag, tag }) => {
  const [params] = useSearchParams();

  return (
    <div className="filter">
      <input
        checked={params.get("tags").includes(tag)}
        type="checkbox"
        onChange={(e) => {
          // console.log(e.target.checked);

          if (e.target.checked) addTag(tag);
          else removeTag(tag);
        }}
      />
      <label>{tag}</label>
    </div>
  );
};

const Filters = ({ addTag, removeTag }) => {
  return (
    <div className="filters">
      <div className="filter-type">
        <h3>Categories</h3>
      </div>
      <Filter tag="action" addTag={addTag} removeTag={removeTag} />
      <Filter tag="adventure" addTag={addTag} removeTag={removeTag} />
      <Filter tag="psychology" addTag={addTag} removeTag={removeTag} />
      <Filter tag="horror" addTag={addTag} removeTag={removeTag} />
      <Filter tag="sci-fi" addTag={addTag} removeTag={removeTag} />
      <Filter tag="popular" addTag={addTag} removeTag={removeTag} />
      <Filter tag="trending" addTag={addTag} removeTag={removeTag} />
      <Filter tag="thriller" addTag={addTag} removeTag={removeTag} />
      {/*<br />
       <div className="filter-type">
        <h3>Sort by</h3>
        <div className="filter">
          <input type="radio" name="sort" />
          <label>Price (low first)</label>
        </div>
        <div className="filter">
          <input type="radio" name="sort" />
          <label>Price (high first)</label>
        </div>
        <div className="filter">
          <input type="radio" name="sort" />
          <label>Release (new first)</label>
        </div>
        <div className="filter">
          <input type="radio" name="sort" />
          <label>Release (old first)</label>
        </div>
      </div> */}
    </div>
  );
};

export default Filters;
