import React, { useState } from "react";
import './styles/Search.css';
import './styles/grobal.css';

import { useLanguage } from "./context/LanguageContext";

const SearchPage = () => {
  const { language} = useLanguage(); // Using Language Context
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

  const text = {
    en: { title: "SEARCH", placeholder: "What Are You Looking For ?", suggestion: "Suggestion",noResult:"No results found", },
    fr: { title: "RECHERCHE", placeholder: "Qu'est-ce que tu cherches ?", suggestion: "Suggestion",noResult:"Aucun résultat trouvé", },
    sw: { title: "TAFUTA", placeholder: "Unatafuta Nini?", suggestion: "Pendekezo",noResult:"Hakuna matokeo yaliyopatikana",},
    kn: { title: "SHAKISHA", placeholder: "Urashaka iki?", suggestion: "Urugero",noResult:"Nta bisubizo byabonetse", }
  
  };
  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredItems = items.filter((item) =>
    item.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="search">
        <h1>{text[language]?.title}</h1>
        <input
          type="text"
          placeholder={text[language]?.placeholder || "Search"} // Use fallback if links[language]?.aboutus is undefined
          value={searchQuery}
          onChange={handleSearch}
          className="searchBar"
        />


        <h2>{text[language]?.suggestion}</h2>
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
          <p>{text[language]?.noResult}</p>
        )}
      </ul>
    </div>
  );
};

export default SearchPage;
