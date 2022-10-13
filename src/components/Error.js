import React from "react";
import "../css/error.css";

function Error({ message }) {
  return <div className="error-container">{message}</div>;
}

export default Error;
