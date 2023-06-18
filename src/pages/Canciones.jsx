import React, { useState } from "react";
import useSWR from "swr";
import { fetcher } from "../util/index";
import { CancionPlantila } from "../components/cancionPlantila";
import { Container } from "semantic-ui-react";
import { BuscadorCanciones } from "../components/BuscadorCanciones";

export const Canciones = () => {
  const [filtrarDatos, setFiltrarDatos] = useState("");
  const { data, error, isLoading } = useSWR(
    "https://loremdylan-production.up.railway.app/api/v1/all",
    fetcher
  );
  console.log("que es data", data);

  if (error)
    return (
      <Container text style={{ marginTop: "7em" }}>
        <div>failed to load</div>
      </Container>
    );

  const handelInputChange = (event) => {
    setFiltrarDatos(event.target.value);
  };
  return (
    <Container text style={{ marginTop: "7em" }}>
      <h1>{data?.data.length} - canciones de bobDylan</h1>

      <BuscadorCanciones
        filtrarDatos={filtrarDatos}
        handelInputChange={handelInputChange}
      />
      {data && !isLoading && !error ? (
        <section>
          {data.data.map((item) => {
            return item.song
              .toLowerCase()
              .includes(filtrarDatos.toLocaleLowerCase()) ? (
              <CancionPlantila info={item} key={item.id} />
            ) : null;
          })}
        </section>
      ) : (
        <p>Loading...</p>
      )}
    </Container>
  );
};
