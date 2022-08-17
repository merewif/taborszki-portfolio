import React from "react";
import DownloadIcon from "@mui/icons-material/Download";
import FrontendProject from "../FrontendProject";

const DATA = {
  featuredImage: "./images/plotter/0.png",
  repoLink: "https://github.com/merewif/plotter",
  siteLink: "https://plotter-f6b18.web.app/",
  additionalButton: {
    icon: <DownloadIcon />,
    text: "Download as .exe",
    link: "https://github.com/merewif/plotter/releases/tag/v1.0.0",
  },
  gallery: [
    {
      image: "./images/plotter/1.png",
      description:
        "Users are prompted to think about the various aspects of their world with the placeholder texts of the input fields.",
    },
    {
      image: "./images/plotter/2.png",
      description:
        "Users can create their custom story charts using the embedded Google Line Chart function.",
    },
    {
      image: "./images/plotter/3.png",
      description:
        "Users can add images they associate with their characters, their plot or their worldbuilding entries using the MOODBOARD component.",
    },
    {
      image: "./images/plotter/4.png",
      description: "Red box shadow reminds the user to save their progress if there are unsaved changes.",
    },
    {
      image: "./images/plotter/5.png",
      description: "MUI Components are used liberally throughout the application.",
    },
  ],
};

export default function Plotter() {
  function infoHtml() {
    return (
      <>
        <h1>Plotter</h1>
        <h3>About</h3>
        <p>
          Plotter is a web application designed to help writers visualize their plot charts, systemize their
          worldbuilding and brainstorm about their characters.
        </p>
        <h3>Background</h3>
        <p>
          The inspiration for the project found me when I began working on my own novel and I thought it would
          be really useful to have a tool with which I could visually represent my plot on a line chart. I
          tried some other websites created similarly for authors, but they were either so bloated that there
          was an actual learning curve to figuring out how to use them, or they simply didn&apos;t have what I
          was looking for. So I decided to make my own and the idea quickly expanded into a{" "}
          <strong>Characters</strong>, a <strong>Plot</strong> and a <strong>Worldbuilding</strong> component
          after a few days of brainstorming.
        </p>
        <h3>technical details</h3>
        <p>
          Plotter is written in <strong>React</strong>; in fact it was the first project I wrote using React
          and coding it was my way of learning its ins and outs. Because I was just familiarizing myself with
          React, some
          <strong>jquery</strong> was used to manipulate CSS styles based on user interactions, although in
          hindsight this should have been done by simply toggling CSS classes. It is a{" "}
          <strong>serverless application</strong> that stores the user data in the localStorage. The user
          interface utilizes several
          <strong>Material UI</strong> components. The application is hosted on
          <strong>Google Firebase</strong>. The executable file was created with
          <strong>Electron</strong>. The aesthetics of the application follow
          <strong>Minimalist design</strong> principles to minimize distractions.
        </p>
      </>
    );
  }

  return <FrontendProject data={{ ...DATA, info: infoHtml() }} />;
}
