import React from "react";
import style from "./style.module.scss";

export function ServiceSection({ info }: any) {


const images = info.images; 

  return (


    <section className={style.servicesSection}>
      <aside className={style.serviceCardsAreas}>

{images.map( (item:any) => (<>

  <div className={style.imgContainer}>

<p>{item}</p>


  </div>

</>)  )  }



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
