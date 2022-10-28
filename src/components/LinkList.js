import React from "react";
import Link from "./Link.js";
import "../styles/LinkList.css";
import SlackLogo from "./logo-svg-components/SlackLogo.js";
import GithubLogo from "./logo-svg-components/GithubLogo.js";

export default function LinkList() {
  const links = [
    {
      id: "twitter",
      url: "https://twitter.com/theAvocadoCoder/",
      text: "@theAvocadoCoder [Twitter]",
    },
    {
      id: "slack",
      url: "https://hng9.slack.com/team/U048NMSEX6D/",
      text: "theAvocadoCoder",
    },
    {
      id: "btn__zuri",
      url: "https://training.zuri.team/",
      text: "Zuri Team",
    },
    {
      id: "books",
      url: "https://books.zuri/team/",
      text: "Zuri Books",
    },
    {
      id: "book__python",
      url: "https://books.zuri.team/python-for-beginners?ref_id=theAvocadoCoder",
      text: "Python Books",
    },
    {
      id: "pitch",
      url: "https://background.zuri.team/",
      text: "Background Check for Coders",
    },
    {
      id: "book__design",
      url: "https://books.zuri.team/design-rules",
      text: "Design Books",
    },
  ]

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
