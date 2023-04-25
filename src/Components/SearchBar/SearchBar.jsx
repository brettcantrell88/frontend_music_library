import React, { useState } from 'react';




const SearchBar = (props) => {

    const [searchSong, setSearchSong] = useState('');

    return ( 
        <><div className="display-container">
            <div className="table-title">
                <h2 className="library-title">Song List</h2>
            </div>
            <div className="search-filter">
                <label className="search-label">Search Song List:</label>
                <input type='text' className='custom-input' placeholder='Search...' onChange={(event) => setSearchSong(event.target.value)} />
            </div>
        </div><table className="song-table">
                <thead>
                    <tr className="header-row">
                        <th>Title</th>
                        <th>Artist</th>
                        <th>Album</th>
                        <th>Release Date</th>
                        <th>Genre</th>
                    </tr>
                </thead>
                <tbody>
                    {props.displaySongs.filter((song) => {
                        if(searchSong == ''){
                            return song;
                        } else if (song.title.toLowerCase().includes(searchSong.toLowerCase())){
                            return song;
                        }
                    })
                    .map((song, index) => {
                        return(
                            <tr key={index} className='display-items'>
                                <td>{song.title}</td>
                                <td>{song.artist}</td>
                                <td>{song.album}</td>
                                <td>{song.release_date}</td>
                                <td>{song.genre}</td>
                                <td className='button-conatin'><button type='submit' className='delete-button' onClick={() => props.deleteSongProp(song)}>Delete</button></td>
                            </tr>
                        )
                    })}
                </tbody>
            </table></>
     );
}
 
export default SearchBar;
// do not need axios call
// needs function that filters the data set i already have(ie songs)

// only want one input and start with getting the titles to work then add additional pieces 
// look at .includes from most wanted


