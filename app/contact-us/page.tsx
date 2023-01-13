import React from 'react'
import { Care } from "./care/care";
import { Land } from "./land/land";
import { Partners } from "./partners/partners";
import { Services } from "./services/services";
import { Story } from "./story/story";
import style from "./story/style.module.scss";
import { VisionMission } from "./story/visionMission";

export default function page() {
  return (
    <>
      <Land />


      <VisionMission />
    </>  )
}
