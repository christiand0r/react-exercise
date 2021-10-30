import React from "react";
import styled from "styled-components";
import CrudRow from "./CrudRow";

const Table = styled.table`
  border-spacing: 0;
  border-collapse: collapse;
  width: 100%;

  & td,
  & th {
    text-align: left;
    padding: 0.5rem;
    border-bottom: thin solid #dedede;
  }
`;

const CrudTable = ({ data, deleteData, setEditData }) => {
  return (
    <div>
      <h3>Tabla de Datos</h3>
      <Table>
        <thead>
          <tr>
            <td>Nombre</td>
            <td>Tipo</td>
            <td>Acciones</td>
          </tr>
        </thead>
        <tbody>
          {data.length > 0 ? (
            data.map((el) => (
              <CrudRow
                info={el}
                key={el.id}
                setEditData={setEditData}
                deleteData={deleteData}
              />
            ))
          ) : (
            <tr>
              <td colSpan="3">Sin datos</td>
            </tr>
          )}
        </tbody>
      </Table>
    </div>
  );
};

export default CrudTable;
