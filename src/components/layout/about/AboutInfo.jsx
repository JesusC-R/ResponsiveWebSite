import React from 'react';
import Button from '../../common/Button';

function AboutInfo(props) {
const gridClassNames = [...props.gridClassNames].join(' ');
const headingClassNames = [...props.headingClassNames].join(' ');
const paragraphClassNames = [...props.paragraphClassNames].join(' ');

  return (
    <div className={gridClassNames}>
      <h3 className={headingClassNames}>{props.heading1}</h3>
      <p className={paragraphClassNames}>{props.paragraph1}</p>
      <h3 className={headingClassNames}>{props.heading2}</h3>
      <p className={paragraphClassNames}>{props.paragraph2}</p>

      <Button classNames={['btn-text']} href={'#'} text={'Learn more -->'} />
    </div>
  );
}

export default AboutInfo;