import React from "react";
import style from "./style.module.scss";
export function Land({}) {
  return (
    <article className={style.article}>
      <aside className={style.content}>
        <h1>
          {" "}
          <span className="sub-title">WE ARE EXPERTS AT</span>{" "}
          <span>
            We are committed to providing our customers with the very best
            engineering services
          </span>
        </h1>
        {/* 
        <p>
          Established in 2019 by Mr Lot Mucavele who has over 10 years
          experience in engineering and project management fields. We service
          our clients with the highest .
        </p> */}

        <div className={style.buttonArea}>
          {/* <span id="btn">READ MORE</span> */}
          <span id="download">
            <span className="download-btn">+</span> DOWNLOAD COMPANY PROFILE
          </span>
        </div>

        <span id="scroll">scroll down +++</span>
      </aside>

      <aside className="scroll-area">keke</aside>
    </article>
  );
}
