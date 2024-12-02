import React, { useState } from "react";
import './styles/Search.css';

const SearchPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const items = [
    "Apple",
    "Banana",
    "Cherry",
    "Date",
    "Elderberry",
    "Fig",
    "Grape",
    "Honeydew",
  ];

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredItems = items.filter((item) =>
    item.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="search">
        <h1>SEARCH</h1>
      <input
        type="text"
        placeholder="What Are You Looking For ?"
        value={searchQuery}
        onChange={handleSearch}
       className="searchBar"
      />

        <h2>Suggestion</h2>
      <ul >
        {filteredItems.length > 0 ? (
          filteredItems.map((item, index) => (
           
            <li
              key={index}
            >
              {item}
            </li>
          ))
        ) : (
          <p>No results found</p>
        )}
      </ul>
    </div>
  );
};

export default SearchPage;
