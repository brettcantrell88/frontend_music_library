import React, { useState } from 'react';



const SearchBar = ({handleSearch, value, setSearchKeyword}) => {
    
    console.log(value);
    return ( 
        <div>
            <form onSubmit={(e) => handleSearch(e)}>Search Song</form>
            <input type='search' value={value} onChange={event => setSearchKeyword(event.target.value)}/>
        <button type='submit'>Search</button>
        </div>
     );
};
 
export default SearchBar;
