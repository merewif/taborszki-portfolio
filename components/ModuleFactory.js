import React from "react";

// Frontend Portfolio
import ListOfProjects from "./portfolios/frontend-development/ListOfProjects";
import VisualNovel from "./portfolios/frontend-development/VisualNovel";
import Loretracker from "./portfolios/frontend-development/Loretracker";
import Plotter from "./portfolios/frontend-development/Plotter";

// Graphic Design Portfolio
import ApparelDesign from "./portfolios/graphic-design/ApparelDesign";
import Gallery from "./portfolios/graphic-design/Gallery";

// Translation Portfolio
import Publishing from "./portfolios/book-publishing/Publishing";
import Excerpts from "./portfolios/translation/Excerpts";
import ListOfTranslatedBooks from "./portfolios/translation/ListOfTranslatedBooks";

// Welcome Page
import AboutMe from "./AboutMe";

// CSS
import galleryStyles from "../styles/Gallery.module.scss";

// MUI
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function ModuleFactory({ currentModule }) {
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
        <div
          style={{
            marginInline: "20vw",
            textAlign: "center",
            textAlignLast: "center",
            marginBottom: "20px",
          }}
        >
          During a 3 year period I taught myself the basics of graphic design,
          with a heavy emphasis on typography. Originally it started out from
          the need to create visually captivating thumbnails for blogposts. I
          then went on to apply the skills I{" "}
        </div>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <p
              style={{
                fontFamily: "Montserrat",
                textTransform: "uppercase",
                fontWeight: "900",
                marginBlock: "0",
              }}
            >
              Apparel Design
            </p>
          </AccordionSummary>
          <AccordionDetails sx={{ background: "black" }}>
            <ApparelDesign />
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <p
              style={{
                fontFamily: "Montserrat",
                textTransform: "uppercase",
                fontWeight: "900",
                marginBlock: "0",
              }}
            >
              Blogpost Image Design
            </p>
          </AccordionSummary>
          <AccordionDetails sx={{ background: "black" }}>
            <Gallery
              files={"blogpost-images"}
              galleryStyle={galleryStyles.nonApparel}
            />
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <p
              style={{
                fontFamily: "Montserrat",
                textTransform: "uppercase",
                fontWeight: "900",
                marginBlock: "0",
              }}
            >
              Book Cover Design
            </p>
          </AccordionSummary>
          <AccordionDetails sx={{ background: "black" }}>
            <Gallery
              files={"book-covers"}
              galleryStyle={galleryStyles.nonApparel}
            />
          </AccordionDetails>
        </Accordion>
      </>
    );
  if (currentModule === "ApparelDesign") return <ApparelDesign />;

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
