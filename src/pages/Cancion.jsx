import React from "react";
import { useParams } from "react-router-dom";
import useSWR from "swr";
import { fetcher } from "../util/index";
import JSONPretty from "react-json-pretty";
import { Container } from "semantic-ui-react";

export const Cancion = () => {
  const { id } = useParams();
  const { data, error, isLoading } = useSWR(
    `https://loremdylan-production.up.railway.app/api/v1/all/${id}`,
    fetcher
  );
  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;
  return (
    <Container text style={{ marginTop: "7em" }}>
      <h1>{data && data[0].song}</h1>
      <figure>
        <img src={data[0].cover} alt={data[0].song} />
      </figure>
      {data && (
        <JSONPretty
          id="json-pretty"
          style={{ fontSize: "1.5em" }}
          data={data[0].lyrics}
          space="14"
        />
      )}
    </Container>
  );
};
