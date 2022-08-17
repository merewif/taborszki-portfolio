import React from "react";
import FrontendProject from "../FrontendProject";
import styles from "./Loretracker.module.scss";

const DATA = {
  featuredImage: "./images/loretracker/0.png",
  repoLink: "https://github.com/merewif/star-wars-loretracker",
  siteLink: "https://star-wars-loretracker.vercel.app",
  gallery: [
    {
      image: "./images/loretracker/1.png",
      description: "Material UI components prettify the user interface.",
    },
    {
      image: "./images/loretracker/2.png",
      description: "Titles are loaded into the array that the user can search.",
    },
    {
      image: "./images/loretracker/3.png",
      description:
        "The user can filter the results to see only canon or non-canon, finished or unfinished entries, along with entries by specific creators.",
    },
    {
      image: "./images/loretracker/4.png",
      description: "The user can choose from various sorting parameters.",
    },
    { image: "./images/loretracker/5.png", description: "Hover zoom is provided by a single line of css." },
  ],
};

export default function Loretracker() {
  function infoHtml() {
    return (
      <>
        <h1>Star Wars Loretracker</h1>
        <h3>About</h3>
        <p>
          The Loretracker is a website to help Star Wars fans keep track of their reading list and watchlist.
        </p>
        <h3>Background</h3>
        <p>
          Star Wars has a gargantuan extended universe with an inexhaustible flood of content. Some time after
          I began my journey of discovering the extended universe I began feeling lost in the endless ocean of
          content - movies, series, comics, books, video games. I was using Goodreads to track books but I was
          also interested in other media that Goodreads didn&apos;t accomodate, so I thought I should build my
          own, and so I did. I shared the project with Star Wars fans on Reddit who really appreciated it and
          gave me valuable feedback on bugs and features they would like to see, which I implemented right
          away.
        </p>
        <h3>technical details</h3>
        <p>
          The Loretracker was developed using <strong>React</strong> with <strong>Next.js</strong> and
          <strong>TypeScript</strong>. The frontend is hosted on Vercel. The UI uses <strong>MUI </strong>
          Components and the <strong>Lodash </strong>
          library helps in filtering and sorting the data.
        </p>
      </>
    );
  }

  return <FrontendProject data={{...DATA, info: infoHtml()}} />;
}
