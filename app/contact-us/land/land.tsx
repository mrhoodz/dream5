import Image from "next/image";
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
          <span id="ico">
            {" "}
            <Image
              className="imgIcon"
              fill
              src={"/imgIcon/Icon zocial-email.svg"}
              alt="image goes here"
            />{" "}
          </span>{" "}
          sales@5starengineering.co.za
        </p>

        <p>
          <span id="ico">
            {" "}
            <Image
              className="imgIcon"
              fill
              src={"/imgIcon/Icon awesome-info-circle.svg"}
              alt="image goes here"
            />{" "}
          </span>{" "}
          info@5starengineering.co.za
        </p>

        <p>
          <span id="ico">
            {" "}
            <Image
              className="imgIcon"
              fill
              src={"/imgIcon/Icon ionic-ios-call.svg"}
              alt="image goes here"
            />{" "}
          </span>{" "}
          053 753 1404
        </p>

        {/* <div className={style.buttonArea}>
          <span id="btn">READ MORE</span>
          <span id="download">
            <span className="download-btn">+</span> DOWNLOAD COMPANY PROFILE
          </span>
        </div> */}

        <span id="scroll">scroll down +++</span>
      </aside>

      <aside className="scroll-area">keke</aside>
    </article>
  );
}
