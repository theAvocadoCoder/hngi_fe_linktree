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
      subtext: "Look through our super helpful catalog of coding and design books",
    },
    {
      id: "book__python",
      url: "https://books.zuri.team/python-for-beginners?ref_id=theAvocadoCoder",
      text: "Python Books",
      subtext: `Are you a code newbie?\nLooking to solidify your understanding of python and be the next big name in machine learning?\nLook no further; our Python for Beginners book is the perfect place to start you on your journey!`,
    },
    {
      id: "pitch",
      url: "https://background.zuri.team/",
      text: "Background Check for Coders",
      subtext: "Learn about the good, bad, and downright scary online activities of candidates and employees.\nLet us help you make better informed hiring decisions.",
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
