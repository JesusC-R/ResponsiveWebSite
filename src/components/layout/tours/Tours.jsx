import React from "react";
import classNames from "classnames";

import TourCard from "../../common/TourCard";
import SubHeading from "../header/heading/SubHeading";
import Button from "../../common/Button";

function Tours(props) {
  const tourClasses = classNames(props.tourClasses);

  return (
    <section className={tourClasses}>
      <SubHeading
        text={"Most popular tours"}
        textBoxClasses={"u-center-text u-margin-bottom-big"}
        textClasses={"heading-secondary"}
        id={"tours"}
      />
      <div className="row">
        <TourCard
          frontClasses={"card__side--front--1"}
          frontPictureClasses={"card__picture--1"}
          heading={"The sea explorer"}
          frontHeadingSpanClasses={"card__heading-span--1"}
          details={[
            "3 day tours",
            "Up to 30 people",
            "2 tour guides",
            "Sleep in cozy hotels",
            "Difficulty: easy",
          ]}
          backClasses={"card__side--back--1"}
          backText={"Only"}
          backPrice={"$297"}
        />
        <TourCard
          frontClasses={"card__side--front--2"}
          frontPictureClasses={"card__picture--2"}
          heading={"The forest hiker"}
          frontHeadingSpanClasses={"card__heading-span--2"}
          details={[
            "7 day tour",
            "Upo 40 people",
            "6 tour guides",
            "Sleep in provided tents",
            "Difficulty: medium",
          ]}
          backClasses={"card__side--back--2"}
          backText={"Only"}
          backPrice={"$497"}
        />
        <TourCard
          frontPictureClasses={"card__picture--3"}
          frontClasses={"card__side--front--3"}
          heading={"The snow adventurer"}
          frontHeadingSpanClasses={"card__heading-span--3"}
          details={[
            "5 day tour",
            "Up to 15 people",
            "3 tour guides",
            "Sleep in provided tents",
            "Difficulty: hard",
          ]}
          backClasses={"card__side--back--3"}
          backText={"Only"}
          backPrice={"$897"}
        />
      </div>

      <div className="u-center-text u-margin-top-big">
        <Button buttonClasses={"btn btn--green"} text={"Discover all tours"} />
      </div>
    </section>
  );
}
export default Tours;
