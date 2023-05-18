import React from 'react';
import classNames from 'classnames';

function Buuton(props) {
    const buttonClasses = classNames(props.buttonClasses);
    return (
        <button href={props.href} className={buttonClasses}>
            {props.text}
        </button>
    )
}

export default Buuton;