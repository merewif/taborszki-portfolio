import React from "react";
import styles from "./AboutMe.module.scss";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import Button from "@mui/material/Button";
import DownloadIcon from "@mui/icons-material/Download";
import GoodreadsBookshelf from "react-goodreads-shelf";
import { Email } from "react-obfuscate-email";

export default function AboutMe() {
  const downloadResume = () => {
    window.open("./Balint-Taborszki-CV-small.pdf", "_blank");
  };

  return (
    <>
      <div className={styles.aboutContainer}>
        <div>
          <div className={styles.introduction}>
            {/* <p>
              Ever since I can remember I was always drawn toward aesthetic
              beauty as if it was my calling. I did judge books by their cover
              and I dabbled in all forms of art. It was this passion that guided
              me when I designed book covers, book layouts, or graphics for
              apparel and web content.
            </p>
            <p>
              Developing frontends is yet another outlet in which I can put my
              instinct toward the sublime and beautiful to good use and I find
              it a genuine joy to be able to sharpen and utilize my skills in
              that domain.
            </p>
            <p>
              My previous experience includes working as a freelance writer
              crafting articles and marketing copy for English clients,
              translating over 20 books and over 100 articles - including highly
              technical academic publications - from English to Hungarian on the
              topics of economic science, social philosophy and sociology,
              designing and publishing books in ebook and paperback formats, and
              designing apparel for a global customer base.
            </p> */}
          </div>
          <div className={styles.skillSectionContainer}>
            <h2>what I bring to the table</h2>
            <div className={styles.skillBox}>
              <div>
                <h4>Web Development</h4>
                <div className={styles.skills}>
                  <p>jQuery</p>
                  <p>JavaScript / TypeScript</p>
                  <p>CSS / SCSS / Tailwind CSS</p>
                  <p>Node.js</p>
                  <p>React</p>
                  <span>Next.js</span>
                  <p>Angular</p>
                  <p>Firebase</p>
                  <p>Supabase</p>
                  <p>WordPress</p>
                  <span>WooCommerce</span>
                  <span>Headless CMS</span>
                  <p>General Site Improvements</p>
                  <span>UX Research</span>
                  <span>GDPR Compliance Review</span>
                  <span>Search Engine Optimization</span>
                  <span>Progressive Web Applications</span>
                  <span>Website Performance Optimization</span>
                  <p>HTML Email Template Development</p>
                </div>
              </div>
              <div>
                <h4>Visual Design</h4>
                <div className={styles.skills}>
                  <p>Photoshop</p>
                  <p>Graphic Design </p>
                  <span>UI</span>
                  <span>Web</span>
                  <span>Logo</span>
                  <span>Print</span>
                  <span>Apparel</span>
                  <span>Merchandise</span>
                  <span>Typography</span>
                  <span>Book Cover</span>
                  <span>Book Interior</span>
                </div>
              </div>
              <div>
                <h4>Publishing</h4>
                <div className={styles.skills}>
                  <p>Microsoft Word</p>
                  <p>Copywriting</p>
                  <p>Content Writing</p>
                  <p>Translation (Enligsh / Hungarian)</p>
                </div>
              </div>
              <div>
                <h4>Soft Skills</h4>
                <div className={styles.skills}>
                  <p>Communicating Design Decisions</p>
                  <p></p>
                </div>
              </div>
            </div>
          </div>
          {/* <h2>what i love</h2>
          <div className={styles.interests}>
            <p>
              I love creating things people find useful and valuable,and I love
              learning new skills that enable me to do so.
            </p>
            <p>I love striving for mastery of skills and flawless execution.</p>
            <p>I love being proud of a work well done.</p>
            <p>I love looking at anything beautiful and sublime.</p>
            <p>I love science fiction and fantasy.</p>
            <p>I love writing fiction and non-fiction alike.</p>
            <p>
              I love learning about any discipline of science, primarily
              economics, sociology, psychology and history.
            </p>
            <p>
              I love philosophy, with a peculiar interest in political and
              social philosophy.
            </p>
            <p>I love individual liberty as the highest political value.</p>
            <p>I love collecting mounts in World of Warcraft.</p>
            <p>I love cats, although my allergy disapproves of that.</p>
          </div> */}
          {/* <div className={styles.goodreadsContainer}>
            <div>
              <h2>
                <a
                  href="https://www.goodreads.com/review/list/31516165-b-lint-t-borszki?shelf=currently-reading"
                  target="_blank"
                  rel="noopener noreferrer">
                  What I&apos;m currently reading:
                </a>
              </h2>
              <GoodreadsBookshelf limit={5} shelf="currently-reading" userId="31516165" width="16%" />
            </div>
            <div>
              <h2>
                <a
                  href="https://www.goodreads.com/review/list/31516165-b-lint-t-borszki?shelf=read"
                  target="_blank"
                  rel="noopener noreferrer">
                  What I&apos;ve recently read:
                </a>
              </h2>
              <GoodreadsBookshelf limit={5} userId="31516165" width="16%" />
            </div>
          </div> */}
        </div>

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
          <Button
            variant="contained"
            endIcon={<DownloadIcon />}
            sx={{ width: "100%", marginTop: "20px" }}
            onClick={downloadResume}>
            Download Resume
          </Button>
        </div>
      </div>
    </>
  );
}
