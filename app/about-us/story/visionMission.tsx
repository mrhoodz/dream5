import style from "./style.module.scss";

export function VisionMission({}) {
  return (
    <section className={style.visionMission}>
      <aside className={style.sideA}>
        <h2>OUR VISION</h2>

        <p>
          {" "}
          Our mission is to deliver personalized customer attention and
          efficiency while providing top-quality engineering services. We are
          committed to excellence in everything we do and strive to exceed our
          customers' expectations.{" "}
        </p>

        <div className={style.imgContainer}>f</div>
      </aside>

      <aside className={style.sideA}>
        <h2>OUR MISSION</h2>

        <p>
          {" "}
          We believe that the sustainable growth of our business is directly
          linked to our involvement in local community upliftment and
          empowerment programs, as well as environmentally friendly initiatives.
          We are dedicated to making a positive impact in the world through our
          work{" "}
        </p>

        <div className={style.imgContainer}>f</div>
      </aside>
    </section>
  );
}
