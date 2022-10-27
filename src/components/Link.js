import React from "react";

export default function LinkComponent({ link }) {
  return (
    <div>
      <a href={link.url}>
        { link.text }
      </a>      
    </div>
  )
}
