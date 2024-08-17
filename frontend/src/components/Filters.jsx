const Filters = () => {
  return (
    <div className="filters">
      <div className="filter-type">
        <h3>Categories</h3>
        <div className="filter">
          <input type="checkbox" />
          <label>Action</label>
        </div>
      </div>

      <div className="filter-type">
        <h3>Sort by</h3>
        <div className="filter">
          <input type="checkbox" />
          <label>Price (low to high)</label>
        </div>
      </div>
    </div>
  );
};

export default Filters;
