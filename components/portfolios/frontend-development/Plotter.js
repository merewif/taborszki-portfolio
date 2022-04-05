import Backdrop from "@mui/material/Backdrop";
import Button from "@mui/material/Button";
import Fade from "@mui/material/Fade";
import Modal from "@mui/material/Modal";
import React, { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styles from "../../../styles/Frontend.module.scss";
import GitHubIcon from "@mui/icons-material/GitHub";
import CollectionsIcon from "@mui/icons-material/Collections";
import DownloadIcon from "@mui/icons-material/Download";
import InsertLinkIcon from "@mui/icons-material/InsertLink";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

export default function Plotter() {
  const [openGallery, setOpenGallery] = useState(false);

  return (
    <div className={styles.card}>
      <div className={styles.featuredImage}>
        <img src="./images/plotter/0.png" />
        <div className={styles.buttonContainer}>
          <Button
            onClick={() => setOpenGallery(true)}
            startIcon={<CollectionsIcon />}
          >
            Gallery
          </Button>
          <Button
            startIcon={<GitHubIcon />}
            component="a"
            href="https://github.com/merewif/plotter"
            target="_blank"
            rel="noopener noreferrer"
          >
            View the Source Code
          </Button>
          <br />
          <Button
            startIcon={<InsertLinkIcon />}
            component="a"
            href="https://plotter-f6b18.web.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit the Site
          </Button>
          <Button
            startIcon={<DownloadIcon />}
            component="a"
            href="https://github.com/merewif/plotter/releases/tag/v1.0.0"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download as .exe
          </Button>
        </div>
      </div>
      <div className={styles.info}>
        <h1>Plotter</h1>
        <h3>About</h3>
        <p>
          Plotter is a web application designed to help writers visualize their
          plot charts, systemize their worldbuilding and brainstorm about their
          characters.
        </p>
        <h3>Background</h3>
        <p>
          The inspiration for the project found me when I began working on my
          own novel and I thought it would be really useful to have a tool with
          which I could visually represent my plot on a line chart. I tried some
          other websites created similarly for authors, but they were either so
          bloated that there was an actual learning curve to figuring out how to
          use them, or they simply didn&apos;t have what I was looking for. So I
          decided to make my own and the idea quickly expanded into a{" "}
          <strong>Characters</strong>, a <strong>Plot</strong> and a{" "}
          <strong>Worldbuilding</strong> component after a few days of
          brainstorming.
        </p>
        <h3>technical details</h3>
        <p>
          Plotter is written in <strong>React</strong>; in fact it was the first
          project I wrote using React and coding it was my way of learning its
          ins and outs. Because I was just familiarizing myself with React, some{" "}
          <strong>jquery</strong> was used to manipulate CSS styles based on
          user interactions, although in hindsight this should have been done by
          simply toggling CSS classes. It is a{" "}
          <strong>serverless application</strong> that stores the user data in
          the localStorage. The user interface utilizes several{" "}
          <strong>Material UI</strong> components. The application is hosted on{" "}
          <strong>Google Firebase</strong>. The executable file was created with{" "}
          <strong>Electron</strong>. The aesthetics of the application follow{" "}
          <strong>Minimalist design</strong> principles to minimize
          distractions.
        </p>

        <Modal
          open={openGallery}
          onClose={() => setOpenGallery(false)}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={openGallery}>
            <div>
              <IconButton
                aria-label="close"
                onClick={() => setOpenGallery(false)}
                sx={{
                  position: "absolute",
                  right: 8,
                  top: 8,
                  color: "white",
                }}
              >
                <CloseIcon />
              </IconButton>
              <div className={styles.galleryContainer}>
                <Carousel>
                  <div className={styles.galleryImage}>
                    <img src="./images/plotter/1.png" />
                    <p>
                      Users are prompted to think about the various aspects of
                      their world with the placeholder texts of the input
                      fields.
                    </p>
                  </div>
                  <div>
                    <img src="./images/plotter/2.png" />
                    <p>
                      Users can create their custom story charts using the
                      embedded Google Line Chart function.
                    </p>
                  </div>
                  <div>
                    <img src="./images/plotter/3.png" />
                    <p>
                      Users can add images they associate with their characters,
                      their plot or their worldbuilding entries using the
                      <strong> MOODBOARD</strong> component.
                    </p>
                  </div>
                  <div>
                    <img src="./images/plotter/4.png" />
                    <p>
                      Red box shadow reminds the user to save their progress if
                      there are unsaved changes.
                    </p>
                  </div>
                  <div>
                    <img src="./images/plotter/5.png" />
                    <p>
                      MUI Components are used liberally throughout the
                      application.
                    </p>
                  </div>
                </Carousel>
              </div>
            </div>
          </Fade>
        </Modal>
      </div>
    </div>
  );
}
