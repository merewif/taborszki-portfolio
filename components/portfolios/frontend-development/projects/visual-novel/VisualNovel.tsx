/* eslint-disable @next/next/no-img-element */
import React from "react";
import FrontendProject from "../FrontendProject";

const DATA = {
  featuredImage: "./images/beyond-mortal/0.png",
  repoLink: "https://github.com/merewif/tales-of-strange-aeons",
  siteLink: "https://merewif.github.io/tales-of-strange-aeons/game.html",
  gallery: [
    {
      image: "./images/beyond-mortal/1.png",
      description:
        "Players can earn various achievements based on the choices they make throughout the game.",
    },
    {
      image: "./images/beyond-mortal/2.png",
      description: "The visual novel is divided into chapters for ease of replayability.",
    },
    {
      image: "./images/beyond-mortal/3.png",
      description:
        "Click by click the game presents the user the next sentence of the story. Savegame files can be downloaded for sharing or safekeeping with the save button at the top right corner; the savegame files can be loaded back into the game via the main menu.",
    },
    {
      image: "./images/beyond-mortal/4.png",
      description: "As an interactive video game, player choice determines the course of the story.",
    },
    { image: "./images/beyond-mortal/5.png", description: "The game is fully optimized for mobile screens." },
    {
      image: "./images/beyond-mortal/6.png",
      description: "The game is installable through the browser as a Progressive Web App (PWA).",
    },
  ],
};

export default function VisualNovel() {
  function infoHtml() {
    return (
      <>
        <h1>Beyond Mortal: The Visual Novel</h1>
        <h3>About</h3>
        <p>Beyond Mortal is a browser-based interactive fiction video game.</p>
        <h3>Background</h3>
        <p>
          I always loved those kinds of games where I can determine the story myself, such as Dragon Age or Mass Effect, and after I&apos;ve acquired some knowledge of basic JavaScript, I realized I could write one on my own. The story was already brewing in my head as I was working on my novel meanwhile, so I sat down to write the game engine on my own as a form of practice and learning.
        </p>
        <h3>technical details</h3>
        <p>
          Beyond Mortal is written in <strong>javascript</strong> and <strong>jquery</strong>. It is a <strong>Serverless application</strong> that uses the <strong>localStorage</strong> to keep track of user progress. Savegame files can be downloaded and loaded into the game at any time. The text is stored in <strong>JSON files</strong> and is conditionally loaded (based on user choice) sentence by sentence as the user clicks or presses the spacebar. Links to background music, sound effects and images are stored in the JSON file, and the game dynamically loads them based on their format as the user progresses.
        </p>
        <p>
          The game is a <strong>Progressive Web APP (PWA)</strong> that can be installed via Chrome on PC or via most browsers on mobile devices. It is <strong>fully responsive</strong>.
        </p>
        <p>
          The game is available on a conceptual author&apos;s website which is hosted on GitHub Pages. The aesthetic design of the website at large follows a futuristic, science-fiction theme. Both the game and the website were styled using <strong>Vanilla CSS</strong>.
        </p>
      </>
    );
  }

  return <FrontendProject data={{...DATA, info: infoHtml()}} />;
}
