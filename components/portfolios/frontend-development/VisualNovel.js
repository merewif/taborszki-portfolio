import Backdrop from "@mui/material/Backdrop";
import Button from "@mui/material/Button";
import Fade from "@mui/material/Fade";
import Modal from "@mui/material/Modal";
import React, { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import styles from "../../../styles/Frontend.module.scss";
import GitHubIcon from "@mui/icons-material/GitHub";
import CollectionsIcon from "@mui/icons-material/Collections";
import DownloadIcon from "@mui/icons-material/Download";
import InsertLinkIcon from "@mui/icons-material/InsertLink";

export default function VisualNovel() {
  const [openGallery, setOpenGallery] = useState(false);

  return (
    <div className={styles.card}>
      <div className={styles.info}>
        <h1>Beyond Mortal: The Visual Novel</h1>
        <h3>What is Beyond Mortal?</h3>
        <p>Beyond Mortal is .</p>
        <h3>Why did I write it?</h3>
        <p>....</p>
        <h3>technical details</h3>
        <p>....</p>

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
            <div className={styles.galleryContainer}>
              <Carousel>
                <div className={styles.galleryImage}>
                  <img src="./images/beyond-mortal/1.png" />
                  <p>
                    Players can earn various achievements based on the choices
                    they make throughout the game.
                  </p>
                </div>
              </Carousel>
            </div>
          </Fade>
        </Modal>
      </div>
      <div className={styles.featuredImage}>
        <img src="./images/beyond-mortal/0.png" />
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
            href="https://github.com/merewif/tales-of-strange-aeons"
            target="_blank"
            rel="noopener noreferrer"
          >
            View the Source Code
          </Button>
          <br />
          <Button
            startIcon={<InsertLinkIcon />}
            component="a"
            href="https://merewif.github.io/tales-of-strange-aeons/game.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit the Game
          </Button>
          <Button
            startIcon={<InsertLinkIcon />}
            component="a"
            href="https://merewif.github.io/tales-of-strange-aeons/index.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit the Main Site
          </Button>
        </div>
      </div>
    </div>
  );
}
