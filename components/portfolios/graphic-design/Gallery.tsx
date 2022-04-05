/* eslint-disable @next/next/no-img-element */
import React from "react";
import useSWR from "swr";

export default function Gallery({ files, galleryStyle }) {
  // const fetcher = (url) => fetch(url).then((res) => res.json());
  //  const { data } = useSWR("/api/images", fetcher);

  return (
    <>
      <div className={galleryStyle}>
        {files.map((imgPath: string, i: number) => (
          <img src={imgPath} key={i} alt="" />
        ))}
      </div>
    </>
  );
}
