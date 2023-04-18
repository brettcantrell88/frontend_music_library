import axios from "axios";
import React from "react";
import './DisplaySongs.css'


const DisplaySongs = (song) => {
    const handleDelete = async () => {
        const url = 'http://127.0.0.1:8000/api/music/'
        const response = await axios.delete(url, song)
    }
    return ( 
        <div>
            <div>
                <p>{song.title}</p>
                <p>{song.artist}</p>
                <p>{song.album}</p>
                <p>{song.release_date}</p>
                <p>{song.genre}</p>
                <div>
                    <button onClick={handleDelete}>Delete Song</button>
                </div>
                <div>
                    <button>Edit Song</button>
                </div>
            </div>
        </div>
     );
};
 
export default DisplaySongs;