import React from "react";
import JSONPretty from "react-json-pretty";
import { NavLink } from "react-router-dom";
import { Item } from "semantic-ui-react";

export const CancionPlantila = ({ info }) => {
  return (
    <>
      {info.lyrics.length > 170 && (
        <article
          style={{
            color: "var(--dylanColor)",
            marginBottom: "8rem",
          }}
        >
          <div
            style={{
              display: "flex",
              position: "sticky",
              top: "78px",
              width: "fit-content",
              padding: "1rem 1rem 0 0",
              marginBottom: "2rem",
              backgroundColor: "var(--white-color, #ffffff)",
            }}
          >
            <div>
              <a href={info.album} target="_blank" rel="noreferrer">
                <img
                  src={info.cover}
                  alt="Cover"
                  width="100"
                  style={{ border: "2px solid var(--dylanColor, #000000)" }}
                />
              </a>
            </div>
            <div>
              <h1
                style={{
                  backgroundColor: "var(--dylanColor)",
                  padding: "0.5rem 1rem",
                  color: "var(--white-color, #ffffff)",
                  marginLeft: "var(--spacing, 10px)",
                  width: "fit-content",
                  marginBottom: "0px",
                }}
              >
                {info.song}
                {info.fechaPublicacion.length > 0 && (
                  <small> - {info.fechaPublicacion}</small>
                )}
              </h1>

              <h2
                style={{
                  backgroundColor: "var(--white-color, #ffffff)",
                  padding: "0rem 1rem",
                  color: "var(--dylanColor)",
                  width: "fit-content",
                  marginTop: "4px",
                }}
              >
                {info.albumTitle}
              </h2>
            </div>
          </div>
          <p
            style={{
              fontSize: "20px",
              lineHeight: "20px",
              color: "var(--black-color, #000",
            }}
            dangerouslySetInnerHTML={{
              __html: info.lyrics.replace(/\n/g, "<br />"),
            }}
          ></p>
        </article>
      )}
    </>
  );
};
