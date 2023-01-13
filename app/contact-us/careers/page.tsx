import React from "react";
import { Land } from "./land/land";
import { VisionMission } from "./story/visionMission";
import style from "./story/style.module.scss";

export default function page() {
  return (
    <>
      <Land />
      <VisionMission />{" "}
    </>
  );
}
