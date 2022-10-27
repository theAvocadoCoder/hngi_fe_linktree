import React from "react";
import Link from "./Link.js";

export default function LinkList() {
  const links = [
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
      links.map(link => {
        return <Link key={link.id} link={link} />
      })
  )
}
