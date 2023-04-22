




const DisplaySongs = (props) => {
  return (
    <table>
      <thead>
        <tr>Title</tr>
        <tr>Artist</tr>
        <tr>Album</tr>
        <tr>Release Date</tr>
        <tr>Genre</tr>
      </thead>
      <tbody>
        {props.parentSongs.map((song, index) => {
          return (
            <tr>
              <td>{song.title}</td>
              <td>{song.artist}</td>
              <td>{song.album}</td>
              <td>{song.release_date}</td>
              <td>{song.genre}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default DisplaySongs;
