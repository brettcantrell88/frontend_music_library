import axios from "axios";
import React from "react";
import './DisplaySongs.css'


const DisplaySongs = ({song}) => {
    const handleDelete = async () => {
        const url = 'http://127.0.0.1:8000/api/music/'
        const response = await axios.delete(url, song)
    }
    return ( 
     
            <tr>
                {console.log(song)}
                <td>{song.title}</td>
                <td>{song.artist}</td>
                <td>{song.album}</td>
                <td>{song.release_date}</td>
                <td>{song.genre}</td>
                <tr>
                    <button onClick={handleDelete}>Delete Song</button>
                </tr>
                <tr>
                    <button>Edit Song</button>
                </tr>
            </tr>
       
     );
};
 
export default DisplaySongs;