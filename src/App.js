import React from "react";
import CrudApp from "./components/CrudApp";
import SongSearch from "./components/SongSearch";

function App() {
  return (
    <div>
      <h1>Ejercicio con JSON-Serve</h1>
      <SongSearch />
      <hr />
      <CrudApp />
      <hr />
    </div>
  );
}

export default App;
