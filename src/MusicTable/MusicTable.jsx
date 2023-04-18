import React, { useState, useEffect } from 'react';
import SearchBar from '../SearchBar/SearchBar';
import DisplaySongs from '../DisplaySongs/DisplaySongs';




const MusicTable = ({songs}) => {
        const {searchKeyword, setSearchKeyword} = useState('');
        const [filteredSongs, setFilteredSongs] = useState(songs);
        useEffect(() => {
            setFilteredSongs(songs)
        }, [songs]);

        const handleSearch = () => {
            const newFilteredSongs = songs.filter((songs) => songs.title.toLowerCase().includes(searchKeyword.toLowerCase()),);
            setFilteredSongs(newFilteredSongs);
        };
        const songRow = songs.map((song) => {
            return <DisplaySongs song={song}/>
        });

        return(<section id='music'>
            <h1>Music Library</h1>
            <SearchBar value={searchKeyword} onChange={setSearchKeyword} />
            <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Artist</th>
                        <th>Album</th>
                        <th>Release Date</th>
                        <th>Genre</th>
                    </tr>
                </thead>
                <tbody>
                    {songRow}
                </tbody>
            </table>
        </section>)
}
 
export default MusicTable;