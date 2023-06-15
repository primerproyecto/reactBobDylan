import React from "react";
import useSWR from "swr";
import { fetcher } from "../util/index";
import JSONPretty from "react-json-pretty";
import {
  Container,
  Divider,
  Dropdown,
  Grid,
  Header,
  Image,
  List,
  Menu,
  Segment,
} from "semantic-ui-react";

export const Canciones = () => {
  const { data, error, isLoading } = useSWR(
    "https://loremdylan-production.up.railway.app/api/v1/all",
    fetcher
  );
  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  return (
    <Container text style={{ marginTop: "7em" }}>
      <h1>Canciones de bobDylan</h1>
      {data ? (
        <section>
          {data.data.map((item) => (
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

              <JSONPretty
                id="json-pretty"
                style={{ fontSize: "1.1em" }}
                data={item.lyrics}
                space="14"
              ></JSONPretty>
            </article>
          ))}
        </section>
      ) : (
        <p>Loading...</p>
      )}
    </Container>
  );
};
