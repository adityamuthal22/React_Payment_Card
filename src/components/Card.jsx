import React from "react";
import { Footer } from "./Footer";
import { Head } from "./Head";
import { Image } from "./Image";
import "./Style.css";

export const Card = (props) => {
    // console.log(props.bgcolor1);
  return (
    <>
      <div className="main_Div" style={props.bgcolor1}>
        <div className="fisrt_div">
          <Head data={ props.obj1} />
          <Footer data={ props.obj1} />
        </div>
        <Image data={ props.obj1} />
      </div>
    </>
  );
};