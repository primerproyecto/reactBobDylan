import React from "react";
import { Container } from "semantic-ui-react";
import { fetcher } from "../util/index";
import useSWR from "swr";
import { ReactComponent as MySVG } from "../assets/Bob-Dylan-Portrait.svg";

export const Home = () => {
  const { data, error, isLoading } = useSWR(
    "https://loremdylan-production.up.railway.app/api/v1/sentence",
    fetcher
  );
  console.log(data);
  return (
    <Container text style={{ marginTop: "7em" }}>
      {data && <blockquote>{data.sentence}</blockquote>}
      <MySVG style={{ position: "fixed", bottom: "0", right: "0" }} />
    </Container>
  );
};
