import React, { useState } from "react";
import "../css/search.css";
function Search({ setQuery }) {
  const [search, setSearch] = useState("");
  return (
    <div className="search-container">
      <input
        className="search-input"
        type="text"
        placeholder="search author, title"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button className="search-btn" onClick={() => setQuery(search)}>
        Search
      </button>
    </div>
  );
}

export default Search;
