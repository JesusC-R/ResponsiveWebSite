import React from 'react';

function Logo(props) {
    return (
        <div className='logo-box'>
            <img className='logo' src={props.src} alt={props.alt} />
        </div>
        
    );
}

export default Logo;