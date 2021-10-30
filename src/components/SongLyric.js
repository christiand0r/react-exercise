import React from "react";

const SongLyric = ({ title, lyric }) => {
  return (
    <div className="containerLyric">
      <h3>{title}</h3>
      <blockquote style={{ whiteSpace: "pre-wrap" }}>{lyric}</blockquote>
    </div>
  );
};

export default SongLyric;
