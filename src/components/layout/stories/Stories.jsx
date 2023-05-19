import React from "react";
// import classNames from 'classnames';

import SubHeading from "../header/heading/SubHeading";
import StoryCard from "./StoryCard";
import Button from "../../common/Button";
import BgVideo from "../../common/BgVideo";

import profileImg01 from "../../../assets/img/nat-8.jpg";
import profileImg02 from "../../../assets/img/nat-9.jpg";
import video01 from "../../../assets/img/video.mp4";
import video02 from "../../../assets/img/video.webm";

function Stories(props) {
  return (
    <section className={props.storiesClasses}>
      <BgVideo
        video01={video01}
        videoType01={"video/mp4"}
        video02={video02}
        videoType02={"video/webm"}
      />

      <SubHeading
        textBoxClasses={"u-center-text u-margin-bottom-big u-margin-top-big"}
        textClasses={"heading-secondary"}
        text={"We make people genuinly happy!"}
      />

      <div className="row">
        <StoryCard
          subHeading={"I had the best week ever with my family"}
          text={
            "Lorem ipsum dolor sit amet, consectetur adip Lorem ipsum dolor sit amet, consectetur adip Lorem ipsum dolor sit amet, consectetur adip Lorem ipsum dolor sit amet, consectetur adip"
          }
          profileImg={profileImg01}
          name={"Mary Smith"}
        />
        <StoryCard
          subHeading={"WOW! My life is completely dofferent now"}
          text={
            "Lorem ipsum dolor sit amet, consectetur adip Lorem ipsum dolor sit amet, consectetur adip Lorem ipsum dolor sit amet, consectetur adip Lorem ipsum dolor sit amet, consectetur adip"
          }
          profileImg={profileImg02}
          name={"Jack Wilson"}
        />
        <div className="u-center-text u-margin-top-big">
          <Button
            buttonClasses={"btn-text"}
            href={"#"}
            text={"Read all stories -->"}
          />
        </div>
      </div>
    </section>
  );
}

export default Stories;
