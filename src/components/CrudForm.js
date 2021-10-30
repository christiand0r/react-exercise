import React, { useState, useEffect } from "react";
import styled from "styled-components";

//* Styles
const Input = styled.input.attrs((props) => ({ type: "text" }))`
  background-color: transparent;
  border: thin solid #dedede;
  border-radius: 0.25rem;
  display: block;
  font-size: 1rem;
  line-height: 1;
  margin-bottom: 1rem;
  outline: none;
  padding: 0.75rem;
  width: 100%;
`;
const Button = styled.button`
  background-color: #eee;
  border: thin solid #444;
  border-radius: 0.25rem;
  color: #444;
  cursor: pointer;
  display: inline-block;
  font-size: 1rem;
  font-weight: bold;
  line-height: 1;
  margin: 0 0.5rem 0 0;
  padding: 0.5rem 1rem;
  text-align: center;
  text-decoration: none;
  text-transform: none;
  vertical-align: middle;
`;

//Initial State for Form
const initialForm = {
  id: null,
  name: "",
  type: "",
};

const CrudForm = ({ createData, updateData, editData, setEditData }) => {
  const [form, setForm] = useState(initialForm);

  useEffect(
    () => (editData ? setForm(editData) : setForm(initialForm)),
    [editData]
  );

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.type) {
      alert("Datos Incompletos");
      return;
    }

    form.id === null ? createData(form) : updateData(form);

    handleReset();
  };

  const handleReset = () => {
    setForm(initialForm);
    setEditData(null);
  };

  return (
    <div>
      {editData ? <h3>Editar</h3> : <h3>Agregar</h3>}
      <form onSubmit={handleSubmit}>
        <Input
          name="name"
          placeholder="Nombre del Pokémon"
          value={form.name}
          onChange={handleChange}
        />
        <Input
          name="type"
          placeholder="Tipo de Pokémon"
          value={form.type}
          onChange={handleChange}
        />
        <Button type="submit">Enviar</Button>
        <Button type="reset" onClick={handleReset}>
          Limpiar
        </Button>
      </form>
    </div>
  );
};

export default CrudForm;
