import React from "react";
import classNames from "classnames";

import Button from "./Button";

function TourCard({
  frontClasses,
  backClasses,
  frontPictureClasses,
  frontHeadingClasses,
  frontHeadingSpanClasses,
  frontDetailsClasses,
  heading,
  details,
  backCtaClasses,
  backPriceBoxClasses,
  backPriceTextClasses,
  backPriceValueClasses,
  backText,
  backPrice,
}) {
  const classes = {
    cardFront: classNames("card__side card__side--front", frontClasses),
    cardBack: classNames("card__side card__side--back", backClasses),
    frontPicture: classNames("card__picture", frontPictureClasses),
    frontHeading: classNames("card__heading", frontHeadingClasses),
    frontHeadingSpanClasses: classNames(
      "card__heading-span",
      frontHeadingSpanClasses
    ),
    frontDetails: classNames("card__details", frontDetailsClasses),

    backCta: classNames("card__cta", backCtaClasses),
    backPriceBox: classNames("card__price-box", backPriceBoxClasses),
    backPriceText: classNames("card__price-only", backPriceTextClasses),
    backPriceValue: classNames("card__price-value", backPriceValueClasses),
  };

  const detailItems = Array.isArray(details)
    ? details.map((item, index) => <li key={index}>{item}</li>)
    : null;

  return (
    <div className="col-1-of-3">
      <div className="card">
        <div className={classes.cardFront}>
          <div className={classes.frontPicture}>&nbsp;</div>
          <h4 className={classes.frontHeading}>
            <span className={classes.frontHeadingSpanClasses}>{heading}</span>
          </h4>
          <div className={classes.frontDetails}>
            <ul>{detailItems}</ul>
          </div>
        </div>
        <div className={classes.cardBack}>
          <div className={classes.backCta}>
            <div className={classes.backPriceBox}>
              <p className={classes.backPriceText}>{backText}</p>
              <p className={classes.backPriceValue}>{backPrice}</p>
            </div>
            <a href="#popup">
              <Button
                buttonClasses={"btn btn--white "}
                text={"Book now"}
                href={"#popup"}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TourCard;
