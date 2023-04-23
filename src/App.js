import React, { useState } from 'react';
import NavBar from './Components/NavBar/NavBar';
import AddNewSong from './Components/AddNewSong';
import SearchBar from './Components/SearchBar/SearchBar';
import './App.css';



function App() {
  const [songs, setSongs] = useState([])

  function addNewSong(song){
    let tempSongs = [...songs, song];

    setSongs(tempSongs);
  }

  
  return (
    <div>
      <NavBar />
      <AddNewSong addNewSongProperty={addNewSong}/>
      <SearchBar searchedSongProperty={songs} />
    </div>
    )
  }
  
  
  
  
  export default App;
  
  // async function getAllSongs(){
  //   const response = await axios.get('http://127.0.0.1:8000/api/music/');
  //   console.log(response.data)
  //   setSongs(response.data)
  // };


  // useEffect(() => {
  //     getAllSongs();
  // }, []);
  
  
  {/* to changes songs in table need to change songs in musictable, need to use props unless songs changes to get songs to changes need to 
  setsongs assigns songs new value, songs var has to change only useeffect is in here. filtering only in app.js, pay attention to props and addnewentry
  concepts in general,  */}
     