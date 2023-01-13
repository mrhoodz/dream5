import "./globals.scss";
import "./commons.scss";
import style from "./layout.module.scss";
import Image from "next/image";

import Link from "next/link";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />

      <body>
        <header className={style.header}>
          <address className={style.contactInfo}>
            <span className={style.locationAddress}>
              MEERKAT PLAZA NO 2, 28 ABSES STREET, KATHU
            </span>

            <span>
              <span id="info-email">info@5Starengineering.co.za</span>

              <span className={style.phoneNumber}>053-753-1404</span>
            </span>
          </address>

          <div className={style.navBar}>
            <span className={style.mainLogo}>
              <img src={"/logo png.svg"} alt="logo goes here" />
              <img src={"/logo text.svg"} alt="logo goes here" />
            </span>

            <nav>
              <Link className={style.link} href="">
                HOME
              </Link>
              <Link className={style.link} href="/#services">
                SERVICES
              </Link>
              <Link className={style.link} href="/about-us">
                ABOUT US
              </Link>
              <Link className={style.link} href="contact-us/careers">
                CAREERS
              </Link>
            </nav>

            <Link className={style.getQuote} href="/contact-us">
              {" "}
              GET A QUOTE
            </Link>
          </div>
        </header>

        {children}

        <footer className={style.footer}>
          <aside className={style.vision}>
            <h1>"PROFIT, FOR A BETTER FUTURE"</h1>
            <p>Lot Mucavele / Director</p>
          </aside>

          <aside className={style.bottomNav}>
            <div className={style.company}>
              <h2>Company</h2>
              <Link className={style.Link} href={"/"}>
                HOME
              </Link>
              <Link className={style.Link} href={"/"}>
                ABOUT US
              </Link>
              <Link className={style.Link} href={"/"}>
                SERVICES
              </Link>
              <Link className={style.Link} href={"/"}>
                CAREERS
              </Link>
            </div>

            <div className={style.company}>
              <h2>Services</h2>
              <Link className={style.Link} href={"/"}>
                Mechanical and Civil Constrution
              </Link>
              <Link className={style.Link} href={"/"}>
                Renewable Energy
              </Link>
              <Link className={style.Link} href={"/"}>
                Agricultural Engineering
              </Link>
              <Link className={style.Link} href={"/"}>
                Workshop Equipment Supply
              </Link>
            </div>

            <div className={style.logoAddress}>
              <span className={style.mainLogo}>
                <img src={"/logo png.svg"} alt="logo goes here" />
                <img src={"/logo text.svg"} alt="logo goes here" />
              </span>

              <address className={style.contactInfo}>
                <span className={style.locationAddress}>
                  MEERKAT PLAZA NO 2, 28 ABSES STREET, KATHU
                </span>

                <span id="info-email">info@5Starengineering.co.za</span>

                <span className={style.phoneNumber}>053-753-1404</span>
              </address>
            </div>
          </aside>

          <div className={style.outro}>
            <span>5 Star Engineering Solutions </span>

            <span>2023© </span>

            <span> Developed by: JuggleAfrica 071 9353 205</span>
          </div>
        </footer>
      </body>
    </html>
  );
}
