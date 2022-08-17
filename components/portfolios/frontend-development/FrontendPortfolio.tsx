import React from 'react'
import Loretracker from './projects/loretracker/Loretracker';
import VisualNovel from './projects/visual-novel/VisualNovel';
import Plotter from './projects/plotter/Plotter';

export default function FrontendPortfolio() {
    return (
        <>
          <Loretracker />
          <VisualNovel />
          <Plotter />
        </>
      );
}
