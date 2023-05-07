import React from 'react';

import Logo from '../../common/Logo';
import LogoImg from '../../../assets/img/logo-white.png';

import Button from '../../common/Button';

import Heading from './heading/Heading';

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

                <Heading 
                    mainText={'Outdoors'}
                    subText={'is where life happens'}
                    headingClasses={['heading-primary']}
                    mainTextClasses={['heading-primary--main']}
                    subTextClasses={['heading-primary--sub']}
                />

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