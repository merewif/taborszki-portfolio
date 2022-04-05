/* eslint-disable @next/next/no-img-element */
import React from 'react';
import styles from '../../../styles/ListOfProjects.module.scss';

interface ProjectEntry {
  name: string;
  description: string;
  img: string;
}

export default function ListOfProjects() {
  const PROJECTS: ProjectEntry[] = [
    {
      name: 'Plotter',
      description:
        'A web application to help writers visualize their plot diagram, systemize their worldbuilding and brainstorm about their characters.',
      img: '',
    },
    {
      name: 'Star Wars Loretracker',
      description:
        'A website to help Star Wars fans keep track of their reading list and watchlist.',
      img: '',
    },
    {
      name: 'Beyond Mortal: The Visual Novel',
      description: 'A browser-based video game PWA.',
      img: '',
    },
  ];

  return (
    <>
      {PROJECTS.map((e, i) => {
        const currentEntry: ProjectEntry = PROJECTS[i];
        return (
          <div key={i} className={styles.projectCard}>
            <img alt='Portfolio Element Image' src={currentEntry.img} />
            <h1>{currentEntry.name}</h1>
            <p>{currentEntry.description}</p>
          </div>
        );
      })}
    </>
  );
}
