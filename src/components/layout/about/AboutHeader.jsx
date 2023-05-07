import React from "react";

function SectionHeader (props) {
  const textBoxClasses = [...props.textBoxClasses].join(' ');
  const textClasses = [...props.textClasses].join(' ');

  return (
    <div className={textBoxClasses}>
      <h2 className={textClasses}>{props.text}</h2>
    </div>
  );
}

export default SectionHeader;