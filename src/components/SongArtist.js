import React from "react";

const SongArtist = ({ artist }) => {
  return (
    <section>
      <h3>{artist.strArtist}</h3>
      <img src={artist.strArtistThumb} alt={artist.strArtist} />
      <p>
        {artist.intMembers > 1
          ? artist.intFormedYear
          : `${artist.intBornYear} - ${artist.intDeadYear || "Present"}`}
      </p>
      <p>
        {artist.strCountryCode}. {artist.strCountry}
      </p>
      <p>
        {artist.strGenre} {artist.srtStyle ? `- ${artist.srtStyle}` : false}
      </p>
      <a href={`https://${artist.strWebsite}`} target="_blank" rel="noreferrer">
        {artist.strArtist} Site
      </a>
      <p>{artist.strBiographyEN}</p>
    </section>
  );
};

export default SongArtist;
