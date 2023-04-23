import React, { useState, useEffect } from 'react';
import axios from 'axios';


const SearchBar = () => {
    const [songSearch, setSongSearch] = useState('');

    async function searchForSong(event) {
        event.preventDefault();
        const response = await axios.get('http://127.0.0.1:8000/api/music/'+ songSearch);
        setSongSearch(response.data)
    };
    useEffect(() => {
        searchForSong();
    });


    return ( 
        <form onSubmit={searchForSong}>
            <div className='container'>
                <h4>Search Music Library</h4>
                <input type='text' onChange={(event) => setSongSearch(event.target.value)}/>
                <button onClick={(event) => searchForSong(event.target.value)}>Search</button>
            </div>
        </form>
     );
}
 
export default SearchBar;