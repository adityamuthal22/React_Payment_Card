import React from "react";

export const Footer = (props) => {
  return (
    <>
      <h6>{props.data.h1}</h6>
      <h6>{props.data.h2}</h6>
      <p>{props.data.h3}</p>
    </>
  );
};