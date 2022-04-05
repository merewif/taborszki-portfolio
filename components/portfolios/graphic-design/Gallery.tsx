/* eslint-disable @next/next/no-img-element */
import React from 'react';
import useSWR from 'swr';
import styles from '../../../styles/Gallery.module.scss';

interface GalleryProps {
  files: string[];
}

export default function Gallery({ files }: GalleryProps) {
  // const fetcher = (url) => fetch(url).then((res) => res.json());
  //  const { data } = useSWR("/api/images", fetcher);

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
