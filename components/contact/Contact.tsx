import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import Button from "@mui/material/Button";
import DownloadIcon from "@mui/icons-material/Download";
import { Email } from "react-obfuscate-email";
import styles from "./Contact.module.scss";

export default function Contact() {
  const downloadResume = () => {
    window.open("./Balint-Taborszki-CV-small.pdf", "_blank");
  };

  return (
    <div className={styles.contacts}>
      <div>
        <AlternateEmailIcon />
        <p>
          <Email email="taborszkib@gmail.com">taborszkib@gmail.com</Email>
        </p>
      </div>
      <div>
        <LocalPhoneIcon />
        <p>
          <a href="tel:+36702181428" rel="noopener noreferrer">
            +36 70 218 1428
          </a>
        </p>
      </div>
      <div>
        <LinkedInIcon />
        <p>
          <a href="https://www.linkedin.com/in/taborszki" target="_blank" rel="noopener noreferrer">
            Bálint Táborszki
          </a>
        </p>
      </div>
      <div>
        <GitHubIcon />
        <p>
          <a href="https://github.com/merewif?tab=repositories" target="_blank" rel="noopener noreferrer">
            Merewif
          </a>
        </p>
      </div>
      {/* <Button
        variant="contained"
        endIcon={<DownloadIcon />}
        sx={{ width: "100%", marginTop: "20px" }}
        onClick={downloadResume}>
        Download Resume
      </Button> */}
    </div>
  );
}
