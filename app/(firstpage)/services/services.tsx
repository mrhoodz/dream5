import Link from "next/link";
import React from "react";
import { Rest } from "../../data";
import style from "./style.module.scss";

export function Services({}) {
  interface servicesProps {
    image?: string;
    title?: string;
    link?: string;
  }

  const services = Rest;

  return (
    <article className={style.article}>
      <div className={style.info}>
        <h2>Our Services</h2>

        <span id="btn">Contact us</span>
      </div>
      <p>
        We have a passion for delivering value to our clients through offering
        affordable high quality engineering skills and superior client
        experience.
      </p>

      <aside className={style.servicesArea}>
        {services.map((item: any) => (
          <Link
            href={"/services/" + item.link}
            key={Math.random()}
            className={style.serviceCard}
          >
            <div className="imgContainer">
              <img
                className={"img"}
                src={"/pictures/" + item.link + item.images[0]}
                alt="img goes here"
              />
            </div>

            <div className={style.serviceInfo}>{item.title}</div>
          </Link>
        ))}
      </aside>
    </article>
  );
}
