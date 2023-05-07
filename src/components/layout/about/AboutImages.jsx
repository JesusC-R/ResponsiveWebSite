import React from "react";

// Import Images
import nat1 from '../../../assets/img/nat-1-large.jpg'
import nat2 from '../../../assets/img/nat-2-large.jpg';
import nat3 from '../../../assets/img/nat-3-large.jpg';

function AboutImages (props) {
  const gridClassNames = [...props.gridClassNames].join(' ');
  const imgBoxClassNames = [...props.imgBoxClassNames].join('');

  return (
    <div className={gridClassNames}>
      <div className={imgBoxClassNames}>
        <img src={nat1} alt='' className='composition__photo composition__photo--p1' />
        <img src={nat2} alt='' className='composition__photo composition__photo--p2' />
        <img src={nat3} alt='' className='composition__photo composition__photo--p3' />
      </div>
    </div>
  );
}  

export default AboutImages;