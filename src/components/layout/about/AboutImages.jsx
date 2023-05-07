import React from "react";
import classNames from "classnames";

// Import Images
import nat1 from '../../../assets/img/nat-1-large.jpg'
import nat2 from '../../../assets/img/nat-2-large.jpg';
import nat3 from '../../../assets/img/nat-3-large.jpg';

function AboutImages (props) {
  const gridClasses = classNames(props.gridClasses);
  const imgBoxClasses = classNames(props.imgBoxClasses);

  return (
    <div className={gridClasses}>
      <div className={imgBoxClasses}>
        <img src={nat1} alt='' className='composition__photo composition__photo--p1' />
        <img src={nat2} alt='' className='composition__photo composition__photo--p2' />
        <img src={nat3} alt='' className='composition__photo composition__photo--p3' />
      </div>
    </div>
  );
}  

export default AboutImages;