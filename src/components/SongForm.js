import React, { useState } from "react";

//Initial Form
const initialForm = {
  artist: "",
  song: "",
};

const SongForm = ({ handleSearch }) => {
  const [form, setForm] = useState(initialForm);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.artist || !form.song) {
      alert("Datos Incompletos");
      return;
    }

    handleSearch(form);
    setForm(initialForm);
  };

  return (
    <div className="containerForm">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="artist"
          placeholder="Nombre del Artista"
          value={form.artist}
          onChange={handleChange}
        />
        <input
          type="text"
          name="song"
          placeholder="Nombre de la Canción"
          value={form.song}
          onChange={handleChange}
        />
        <button type="submit">Buscar</button>
      </form>
    </div>
  );
};

export default SongForm;
