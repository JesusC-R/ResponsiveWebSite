import React from 'react';
// import classNames from 'classnames';

import Logo from '../../common/Logo';
import imgLogoLD from '../../../assets/img/logo-green-1x.png';
import imgLogoHD from "../../../assets/img/logo-green-2x.png";

function Footer (props) {
    return (
        <footer className={props.footerClasses}>
            <Logo 
                boxClassNames={'footer__logo-box'}
                imgClassNames={'footer__logo'}
                srcSet={imgLogoLD + ' 1x, ' + imgLogoHD + ' 2x'}
                alt={'Full Logo'}
            />
            <div className='row'>
                <div className='col-1-of-2'>
                    <div className='footer__navigation'>
                        <ul className='footer__list'>
                            <li className='footer__item'><a href='https://' className='footer__link'>Company</a></li>
                            <li className='footer__item'><a href='https://' className='footer__link'>Contact Us</a></li>
                            <li className='footer__item'><a href='https://' className='footer__link'>Careers</a></li>
                            <li className='footer__item'><a href='https://' className='footer__link'>Privacy Policy</a></li>
                            <li className='footer__item'><a href='https://' className='footer__link'>Terms</a></li>
                        </ul>
                    </div>
                </div>
                <div className='col-1-of-2'>
                    <p className='footer__copyright'>
                        Built this <a href='https://' className='footer__link'>website</a> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta quas natus, ipsa magni unde necessitatibus sunt voluptatem aspernatur doloremque a facilis error similique enim illum doloribus nulla quidem tempore repudiandae.
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;

