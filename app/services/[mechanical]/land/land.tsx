import Image from "next/image";
import React from "react";
import style from "./style.module.scss";
export function Land({ info }: any) {
  console.log(info);
  const description = info.description;

  return (
    <article className={style.article}>
      <aside className={style.content}>
        <h1>
          {" "}
          <span className="sub-title">WE ARE EXPERTS AT</span>{" "}
          <span>{info.title}</span>
        </h1>

        {description.map((item: any) => (
          <>
            <p key={Math.random()}>
              <span id="ico">
                {" "}
                <Image
                  className="imgIcon"
                  fill
                  src={"/imgIcon/Icon material-control-point.svg"}
                  alt="image goes here"
                />{" "}
              </span>{" "}
              {item}
            </p>
          </>
        ))}

        {/* <div className={style.buttonArea}>
          <span id="btn">READ MORE</span>
          <span id="download">
            <span className="download-btn">+</span> DOWNLOAD COMPANY PROFILE
          </span>
        </div> */}
      </aside>

      <span className={style.scroll}>scroll down +++</span>
    </article>
  );
}
