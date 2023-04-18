import React, { useState, useEffect } from 'react';
import SearchBar from '../SearchBar/SearchBar';
import DisplaySongs from '../DisplaySongs/DisplaySongs';




const MusicTable = ({songs}) => {
        const {searchKeyword, setSearchKeyword} = useState('');
        const [filteredSongs, setFilteredSongs] = useState(songs);
        useEffect(() => {
            setFilteredSongs(songs)
        }, []);

        const handleSearch = () => {
            let newFilteredSongs = songs.filter((songs) => songs.title.toLowerCase().includes(searchKeyword.toLowerCase()),);
            setFilteredSongs(newFilteredSongs);
            return handleSearch;
        };
        const songRow = songs.map((song) => {
            return <DisplaySongs song={song}/>
        });

        return(<section id='music'>
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