import "../styles/Filters.css";

const Filters = ({ addTag, removeTag }) => {
  return (
    <div className="filters">
      <div className="filter-type">
        <h3>Categories</h3>
        <div className="filter">
          <input
            type="checkbox"
            onChange={(e) => {
              // console.log(e.target.checked);

              if (e.target.checked) addTag("action");
              else removeTag("action");
            }}
          />
          <label>Action</label>
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
