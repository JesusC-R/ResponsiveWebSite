import React from 'react';
import Logo from './Logo';
import LogoImg from '../assets/img/logo-white.png';
import Button from './Button';

function Header(props) {
    const headerClassNames = [...props.headerClassNames].join(' ');

    return (
        <div className={headerClassNames}>
            
            <Logo  
                boxClassNames={['header__logo-box']}  
                imgClassNames={['header__logo']} 
                src={LogoImg}
                alt={'logo'} 
            />

            <div className='header__text-box'>

                <h1 className='heading-primary'>
                    <span className='heading-primary--main'>Outdoors</span>
                    <span className='heading-primary--sub'>is where life happens</span>
                </h1>

                <Button 
                    classNames={['btn', 'btn--white', 'btn--animated']}
                    href={'#'} 
                    text={'Discover our tours'}
                />

            </div>            
        </div>
    )
}

export default Header;