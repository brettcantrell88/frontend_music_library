import React, { useState } from "react";

const SearchBar = (props) => {
  const [searchSong, setSearchSong] = useState("");

  function handleSearch(event) {
    event.preventDefault();
    let searchedSong = {
        query: searchSong,
    };
    props.songFilter(searchedSong);
  }

  return (
    <div>
      <form onSubmit={handleSearch}>
        <div className="container">
            <label className="search-label">Search Song List:</label>
            <input
                type="text"
                value={searchSong}
                placeholder="Search..."
                onChange={(event) => setSearchSong(event.target.value)}
            />
        </div>
       
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default SearchBar;
// do not need axios call
// needs function that filters the data set i already have(ie songs)

// only want one input and start with getting the titles to work then add additional pieces
// look at .includes from most wanted
