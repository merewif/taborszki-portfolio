/* eslint-disable @next/next/no-img-element */
import Backdrop from '@mui/material/Backdrop';
import Button from '@mui/material/Button';
import Fade from '@mui/material/Fade';
import Modal from '@mui/material/Modal';
import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import styles from './Loretracker.module.scss';
import GitHubIcon from '@mui/icons-material/GitHub';
import CollectionsIcon from '@mui/icons-material/Collections';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import InsertLinkIcon from '@mui/icons-material/InsertLink';

export default function Loretracker() {
  const [openSWGallery, setOpenSWGallery] = useState(false);

  return (
    <div className={styles.card}>
      <div className={styles.featuredImage}>
        <img
          src='./images/loretracker/0.png'
          style={{ width: '97%', float: 'none' }}
          alt=''
        />

        <div className={styles.buttonContainer}>
          <Button
            onClick={() => setOpenSWGallery(true)}
            startIcon={<CollectionsIcon />}
          >
            Gallery
          </Button>
          <Button
            startIcon={<GitHubIcon />}
            component='a'
            href='https://github.com/merewif/star-wars-loretracker'
            target='_blank'
            rel='noopener noreferrer'
          >
            View the Source Code
          </Button>
          <br />
          <Button
            sx={{ width: '97% !important' }}
            startIcon={<InsertLinkIcon />}
            component='a'
            href='https://star-wars-loretracker.vercel.app/'
            target='_blank'
            rel='noopener noreferrer'
          >
            Visit the Site
          </Button>
        </div>
      </div>
      <div className={styles.info}>
        <h1>Star Wars Loretracker</h1>
        <h3>About</h3>
        <p>
          The Loretracker is a website to help Star Wars fans keep track of
          their reading list and watchlist.
        </p>
        <h3>Background</h3>
        <p>
          Star Wars has a gargantuan extended universe with an inexhaustible
          flood of content. Some time after I began my journey of discovering
          the extended universe I began feeling lost in the endless ocean of
          content - movies, series, comics, books, video games. I was using
          Goodreads to track books but I was also interested in other media that
          Goodreads didn&apos;t accomodate, so I thought I should build my own,
          and so I did. I shared the project with Star Wars fans on Reddit who
          really appreciated it and gave me valuable feedback on bugs and
          features they would like to see, which I implemented right away.
        </p>
        <h3>technical details</h3>
        <p>
          The Loretracker was developed using <strong>React</strong> with{' '}
          <strong>Next.js</strong> and <strong>TypeScript</strong>. The frontend
          is hosted on Vercel. The UI uses <strong>MUI </strong>Components and
          the <strong>Lodash </strong>
          library helps in filtering and sorting the data.
        </p>

        <Modal
          open={openSWGallery}
          onClose={() => setOpenSWGallery(false)}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={openSWGallery}>
            <div>
              <IconButton
                aria-label='close'
                onClick={() => setOpenSWGallery(false)}
                sx={{
                  position: 'absolute',
                  right: 8,
                  top: 8,
                  color: 'white',
                }}
              >
                <CloseIcon />
              </IconButton>
              <div className={styles.galleryContainer}>
                <Carousel>
                  <div className={styles.galleryImage}>
                    <img src='./images/loretracker/1.png' alt='' />
                    <p>Material UI components prettify the user interface.</p>
                  </div>
                  <div>
                    <img src='./images/loretracker/2.png' alt='' />
                    <p>
                      Titles are loaded into the array that the user can search.
                    </p>
                  </div>
                  <div>
                    <img src='./images/loretracker/3.png' alt='' />
                    <p>
                      The user can filter the results to see only canon or
                      non-canon, finished or unfinished entries, along with
                      entries by specific creators.
                    </p>
                  </div>
                  <div>
                    <img src='./images/loretracker/4.png' alt='' />
                    <p>The user can choose from various sorting parameters.</p>
                  </div>
                  <div>
                    <img src='./images/loretracker/5.png' alt='' />
                    <p>Hover zoom is provided by a single line of css.</p>
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
