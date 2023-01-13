import React from "react";
import style from "./style.module.scss";

export function Partners({}) {
  const images: any = [
    "/partners/logo1.png",
    "/partners/logo4.png",
    "/partners/logo3.png",
    "/partners/logo2.png",
  ];

  return (
    <article className={style.ourPartners}>
      <h2>OUR PARTNERS</h2>

      <div className="partners">
        <span className="partner">
          {images.map((item: any) => (
            <img key={Math.random()} src={item} alt="img goes here" />
          ))}
        </span>
      </div>
    </article>
  );
}
