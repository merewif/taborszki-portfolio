import React from "react";

// Frontend Portfolio
import ListOfProjects from "./portfolios/frontend-development/ListOfProjects";
import VisualNovel from "./portfolios/frontend-development/VisualNovel";
import Loretracker from "./portfolios/frontend-development/Loretracker";
import Plotter from "./portfolios/frontend-development/Plotter";

// Graphic Design Portfolio
import ApparelDesign from "./portfolios/graphic-design/ApparelDesign";
import BlogDesign from "./portfolios/graphic-design/BlogDesign";
import BookCovers from "./portfolios/graphic-design/BookCovers";

// Translation Portfolio
import Publishing from "./portfolios/book-publishing/Publishing";
import Excerpts from "./portfolios/translation/Excerpts";
import ListOfTranslatedBooks from "./portfolios/translation/ListOfTranslatedBooks";

// Welcome Page
import AboutMe from "./AboutMe";

export default function ModuleDealer({ currentModule }) {
  // Welcome Page
  if (currentModule === "AboutMe") return <AboutMe />;

  // Frontend Portfolio
  if (currentModule === "frontend-portfolio")
    return (
      <>
        <Plotter />
        <VisualNovel />
        <Loretracker />
      </>
    );
  if (currentModule === "ListOfProjects") return <ListOfProjects />;
  if (currentModule === "VisualNovel") return <VisualNovel />;
  if (currentModule === "Loretracker") return <Loretracker />;
  if (currentModule === "Plotter") return <Plotter />;

  // Graphic Design Portfolio
  if (currentModule === "graphic-design-portfolio")
    return (
      <>
        <ApparelDesign />
        {/*<BlogDesign /> */}
        <BookCovers />
      </>
    );
  if (currentModule === "ApparelDesign") return <ApparelDesign />;
  if (currentModule === "BlogDesign") return <BlogDesign />;
  if (currentModule === "BookCovers") return <BookCovers />;

  // Translation Portfolio
  if (currentModule === "translation-portfolio")
    return (
      <>
        <Publishing />
        <Excerpts />
        <ListOfTranslatedBooks />
      </>
    );
  if (currentModule === "Excerpts") return <Excerpts />;
  if (currentModule === "Publishing") return <Publishing />;
  if (currentModule === "ListOfTranslatedBooks")
    return <ListOfTranslatedBooks />;

  return null;
}
