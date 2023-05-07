import React from 'react';
import classNames from 'classnames';

import Button from '../../common/Button';

function AboutInfo(props) {
const gridClasses = classNames(props.gridClasses);
const headingClasses = classNames(props.headingClasses);
const paragraphClasses = classNames(props.paragraphClasses);

  return (
    <div className={gridClasses}>
      <h3 className={headingClasses}>{props.heading1}</h3>
      <p className={paragraphClasses}>{props.paragraph1}</p>
      <h3 className={headingClasses}>{props.heading2}</h3>
      <p className={paragraphClasses}>{props.paragraph2}</p>

      <Button buttonClasses={'btn-text'} href={'#'} text={'Learn more -->'} />
    </div>
  );
}

export default AboutInfo;