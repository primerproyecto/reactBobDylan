import React from "react";
import { ReactComponent as MySVG } from "../assets/Bob-Dylan-Portrait.svg";
import { useCheckWidth } from "../hooks/CheckWidth";

const StickyImage = () => {
  const width = useCheckWidth();
  return (
    <>
      {width > 600 && (
        <MySVG
          style={{
            position: "fixed",
            transform: "scale(0.6)",
            bottom: "0",
            right: "0",
            transformOrigin: "bottom right",
            zIndex: -1,
            fill: "currentcolor",
          }}
        />
      )}
    </>
  );
};
const PureSticky = React.memo(StickyImage);
export default PureSticky;
