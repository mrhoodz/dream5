import React from "react";
import style from "./style.module.scss";

export function ServiceSection({ info }: any) {
  return (
    <section className={style.servicesSection}>
      <aside className={style.serviceCardsAreas}>
        <div className={style.imgContainer}>l</div>
        <div className={style.imgContainer}>l</div>
        <div className={style.imgContainer}>l</div>
        <div className={style.imgContainer}>l</div>
      </aside>

      <aside className={style.sidebar}>
        <h2>Our Other Services</h2>

        <ul>
          <li>Mechanical and Civil Construction</li>
          <li>Water Treatment</li>
        </ul>
      </aside>
    </section>
  );
}
