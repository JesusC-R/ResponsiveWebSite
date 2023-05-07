import React from 'react';
import classNames from 'classnames';

function Heading (props) {
    const headingClasses = classNames(props.headingClasses);
    const mainTextClasses = classNames(props.mainTextClasses);
    const subTextClasses = classNames(props.subTextClasses);

  return (
    <h1 className={headingClasses}>
        <span className={mainTextClasses}>{props.mainText}</span>
        <span className={subTextClasses}>{props.subText}</span>
    </h1>
  );
}

export default Heading;