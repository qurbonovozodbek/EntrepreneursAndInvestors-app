import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import Footer from "../components/Footer";
import alice from "../assets/image/Alice.jpg";
import john from "../assets/image/John.jpg";
import Jane from "../assets/image/Jane.jpg";
import robert from "../assets/image/robert.jpg";
import global from "../assets/image/global.jpg";
import invest from "../assets/image/invest.jpg";
import future from "../assets/image/future.jpg";
import fund from "../assets/image/fund.jpg";

function SearchResults() {
  const profiles = [
    { id: 1, name: "Jane Doe", type: "Entrepreneur", image: Jane },
    { id: 2, name: "John Smith", type: "Entrepreneur", image: john },
    { id: 3, name: "Alice Johnson", type: "Entrepreneur", image: alice },
    { id: 4, name: "Robert Lee", type: "Entrepreneur", image: robert },
    { id: 5, name: "Global Ventures", type: "Investor", image: global },
    { id: 6, name: "Impact Investors", type: "Investor", image: invest },
    { id: 7, name: "Future Capital", type: "Investor", image: future },
    { id: 8, name: "Visionary Fund", type: "Investor", image: fund },
  ];

  const [results, setResults] = useState([]);
  const [hasSearched, setHasSearched] = useState(false);
  const navigate = useNavigate();

  const handleSearch = (term) => {
    setHasSearched(true);

    if (term.trim() === "") {
      setResults([]);
    } else {
      const filteredResults = profiles.filter((profile) =>
        profile.name.toLowerCase().includes(term.toLowerCase())
      );
      setResults(filteredResults);
    }
  };

  const handleCardClick = (profile) => {
    if (profile.type === "Entrepreneur") {
      navigate(`/entrepreneur/${profile.id}`);
    } else if (profile.type === "Investor") {
      navigate(`/investor/${profile.id}`);
    }
  };

  return (
    <>
      <Header />
      <SearchBar onSearch={handleSearch} />
      <div className="search-results-page">
        <div className="search-results-container">
          <h2 className="search-title">Search Results</h2>
          {hasSearched && results.length > 0 ? (
            <div className="results-grid">
              {results.map((result) => (
                <div
                  key={result.id}
                  className="result-card"
                  onClick={() => handleCardClick(result)}
                  style={{ cursor: "pointer" }}
                >
                  <img
                    src={result.image}
                    alt={result.name}
                    className="result-image"
                  />
                  <div className="result-info">
                    <h3 className="result-name">{result.name}</h3>
                    <p className="result-type">{result.type}</p>
                  </div>
                </div>
              ))}
            </div>
          ) : hasSearched && results.length === 0 ? (
            <p className="no-results">No results found.</p>
          ) : (
            <p className="no-results">
              Please enter a search term to find profiles.
            </p>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default SearchResults;
