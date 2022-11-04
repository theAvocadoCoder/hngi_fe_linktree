import React from "react";
import Link from "./Link.js";
import "../styles/LinkList.css";
import SlackLogo from "./logo-svg-components/SlackLogo.js";
import GithubLogo from "./logo-svg-components/GithubLogo.js";
import { links } from "../links.js";

export default function LinkList() {

  return (
    <div id="links__div">
      { 
        links.map(link => {
          return <Link key={link.id} link={link} />
        }) 
      }
      <div id="extra__div">
        <SlackLogo />
        <GithubLogo />
      </div>
    </div>
  )
}
