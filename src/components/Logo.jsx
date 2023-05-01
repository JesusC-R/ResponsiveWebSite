import React from 'react';

function Logo(props) {
    const boxClassNames = [...props.boxClassNames].join(' ');
    const imgClassNames = [...props.imgClassNames].join(' ');
    return (
        <div className={boxClassNames}>
            <img className={imgClassNames} src={props.src} alt={props.alt} />
        </div>
        
    );
}

export default Logo;