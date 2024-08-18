import "../styles/Filters.css";

const Filters = () => {
  return (
    <div className="filters">
      <div className="filter-type">
        <h3>Categories</h3>
        <div className="filter">
          <input type="checkbox" />
          <label>Action</label>
        </div>
        <div className="filter">
          <input type="checkbox" />
          <label>Adventure</label>
        </div>
        <div className="filter">
          <input type="checkbox" />
          <label>Sci-fi</label>
        </div>
        <div className="filter">
          <input type="checkbox" />
          <label>Romance</label>
        </div>
        <div className="filter">
          <input type="checkbox" />
          <label>Thriller</label>
        </div>
      </div>
      <br />
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
      </div>
    </div>
  );
};

export default Filters;
