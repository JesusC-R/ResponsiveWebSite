import React from "react";
import classNames from "classnames";

function SectionHeader (props) {
  const textBoxClasses = classNames(props.textBoxClasses);
  const textClasses = classNames(props.textClasses);

  return (
    <div className={textBoxClasses}>
      <h2 className={textClasses}>{props.text}</h2>
    </div>
  );
}

export default SectionHeader;