import React from "react";
import "../styles/Link.css";

export default function LinkComponent({ link }) {
  return (
      <a className="link__div" href={ link.url } target="__blank" id={ link.id }>
        <p>
          { link.text }
        </p>
      </a> 
  )
}
