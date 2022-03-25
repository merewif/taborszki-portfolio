import React from "react";
import styles from "../../../styles/ListOfProjects.module.scss";

export default function ListOfProjects() {
  const PROJECTS = {
    plotter: {
      name: "Plotter",
      description:
        "A web application to help writers visualize their plot diagram, systemize their worldbuilding and brainstorm about their characters.",
      img: "",
    },
    loretracker: {
      name: "Star Wars Loretracker",
      description:
        "A website to help Star Wars fans keep track of their reading list and watchlist.",
      img: "",
    },
    visualNovel: {
      name: "Beyond Mortal: The Visual Novel",
      description: "A browser-based video game PWA.",
      img: "",
    },
  };
  return (
    <>
      {Object.keys(PROJECTS).map((e, i) => {
        return (
          <div key={i} className={styles.projectCard}>
            <img alt="Portfolio Element Image" src={PROJECTS[e].img} />
            <h1>{PROJECTS[e].name}</h1>
            <p>{PROJECTS[e].description}</p>
          </div>
        );
      })}
    </>
  );
}
