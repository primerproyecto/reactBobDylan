import React from "react";
import { CheckWidth } from "../hooks/CheckWidth";
import { Container } from "semantic-ui-react";
import { useParams } from "react-router-dom";

export const Cancion = ({ props }) => {
  const viewportWidth = CheckWidth();
  const { id } = useParams();
  return (
    <Container text style={{ marginTop: "7em" }}>
      <br></br>
      <br></br>
      <br></br>
      <h1>
        fdfdf ss fs asfasdfasdfsad fsadf sdf sdaf ds failedsdf sda failedsdfds
        failedsdfsad fsadff asfasdfasdfsad {id}
      </h1>
      {viewportWidth}
    </Container>
  );
};
