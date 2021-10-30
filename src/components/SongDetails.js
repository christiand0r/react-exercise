import React from "react";
import Message from "./Message";
import SongArtist from "./SongArtist";
import SongLyric from "./SongLyric";

const SongDetails = ({ bio, lyric, search }) => {
  if (!bio || !lyric) return null;

  const objHandleError = {
    notfound: "notfound",
    song_notfound: "song_notfound",
  };

  return (
    <>
      {lyric.type === objHandleError[lyric.type] ||
      lyric.name === "AbortError" ? (
        <Message
          error={`Error no existe la canción "${search.song}"`}
          bgColor="#dc3545"
        />
      ) : (
        <SongLyric title={lyric.mus[0].name} lyric={lyric.mus[0].text} />
      )}

      {bio.artists ? (
        <SongArtist artist={bio.artists[0]} />
      ) : (
        <Message
          error={`Error no existe el intérprete "${search.artist}"`}
          bgColor="#dc3545"
        />
      )}
    </>
  );
};

export default SongDetails;
