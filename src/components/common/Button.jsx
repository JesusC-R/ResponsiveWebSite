import React from 'react';

function Buuton(props) {
    const classNames = [...props.classNames].join(' ');
    return (
        <a href='htts://' className={classNames}>
            {props.text}
        </a>
    )
}

export default Buuton;