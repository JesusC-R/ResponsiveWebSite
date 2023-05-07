import React from "react";
import classNames from "classnames";

function FeatureCard ({ icon, iconClasses, heading, paragraph, headingClasses, paragraphClasses }) {
  const headingClassNames = classNames(headingClasses);
  const paragraphClassNames = classNames(paragraphClasses);
  // const iconClassNames = classNames(iconClasses);

  return (
      <div className="col-1-of-4">
        <div className="feature-box">
          {icon}
          <h3 className={headingClassNames}>{heading}</h3>
          <p className={paragraphClassNames}>{paragraph}</p>
        </div>
      </div>
  );
}

export default FeatureCard;