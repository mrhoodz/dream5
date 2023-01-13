import React from "react";
import style from "./style.module.scss";

export function Story({}) {
  return (
    <article className={style.article}>
      <div className={style.storyInfo}>
        <h2>
          We are a 100% black owned engineering company with a level 1 B-BBEE
        </h2>
        <span id="btn">OUR SERVICES</span>
      </div>

      <p>
        Established in 2019 by Mr Lot Mucavele who has over 10 years experience
        in engineering and project management fields. We service our clients
        with the highest quality of workmanship. Our passion is to deliver value
        to our clients by offering affordable high quality engineering. Skills
        and a superior customer experience. We care about our team members and
        suppliers with respect, while recognizing the significance of diversity.
      </p>


<aside className={style.imgAside}>




</aside>


    </article>
  );
}
