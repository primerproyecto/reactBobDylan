import React from "react";
import { Container } from "semantic-ui-react";
import { fetcher } from "../util/index";
import useSWR from "swr";

export const Home = () => {
  const { data, error, isLoading } = useSWR(
    "https://loremdylan-production.up.railway.app/api/v1/sentence",
    fetcher
  );
  if (error)
    return (
      <Container text style={{ marginTop: "7em" }}>
        Failed to load
      </Container>
    );
  if (isLoading)
    return (
      <Container text style={{ marginTop: "7em" }}>
        loading...
      </Container>
    );
  console.log(data);
  return (
    <Container text style={{ marginTop: "7em" }}>
      {data && (
        <>
          <div
            style={{
              height: "50vh",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <blockquote style={{ fontSize: "30px" }}>
              {data.sentence}
            </blockquote>
            <p></p>
          </div>
        </>
      )}
    </Container>
  );
};
