import React from "react";
import classNames from "classnames";

import img1 from '../../assets/img/nat-8.jpg';
import img2 from '../../assets/img/nat-9.jpg';

function PopUp (props) {
  const classes = {
    popup: classNames(props.popupClasses),
    content: classNames('popup__content', props.contantClasses)
  }
  return (
    <div className={classes.popup} id="popup">
      <div className={classes.content}>
        <div className='popup__left'>
          <img className='popup__img' src={img1} alt='TourImg' />
          <img className='popup__img' src={img2} alt='TourImg' />
        </div>
        <div className='popup__right'>
          <a className="popup__close" href="#tours">X</a>
          <h2 className='heading-secondary u-margin-bottom-medium'>Start booking now</h2>
          <h3 className='heading-tertiary u-margin-bottom-small'>Importatnt - Please read the terms and services before booking</h3>
          <p className='popup__text'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus nam nostrum laboriosam quidem doloremque, maiores quisquam, vel ad, amet fuga ducimus dolor enim asperiores! Illum hic explicabo alias repellat rem.
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus obcaecati odit facere ex inventore non perspiciatis corporis fuga? Enim cum eligendi esse recusandae quod, veniam nam vitae architecto in molestias.
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione asperiores quibusdam dolorum eius neque fugiat nam magnam, accusantium temporibus repudiandae, beatae tempora consequatur est veniam velit commodi esse magni a.

          </p>
          <button className='btn btn--green'>Book now</button>
        </div>
      </div>
    </div>
  );
}

export default PopUp;
