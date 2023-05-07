import React from 'react';
import classNames from 'classnames';

function Buuton(props) {
    const buttonClasses = classNames(props.buttonClasses);
    return (
        <a href='htts://' className={buttonClasses}>
            {props.text}
        </a>
    )
}

export default Buuton;