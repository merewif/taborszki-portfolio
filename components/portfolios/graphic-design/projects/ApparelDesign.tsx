/* eslint-disable @next/next/no-img-element */
import React from 'react';
import styles from '../../../../styles/ApparelDesign.module.scss';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Masonry from '@mui/lab/Masonry';
import { styled } from '@mui/material/styles';

const Label = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(0.5),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  borderBottomLeftRadius: 0,
  borderBottomRightRadius: 0,
}));

export default function ApparelDesign() {
  const IMAGES = [
    { img: '../images/apparel-design/1.png' },
    { img: '../images/apparel-design/2.png' },
    { img: '../images/apparel-design/3.png' },
    { img: '../images/apparel-design/7.webp' },
    { img: '../images/apparel-design/5.png' },
    { img: '../images/apparel-design/6.png' },
    { img: '../images/apparel-design/4.png' },
  ];
  return (
    <>
      <Box sx={{ width: '100%' }}>
        <Masonry columns={3} spacing={2}>
          {IMAGES.map((item, index) => (
            <div key={index} className={styles.imageContainer}>
              <img
                src={`${item.img}?w=162&auto=format`}
                srcSet={`${item.img}?w=162&auto=format&dpr=2 2x`}
                loading='lazy'
                style={{
                  borderBottomLeftRadius: 4,
                  borderBottomRightRadius: 4,
                  display: 'block',
                  width: '100%',
                }}
                alt=''
              />
            </div>
          ))}
        </Masonry>
      </Box>
    </>
  );
}
