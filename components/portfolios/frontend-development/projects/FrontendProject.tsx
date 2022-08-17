/* eslint-disable @next/next/no-img-element */
import Backdrop from "@mui/material/Backdrop";
import Button from "@mui/material/Button";
import Fade from "@mui/material/Fade";
import Modal from "@mui/material/Modal";
import React, { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styles from "./FrontendProject.module.scss";
import GitHubIcon from "@mui/icons-material/GitHub";
import CollectionsIcon from "@mui/icons-material/Collections";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import InsertLinkIcon from "@mui/icons-material/InsertLink";

interface FrontendProjectProps {
  data: {
    featuredImage: string;
    repoLink: string;
    siteLink: string;
    additionalButton?: {
      icon: any;
      text: string;
      link: string;
    };
    info: JSX.Element;
    gallery: Array<{ image: string; description: string }>;
  };
}

export default function FrontendProject({ data }: FrontendProjectProps) {
  const [openSWGallery, setOpenSWGallery] = useState(false);

  return (
    <div className={styles.card}>
      <div className={styles.controls}>
        <img className={styles.featuredImage} src={data.featuredImage} style={{ width: "97%", float: "none" }} alt="" />
        <div className={styles.buttonContainer}>
          <Button onClick={() => setOpenSWGallery(true)} startIcon={<CollectionsIcon />}>
            Gallery
          </Button>
          <Button
            startIcon={<GitHubIcon />}
            component="a"
            href={data.repoLink}
            target="_blank"
            rel="noopener noreferrer">
            View the Source Code
          </Button>
          <br />
          <Button
            sx={{ width: data.additionalButton ? "auto" : "97% !important" }}
            startIcon={<InsertLinkIcon />}
            component="a"
            href={data.siteLink}
            target="_blank"
            rel="noopener noreferrer">
            Visit the Site
          </Button>
          {data.additionalButton ? (
            <Button
              startIcon={data.additionalButton.icon}
              component="a"
              href={data.additionalButton.link}
              target="_blank"
              rel="noopener noreferrer">
              {data.additionalButton.text}
            </Button>
          ) : null}
        </div>
      </div>
      <div className={styles.info}>
        {data.info}

        <Modal
          open={openSWGallery}
          onClose={() => setOpenSWGallery(false)}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
            sx: { backgroundColor: "rgba(0, 0, 0, 0.8)" },
          }}>
          <Fade in={openSWGallery}>
            <div>
              <IconButton
                aria-label="close"
                onClick={() => setOpenSWGallery(false)}
                sx={{
                  position: "absolute",
                  right: 8,
                  top: 8,
                  color: "white",
                }}>
                <CloseIcon />
              </IconButton>
              <div className={styles.galleryContainer}>
                <Carousel>
                  {data.gallery.map((galleryElement, index) => {
                    return (
                      <div className={styles.galleryImage} key={index}>
                        <img src={galleryElement.image} alt="" />
                        <p>{galleryElement.description}</p>
                      </div>
                    );
                  })}
                </Carousel>
              </div>
            </div>
          </Fade>
        </Modal>
      </div>
    </div>
  );
}
