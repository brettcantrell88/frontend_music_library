import React, { useState } from "react";
import './AddNewSongs.css';

const AddNewSongs = (props) => {
  const [title, setTitle] = useState("");
  const [artist, setArtist] = useState("");
  const [album, setAlbum] = useState("");
  const [releaseDate, setReleaseDate] = useState("");
  const [genre, setGenre] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    let newSong = {
      title: title,
      artist: artist,
      album: album,
      releaseDate: releaseDate,
      genre: genre,
    };
    console.log(newSong);
    props.addNewSongProperty(newSong);
  }

  return (
    <form onSubmit={handleSubmit} >
      <div className="form-group">
        <label>Title</label>
        <input
          type="text"
          className="form-control"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
      </div>
      <div className="form-group">
        <label>Artist</label>
        <input
          type="text"
          className="form-control"
          value={artist}
          onChange={(event) => setArtist(event.target.value)}
        />
      </div>
      <div>
        <label>Album</label>
        <input
          type="text"
          className="form-control"
          value={album}
          onChange={(event) => setAlbum(event.target.value)}
        />
      </div>
      <div className="form-group">
        <label>Release Date</label>
        <input
          type="date"
          className="form-control"
          value={releaseDate}
          onChange={(event) => setReleaseDate(event.target.value)}
        />
      </div>
      <div className="form-group">
        <label>Genre</label>
        <input
          type="text"
          className="form-control"
          value={genre}
          onChange={(event) => setGenre(event.target.value)}
        />
      </div>
      <button type="submit" className="btn btn-primary" style={{'margin-top': '1em'}}>Add New Song</button>
    </form>
  );
};

export default AddNewSongs;
