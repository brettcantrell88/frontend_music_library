import React, { useEffect, useState } from 'react';
import NavBar from './Components/NavBar/NavBar';
import AddNewSong from './Components/AddNewSong';
import SearchBar from './Components/SearchBar/SearchBar';
import DisplaySongs from './Components/DisplaySongs/DisplaySongs';
import './App.css';
import axios from 'axios';




function App() {
  const [songs, setSongs] = useState([]);
  

  useEffect(() => {
    
    getAllSongs();
  }, []);

  // TODO: Write a filtering function to take user input and filter songs

  
  async function getAllSongs(){
    let response = await axios.get('http://127.0.0.1:8000/api/music/');
    console.log(response.data)
    setSongs(response.data)
  };
  async function addNewSong(newSong){
    let response = await axios.post('http://127.0.0.1:8000/api/music/'+ newSong);
    console.log(response.data);
    if(response.status === 201){
      await getAllSongs();
    }
  
  };
  // async function deleteSong(song){
  //   let response = await axios.delete('http://127.0.0.1:8000/api/music/'+ song);
  //   if(response.status === 200){
  //     return getAllSongs();
  //   }
  // };
  
  
  return (
    <div>
      <div><NavBar/></div>
      <div><SearchBar  /></div>
      <div className='content-wrap'><AddNewSong addNewSongProperty={addNewSong}/></div>
      <div><DisplaySongs parentSongs={songs}/></div>
    </div>
    )
  }
  
  
  export default App;
  
  
  
  // I don't know if I can have setSongs in both the post and get requests 
// addnewsong goes on button click when form gets submitted
// calling addnewsong without a song to add
  //  to changes songs in table need to change songs in musictable, need to use props unless songs changes 
  // to get songs to changes need to 
  // setsongs assigns songs new value, songs var has to change only useeffect is in here. filtering only 
  // in app.js, pay attention to props and addnewentry
  // concepts in general,  
     