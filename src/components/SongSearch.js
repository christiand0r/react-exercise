import React, { useState, useEffect } from "react";
import { helpHttp } from "../helpers/helpHttp";
import Loader from "./Loader";
import SongDetails from "./SongDetails";
import SongForm from "./SongForm";
import KEY from "../api/vagalumeKey";

const SongSearch = () => {
  const [search, setSearch] = useState(null);
  const [lyric, setLyric] = useState(null);
  const [bio, setBio] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (search === null) return;

    const fetchData = async () => {
      let { artist, song } = search;

      let key = KEY.vagalumeKey;
      let artistUrl = `https://www.theaudiodb.com/api/v1/json/1/search.php?s=${artist}`;
      let songUrl = `https://api.vagalume.com.br/search.php?art=${artist}&mus=${song}&apikey=${key}`;

      setLoading(true);

      const [resArtist, resSong] = await Promise.all([
        helpHttp().get(artistUrl),
        helpHttp().get(songUrl),
      ]);

      //console.log(resArtist);
      //console.log(resSong);

      setBio(resArtist);
      setLyric(resSong);
      setLoading(false);
    };

    fetchData();
  }, [search]);

  const handleSearch = (data) => {
    setSearch(data);
    // console.log(data);
  };

  return (
    <div>
      <h2>SongSearch</h2>
      <article className="grid-third">
        {loading && <Loader />}
        <SongForm handleSearch={handleSearch} />
        {search && !loading && (
          <SongDetails bio={bio} lyric={lyric} search={search} />
        )}
      </article>
    </div>
  );
};

export default SongSearch;
