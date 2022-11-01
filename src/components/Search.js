import React, { useState } from "react";
import "../css/search.css";
import { useDebounce } from "../hooks/useDebounce";
import Suggestions from "./Suggestions";

function Search({ setQuery }) {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  const resourceURL = "https://www.googleapis.com/books/v1/volumes";
  const { debounced } = useDebounce(async () => {
    try {
      const response = await fetch(`${resourceURL}?q="${search}"`);
      const json = await response.json();
      setData(json);
    } catch (err) {
      setData([]);
    }
  });

  return (
    <div className="search-container">
      <div className="search-body">
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

        <div className="search-suggest">
          <Suggestions />
        </div>

        <button onClick={() => debounced()}>debounce</button>
      </div>
    </div>
  );
}

export default Search;
