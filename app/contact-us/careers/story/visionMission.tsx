import style from "./style.module.scss";

export function VisionMission({}) {
  return (
    <section className={style.visionMission}>
      <aside className={style.sideA}>
        <h2>CONTACT US</h2>

        <form>
          <label htmlFor="Name"></label>
          <input type="text" name="Name" placeholder="Name" />

          <label htmlFor="Email"></label>
          <input type="text" name="Email" placeholder="Email" />

          <label htmlFor="Message"></label>
          <input type="file" name="file" placeholder="Email" />

          <div className={style.buttonArea}>
            <button type="submit" id="btn">
              SUBMIT
            </button>
          </div>
        </form>
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
