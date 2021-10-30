import React, { useState, useEffect } from "react";
import { helpHttp } from "../helpers/helpHttp";
import CrudForm from "./CrudForm";
import CrudTable from "./CrudTable";
import Loader from "./Loader";
import Message from "./Message";

let api = helpHttp();

const CrudApp = () => {
  const [db, setDb] = useState(null);
  const [editData, setEditData] = useState();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  let url = "http://localhost:5000/pokemons";

  useEffect(() => {
    setLoading(true);

    api.get(url).then((res) => {
      if (!res.error) {
        setDb(res);
        setError(null);
      } else {
        setDb(null);
        setError(res);
      }

      setLoading(false);
    });
  }, [url]);

  const createData = (data) => {
    data.id = Date.now();

    let options = {
      body: data,
      headers: { "content-type": "application/json" },
    };

    api.post(url, options).then((res) => {
      if (!res.error) {
        setDb([...db, res]);
      } else {
        setError(res);
      }
    });
  };

  const updateData = (data) => {
    let endpoint = `${url}/${data.id}`;
    let options = {
      body: data,
      headers: { "content-type": "application/json" },
    };

    // console.log(endpoint);

    api.put(endpoint, options).then((res) => {
      if (!res.error) {
        let editedData = db.map((el) => (el.id === data.id ? data : el));
        setDb(editedData);
      } else {
        setError(res);
      }
    });
  };

  const deleteData = (id) => {
    let confirm = window.confirm("¿Seguro que desea eliminar este elemento?");
    let endpoint = `${url}/${id}`;
    let options = {
      headers: { "content-type": "application/json" },
    };

    if (confirm) {
      api.del(endpoint, options).then((res) => {
        if (!res.error) {
          let newData = db.filter((el) => el.id !== id);
          setDb(newData);
        } else {
          setError(res);
        }
      });
    } else {
      alert("Operación cancelada");
    }
  };
  return (
    <div>
      <h2>CRUD con JSON-Serve</h2>
      <article className="grid-half">
        <CrudForm
          createData={createData}
          updateData={updateData}
          editData={editData}
          setEditData={setEditData}
        />
        {loading && <Loader />}

        {db && (
          <CrudTable
            data={db}
            deleteData={deleteData}
            setEditData={setEditData}
          />
        )}

        {error && <Message error={error.statusText} bgColor="#dc3545" />}
      </article>
    </div>
  );
};

export default CrudApp;
