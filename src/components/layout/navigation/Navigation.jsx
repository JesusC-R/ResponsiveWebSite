import React from 'react';
// import classNames from 'classnames';

function Navigation (props) {
  return (
    <div className={props.navigationClasses}>
      <input type='checkbox' className='navigation__checkbox' id='navi-toggle'/>
      <label htmlFor='navi-toggle' className='navigation__button'>
        <span className='navigation__icon'>
          
        </span>
      </label>

      <div className='navigation__background'></div>

      <nav className='navigation__nav'>
        <ul className='navigation__list'>
          <li className='navigation__item'><a href='https://' className='navigation__link'><span>01</span>About Natours</a></li>
          <li className='navigation__item'><a href='https://' className='navigation__link'><span>02</span>Your Benefits</a></li>
          <li className='navigation__item'><a href='https://' className='navigation__link'><span>03</span>Popular Tours</a></li>
          <li className='navigation__item'><a href='https://' className='navigation__link'><span>04</span>Stories</a></li>
          <li className='navigation__item'><a href='https://' className='navigation__link'><span>05</span>Book Now</a></li>
        </ul>
      </nav>

    </div>
  );

}

export default Navigation;