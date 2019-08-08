import React from "react";
import Button from "@material-ui/core/Button";

// We can use inline-style
const makeStyle = (colors, textColor) => ({
  background: `linear-gradient(45deg, ${colors[0]} 30%, ${colors[1] ||
    colors[0]} 90%)`,
  borderRadius: 3,
  border: 0,
  color: textColor || "white",
  height: 48,
  padding: "0 30px",
  boxShadow: "0 3px 5px 2px rgba(0, 0, 0, 0.18)",
  textTransform: "none"
});

export default ({ colors, text, textColor, onClick, style, type }) => (
  <Button
    style={{ ...makeStyle(colors, textColor), ...(style || {}) }}
    onClick={onClick}
    type={type || null}
  >
    {text}
  </Button>
);
