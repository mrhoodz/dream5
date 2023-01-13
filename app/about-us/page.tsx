import React from "react";
import { Care } from "./care/care";
import { Land } from "./land/land";
import { Partners } from "./partners/partners";
import { Services } from "./services/services";
import { Story } from "./story/story";
import style from "./story/style.module.scss";
import { VisionMission } from "./story/visionMission";

export default function page() {
  interface storyProps {
    style?: any;
    h2?: string;
    p?: string;
    btn?: string;
  }

  const storyInfo: storyProps[] = [
    {
      style: style.storyInfoA,
      h2: "We are a 100% black owned engineering company with a level 1 B-BBEE",
      p: "Established in 2019 by Mr Lot Mucavele who has over 10 years experience in engineering and project management fields. We service our clients with the highest quality of workmanship. Our passion is to deliver value to our clients by offering affordable high quality engineering. Skills and a superior customer experience. We care about our team members and suppliers with respect, while recognizing the significance of diversity.",
      btn: "OUR SERVICES",
    },

    {
      style: style.storyInfoB,
      h2: "FOUNDED IN PASSION",
      p: "Established in 2019 by Mr Lot Mucavele who has over 10 years experience in engineering and project management fields. We service our clients with the highest quality of workmanship. Our passion is to deliver value to our clients by offering affordable high quality engineering. Skills and a superior customer experience. We care about our team members and suppliers with respect, while recognizing the significance of diversity.",
      btn: "OUR SERVICES",
    },
  ];

  return (
    <>
      <Land />

      <Story type={storyInfo[0]} />

      <Services />

      <Care />

      <Partners />

      <Story type={storyInfo[1]} />

      <VisionMission />
    </>
  );
}
