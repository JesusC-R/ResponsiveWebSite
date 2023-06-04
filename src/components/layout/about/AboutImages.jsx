import React from "react";
import classNames from "classnames";

// Import Images
import nat1Lg from "../../../assets/img/nat-1-large.jpg";
import nat2Lg from "../../../assets/img/nat-2-large.jpg";
import nat3Lg from "../../../assets/img/nat-3-large.jpg";

import nat1Sm from "../../../assets/img/nat-1.jpg";
import nat2Sm from "../../../assets/img/nat-2.jpg";
import nat3Sm from "../../../assets/img/nat-3.jpg";

function AboutImages(props) {
  const gridClasses = classNames(props.gridClasses);
  const imgBoxClasses = classNames(props.imgBoxClasses);


  // srcSets for responsive images (Resolution switching)
  const srcSet1 = nat1Sm + " 300w, " + nat1Lg + " 1000w";
  const srcSet2 = nat2Sm + " 300w, " + nat2Lg + " 1000w";
  const srcSet3 = nat3Sm + " 300w, " + nat3Lg + " 1000w";

  const imgSizes = "(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px";

  return (
    <div className={gridClasses}>
      <div className={imgBoxClasses}>
        <img
          src={nat1Lg}
          srcSet={srcSet1}
          alt=""
          className="composition__photo composition__photo--p1"
          sizes={imgSizes}
        />
        <img
          src={nat2Lg}
          srcSet={srcSet2}
          alt=""
          className="composition__photo composition__photo--p2"
        />
        <img
          src={nat3Lg}
          srcSet={srcSet3}
          alt=""
          className="composition__photo composition__photo--p3"
        />
      </div>
    </div>
  );
}

export default AboutImages;
