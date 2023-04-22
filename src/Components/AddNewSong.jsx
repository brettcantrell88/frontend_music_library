import React, { useState } from 'react';





const AddNewSong = (props) => {

    const [title, setTitle] = useState('');
    const [artist, setArtist] = useState('');
    const [album, setAlbum] = useState('');
    const [releaseDate, setReleaseDate] = useState('');
    const [genre, setGenre] = useState('');

    function handleSearch(event) {
        event.preventDefault();
        let songSearch = {
            title: title,
            artist: artist,
            album: album,
            releaseDate: releaseDate,
            genre: genre
        };
        console.log(songSearch)
    }


    return ( 
        <form onSubmit={handleSearch}>
            <label>Title</label>
            <input type="text" value={title} onChange={(event) => setTitle(event.target.value)}/>
            <label>Artist</label>
            <input type="text" value={artist} onChange={(event) => setArtist(event.target.value)}/>
            <label>Album</label>
            <input type="text" value={album} onChange={(event) => setAlbum(event.target.value)}/>
            <label>Release Date</label>
            <input type="date" value={releaseDate} onChange={(event) => setReleaseDate(event.target.value)}/>
            <label>Genre</label>
            <input type="text" value={genre} onChange={(event) => setGenre(event.target.value)}/>
            <button type='search'>Search</button>
        </form>
     );
}
 
export default AddNewSong;