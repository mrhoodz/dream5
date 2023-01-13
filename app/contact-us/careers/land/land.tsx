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
            Meerkat Plaza no 1 <br />
            28 Asbes Street, <br />
            Kathu
          </span>
        </h1>

        <p>
          <span id="ico">•</span> sales@5starengineering.co.za <br />
        </p>
        <p>
          <span>•</span> sales@5starengineering.co.za <br />
        </p>
        <p>
          <span>•</span> sales@5starengineering.co.za <br />
        </p>

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
