import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import React from "react";
import ApparelDesign from "./projects/ApparelDesign";
import Gallery from "./projects/Gallery";
import styles from "./GraphicDesignPortfolio.module.scss";

export default function GraphicDesignPortfolio() {
  const bookcovers = [
    ".\\images\\book-covers/1-min.png",
    ".\\images\\book-covers/10-min.png",
    ".\\images\\book-covers/2-min.png",
    ".\\images\\book-covers/3-min.png",
    ".\\images\\book-covers/4-min.png",
    ".\\images\\book-covers/5-min.png",
    ".\\images\\book-covers/6-min.png",
    ".\\images\\book-covers/7-min.png",
    ".\\images\\book-covers/8-min.png",
    ".\\images\\book-covers/9-min.jpg",
  ];
  const blogcovers = [
    ".\\images\\blogpost-images/1.webp",
    ".\\images\\blogpost-images/10.webp",
    ".\\images\\blogpost-images/11.webp",
    ".\\images\\blogpost-images/12.webp",
    ".\\images\\blogpost-images/15.webp",
    ".\\images\\blogpost-images/16.webp",
    ".\\images\\blogpost-images/17.webp",
    ".\\images\\blogpost-images/18.webp",
    ".\\images\\blogpost-images/19.webp",
    ".\\images\\blogpost-images/2.webp",
    ".\\images\\blogpost-images/20.webp",
    ".\\images\\blogpost-images/21.webp",
    ".\\images\\blogpost-images/22.webp",
    ".\\images\\blogpost-images/23.webp",
    ".\\images\\blogpost-images/24.webp",
    ".\\images\\blogpost-images/25.webp",
    ".\\images\\blogpost-images/26.webp",
    ".\\images\\blogpost-images/3.webp",
    ".\\images\\blogpost-images/4.webp",
    ".\\images\\blogpost-images/5.webp",
    ".\\images\\blogpost-images/6.webp",
    ".\\images\\blogpost-images/7.webp",
    ".\\images\\blogpost-images/9.webp",
  ];

  return (
    <div className={styles.graphicDesignPortfolioContainer}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          sx={{
            background: "black",
            color: "white",
            borderBottom: "1px solid black",
          }}>
          <p
            style={{
              fontFamily: "Montserrat",
              textTransform: "uppercase",
              fontWeight: "900",
              marginBlock: "0",
            }}>
            Apparel Design
          </p>
        </AccordionSummary>
        <AccordionDetails sx={{ background: "black" }}>
          <ApparelDesign />
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          sx={{
            background: "black",
            color: "white",
            borderBottom: "1px solid black",
          }}>
          <p
            style={{
              fontFamily: "Montserrat",
              textTransform: "uppercase",
              fontWeight: "900",
              marginBlock: "0",
            }}>
            Blogpost Image Design
          </p>
        </AccordionSummary>
        <AccordionDetails sx={{ background: "black" }}>
          <Gallery files={blogcovers} />
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          sx={{
            background: "black",
            color: "white",
            borderBottom: "1px solid black",
          }}>
          <p
            style={{
              fontFamily: "Montserrat",
              textTransform: "uppercase",
              fontWeight: "900",
              marginBlock: "0",
            }}>
            Book Cover Design
          </p>
        </AccordionSummary>
        <AccordionDetails sx={{ background: "black" }}>
          <Gallery files={bookcovers} />
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
