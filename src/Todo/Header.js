import React from "react";

export default function Header(props) {
  return (
    <div style={{ backgroundColor: "#85586F" ,paddingBottom:"5px"}}>
      <h2 style={{textAlign:"center"}}>
        {props.name ? `Welcome  ${props.name}! ` : "login please"}
      </h2>
    </div>
  );
}
