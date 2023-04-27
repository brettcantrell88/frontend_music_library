import React, { useState } from "react";

const SearchBar = (props) => {
  const [searchSong, setSearchSong] = useState('');

  function handleSearch(event) {
    event.preventDefault();
    
    let filterResult = props.songs.filter((songFilter) => {
      if (searchSong === "") {
        return songFilter;
      } else if (
        songFilter.title.toLowerCase().includes(searchSong.toLowerCase()) || songFilter.artist.toLowerCase().includes(searchSong.toLowerCase()) || songFilter.album.toLowerCase().includes(searchSong.toLowerCase()) || songFilter.release_date.toLowerCase().includes(searchSong.toLowerCase()) || songFilter.genre.toLowerCase().includes(searchSong.toLowerCase())
      ) {
        return true;
      }
      
    });
    
    props.setSongs(filterResult);
  }

  return (
    <div>
      <form onSubmit={handleSearch}>
        <div className="form-group">
          <label className="search-label">Search Song List:</label>
          <input
            type="text"
            className="form-control"
            value={searchSong}
            placeholder="Search..."
            onChange={(event) => setSearchSong(event.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-primary" style={{'margin-top': '1em'}}>Search</button>
      </form>
    </div>
  );
};

export default SearchBar;
// do not need axios call
// needs function that filters the data set i already have(ie songs)

// only want one input and start with getting the titles to work then add additional pieces
// look at .includes from most wanted
