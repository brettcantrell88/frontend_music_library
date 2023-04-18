import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MusicTable from './MusicTable/MusicTable';
import NavBar from './NavBar/NavBar';
import './App.css';


function App() {
  const [songs, setSongs] = useState([])
  
  async function getAllSongs(){
    const response = await axios.get('http://127.0.0.1:8000/api/music/');
    console.log(response.data)
    setSongs(response.data)
  };

  useEffect(() => {
      getAllSongs();
  }, []);
  console.log('Songs List: ', songs)
  return (
    <div>
      <NavBar />
      <MusicTable songs={songs}/>
    
    </div>
    )
}



export default App;

