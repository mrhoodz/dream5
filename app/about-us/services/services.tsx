import React from "react";
import style from "./style.module.scss";

export function Services({}) {
  interface servicesProps {
    image?: string;
    title?: string;
    link?: string;
  }

  const services: servicesProps[] = [
    { image: "d", title: "Mechanical & Civil Construction", link: "d" },
    { image: "d", title: "Road Construction", link: "d" },
    { image: "d", title: "Mechanical & Civil Construction", link: "d" },
    { image: "d", title: "Mechanical & Civil Construction", link: "d" },
    { image: "d", title: "Mechanical & Civil Construction", link: "d" },
    { image: "d", title: "Mechanical & Civil Construction", link: "d" },
    { image: "d", title: "Mechanical & Civil Construction", link: "d" },
    { image: "d", title: "Mechanical & Civil Construction", link: "d" },
  ];

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
        {services.map((item) => (
          <div key={Math.random()} className={style.serviceCard}>
            <div className="service-img">
              <img src="d" alt="img goes here" />
            </div>

            <div className={style.serviceInfo}>{item.title}</div>
          </div>
        ))}
      </aside>
    </article>
  );
}
