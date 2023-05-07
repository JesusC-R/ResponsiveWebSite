import React from 'react';

function Heading (props) {
    const headingClasses = [...props.headingClasses].join(' ');
    const mainTextClasses = [...props.mainTextClasses].join(' ');
    const subTextClasses = [...props.subTextClasses].join(' ');

  return (
    <h1 className={headingClasses}>
        <span className={mainTextClasses}>{props.mainText}</span>
        <span className={subTextClasses}>{props.subText}</span>
    </h1>
  );
}

export default Heading;