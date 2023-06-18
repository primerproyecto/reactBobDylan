import React from "react";

export const BuscadorCanciones = ({ filtrarDatos, handelInputChange }) => {
  return (
    <form style={{ padding: "2rem 0px" }}>
      <input
        style={{ width: "100%", padding: "1rem", borderColor: "currentcolor" }}
        type="text"
        placeholder="Busca canción"
        value={filtrarDatos}
        onChange={(e) => handelInputChange(e)}
      />
    </form>
  );
};
