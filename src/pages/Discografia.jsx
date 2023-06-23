import { useContext } from "react";
import { DylanContext } from "../context/dataContext";
import { Container } from "semantic-ui-react";

export const Discografia = () => {
  const { data, error, isLoading } = useContext(DylanContext);
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

  const uniqueArray = data?.data.filter((item, index, self) => {
    return index === self.findIndex((t) => t.albumTitle === item.albumTitle);
  });

  uniqueArray?.sort(
    (a, b) => new Date(a.fechaPublicacion) - new Date(b.fechaPublicacion)
  );

  console.log("que es uniqueArray", uniqueArray);
  return (
    <Container text style={{ marginTop: "7em" }}>
      <h1>Pagina de discografia</h1>
      <section>
        <div className="ui grid">
          {uniqueArray?.map((item) => (
            <a
              href={item.album}
              title={item.albumTitle}
              target="_blank"
              rel="noreferrer"
              key={item.id}
              className="four wide column"
            >
              <figure style={{ margin: "0px" }}>
                <img
                  className="ui fluid image"
                  src={item.cover}
                  alt={item.albumTitle}
                  width="210"
                />

                <figcaption>
                  {item.albumTitle} - {item.fechaPublicacion}
                </figcaption>
              </figure>
            </a>
          ))}
        </div>
      </section>
    </Container>
  );
};
