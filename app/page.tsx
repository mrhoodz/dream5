import { Story } from "./(firstpage)/story/story";
import { Services } from "./(firstpage)/services/services";
import { Partners } from "./(firstpage)/partners/partners";
import { Care } from "./(firstpage)/care/care";
import { Land } from "./(firstpage)/land/land";
// import Image from "next/image";
import { Inter } from "@next/font/google";
// import style from "./commons.scss";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Land />

      <Care />

      <Partners />


      <Services />

      <Story />
    </>
  );
}
