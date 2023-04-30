import React from 'react';
import Logo from './Logo';
import LogoImg from '../assets/img/logo-white.png';
import Button from './Button';

function Header() {
    return (
        <div className='header'>
            
            <Logo  src={LogoImg} alt={'logo'}/>

            <div className='text-box'>
            <h1 className='heading-primary'>
                <span className='heading-primary-main'>Outdoors</span>
                <span className='heading-primary-sub'>is where life happens</span>
            </h1>
            <Button href={'#'} text={'Discover our tours'}/>
            
            </div>            
        </div>
    )
}

export default Header;