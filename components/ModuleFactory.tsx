import React, { useState, useEffect } from 'react';

// Frontend Portfolio
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ListOfProjects from './portfolios/frontend-development/ListOfProjects';
import VisualNovel from './portfolios/frontend-development/VisualNovel';
import Loretracker from './portfolios/frontend-development/Loretracker';
import Plotter from './portfolios/frontend-development/Plotter';

// Graphic Design Portfolio
import ApparelDesign from './portfolios/graphic-design/ApparelDesign';
import Gallery from './portfolios/graphic-design/Gallery';

// Translation Portfolio
import Publishing from './portfolios/book-publishing/Publishing';
import Excerpts from './portfolios/translation/Excerpts';
import ListOfTranslatedBooks from './portfolios/translation/ListOfTranslatedBooks';

// Welcome Page
import AboutMe from './AboutMe';

// CSS
import galleryStyles from '../styles/Gallery.module.scss';

// MUI

interface ModuleFactoryProps {
  currentModule: string;
}

export default function ModuleFactory({ currentModule }: ModuleFactoryProps) {
  // Welcome Page
  if (currentModule === 'AboutMe') return <AboutMe />;

  // Frontend Portfolio
  if (currentModule === 'frontend-portfolio') {
    return (
      <>
        <Plotter />
        <VisualNovel />
        <Loretracker />
      </>
    );
  }
  if (currentModule === 'ListOfProjects') return <ListOfProjects />;
  if (currentModule === 'VisualNovel') return <VisualNovel />;
  if (currentModule === 'Loretracker') return <Loretracker />;
  if (currentModule === 'Plotter') return <Plotter />;

  // Graphic Design Portfolio
  if (currentModule === 'graphic-design-portfolio') {
    const bookcovers = [
      '.\\images\\book-covers/1.png',
      '.\\images\\book-covers/10.png',
      '.\\images\\book-covers/2.png',
      '.\\images\\book-covers/3.png',
      '.\\images\\book-covers/4.png',
      '.\\images\\book-covers/5.png',
      '.\\images\\book-covers/6.png',
      '.\\images\\book-covers/7.png',
      '.\\images\\book-covers/8.png',
      '.\\images\\book-covers/9.jpg',
    ];
    const blogcovers = [
      '.\\images\\blogpost-images/1.webp',
      '.\\images\\blogpost-images/10.webp',
      '.\\images\\blogpost-images/11.webp',
      '.\\images\\blogpost-images/12.webp',
      '.\\images\\blogpost-images/13.webp',
      '.\\images\\blogpost-images/15.webp',
      '.\\images\\blogpost-images/16.webp',
      '.\\images\\blogpost-images/17.webp',
      '.\\images\\blogpost-images/18.webp',
      '.\\images\\blogpost-images/19.webp',
      '.\\images\\blogpost-images/2.webp',
      '.\\images\\blogpost-images/20.webp',
      '.\\images\\blogpost-images/21.webp',
      '.\\images\\blogpost-images/22.webp',
      '.\\images\\blogpost-images/23.webp',
      '.\\images\\blogpost-images/24.webp',
      '.\\images\\blogpost-images/25.webp',
      '.\\images\\blogpost-images/26.webp',
      '.\\images\\blogpost-images/3.webp',
      '.\\images\\blogpost-images/4.webp',
      '.\\images\\blogpost-images/5.webp',
      '.\\images\\blogpost-images/6.webp',
      '.\\images\\blogpost-images/7.webp',
      '.\\images\\blogpost-images/9.webp',
    ];
    return (
      <>
        <div
          style={{
            marginInline: '20vw',
            textAlign: 'justify',
            textAlignLast: 'center',
            marginBottom: '20px',
          }}
        >
          <p>
            Over a 3 year period I taught myself the basics of graphic design,
            with a heavy emphasis on typography, using primarily Adobe Photoshop
            and Adobe Illustrator.
          </p>
          <p>
            Originally it started out from the need to create visually
            captivating thumbnails for blogposts. I then went on to create
            designs for various items of clothing that enjoyed a modicum of
            success - customers bought them all over the world from the United
            States to India. Lastly I went on to design book covers for dozens
            of books.
          </p>
        </div>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: 'white' }} />}
            aria-controls='panel1a-content'
            id='panel1a-header'
            sx={{
              background: 'black',
              color: 'white',
              borderBottom: '1px solid white',
            }}
          >
            <p
              style={{
                fontFamily: 'Montserrat',
                textTransform: 'uppercase',
                fontWeight: '900',
                marginBlock: '0',
              }}
            >
              Apparel Design
            </p>
          </AccordionSummary>
          <AccordionDetails sx={{ background: 'black' }}>
            <ApparelDesign />
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: 'white' }} />}
            aria-controls='panel1a-content'
            id='panel1a-header'
            sx={{
              background: 'black',
              color: 'white',
              borderBottom: '1px solid white',
            }}
          >
            <p
              style={{
                fontFamily: 'Montserrat',
                textTransform: 'uppercase',
                fontWeight: '900',
                marginBlock: '0',
              }}
            >
              Blogpost Image Design
            </p>
          </AccordionSummary>
          <AccordionDetails sx={{ background: 'black' }}>
            <Gallery
              files={blogcovers}
              galleryStyle={galleryStyles.nonApparel}
            />
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: 'white' }} />}
            aria-controls='panel1a-content'
            id='panel1a-header'
            sx={{
              background: 'black',
              color: 'white',
              borderBottom: '1px solid white',
            }}
          >
            <p
              style={{
                fontFamily: 'Montserrat',
                textTransform: 'uppercase',
                fontWeight: '900',
                marginBlock: '0',
              }}
            >
              Book Cover Design
            </p>
          </AccordionSummary>
          <AccordionDetails sx={{ background: 'black' }}>
            <Gallery
              files={bookcovers}
              galleryStyle={galleryStyles.nonApparel}
            />
          </AccordionDetails>
        </Accordion>
      </>
    );
  }
  if (currentModule === 'ApparelDesign') return <ApparelDesign />;

  // Translation Portfolio
  if (currentModule === 'translation-portfolio') {
    return (
      <>
        <Publishing />
        <Excerpts />
        <ListOfTranslatedBooks />
      </>
    );
  }
  if (currentModule === 'Excerpts') return <Excerpts />;
  if (currentModule === 'Publishing') return <Publishing />;
  if (currentModule === 'ListOfTranslatedBooks') {
    return <ListOfTranslatedBooks />;
  }

  return null;
}
