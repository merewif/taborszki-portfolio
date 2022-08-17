/* eslint-disable @next/next/no-img-element */
import React from 'react';
import styles from '../../../styles/Gallery.module.scss';

interface GalleryProps {
  files: string[];
}

export default function Gallery({ files }: GalleryProps) {
  return (
    <>
      <div className={styles.nonApparel}>
        {files.map((imgPath: string, i: number) => (
          <img src={imgPath} key={i} alt='' />
        ))}
      </div>
    </>
  );
}
