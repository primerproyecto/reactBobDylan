import React, { useState } from "react";
import useSWR from "swr";
import { fetcher } from "../util/index";
import JSONPretty from "react-json-pretty";
import { CancionPlantila } from "../components/cancionPlantila";
import { Container } from "semantic-ui-react";
import { NavLink } from "react-router-dom";

export const Canciones = () => {
  const [filtrarDatos, setFiltrarDatos] = useState("");
  const { data, error, isLoading } = useSWR(
    "https://loremdylan-production.up.railway.app/api/v1/all",
    fetcher
  );

  if (error)
    return (
      <Container text style={{ marginTop: "7em" }}>
        <div>failed to load</div>
      </Container>
    );

  const handelInputChange = (event) => {
    setFiltrarDatos(event.target.value);
  };
  console.log(data);
  return (
    <Container text style={{ marginTop: "7em" }}>
      <h1>{data?.data.length} - canciones de bobDylan</h1>
      <form>
        <input
          type="text"
          placeholder="Busca canción"
          value={filtrarDatos}
          onChange={(e) => handelInputChange(e)}
        />
      </form>

      {data && !isLoading && !error ? (
        <section>
          {data.data.map((item) => {
            return item.song
              .toLowerCase()
              .includes(filtrarDatos.toLocaleLowerCase()) ? (
              <article key={item.id}>
                <div className="flex__centrado">
                  <a href={item.album} target="_blank" rel="noreferrer">
                    <img src={item.cover} alt="Cover" width="100" />
                  </a>
                  <div>
                    <h2>{item.song}</h2>
                    <a href="#">{item.album}</a>
                  </div>
                </div>
                <NavLink to={`/canciones/${item.id}`}>
                  <JSONPretty
                    id="json-pretty"
                    style={{ fontSize: "1.1em" }}
                    data={item.lyrics}
                    space="14"
                  />
                </NavLink>
              </article>
            ) : null;
          })}
        </section>
      ) : (
        <p>Loading...</p>
      )}
    </Container>
  );
};
