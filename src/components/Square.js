import React from "react";

const style = {
  background: "#E1E5EE",
  border: "2px solid #C7CCDB",
  fontSize: "2rem",
  fontWeight: "800",
  cursor: "pointer",
  outline: "none",
};

const Square = ({ value, onClick }) => (
  <button style={style} onClick={onClick}>
    {value}
  </button>
);

export default Square;
