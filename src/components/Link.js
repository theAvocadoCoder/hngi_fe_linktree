import React from "react";
import "../styles/Link.css";

export default function LinkComponent({ link }) {
  return (
      <a className="link__div" href={ link.url } target={ link.isSiteURL ? "" : "__blank" } id={ link.id } title={ link.subtext ? link.subtext : "" }>
        <p>
          { link.text }
        </p>
      </a> 
  )
}
