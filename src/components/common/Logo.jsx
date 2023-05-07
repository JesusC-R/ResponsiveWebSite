import React from 'react';
import classNames from 'classnames';

function Logo(props) {
    const boxClassNames = classNames(props.boxClassNames);
    const imgClassNames = classNames(props.imgClassNames);
    return (
        <div className={boxClassNames}>
            <img className={imgClassNames} src={props.src} alt={props.alt} />
        </div>
        
    );
}

export default Logo;