import React from "react";
import styled from "styled-components";

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

const CrudRow = ({ info, deleteData, setEditData }) => {
  let { id, name, type } = info;

  return (
    <tr>
      <td>{name}</td>
      <td>{type}</td>
      <td>
        <Button onClick={() => setEditData(info)}>Editar</Button>
        <Button onClick={() => deleteData(id)}>Eliminar</Button>
      </td>
    </tr>
  );
};

export default CrudRow;
