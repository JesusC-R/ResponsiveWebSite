import React from "react";
// import classNames from 'classnames';

import Logo from "../../common/Logo";
import LogoImgLg1x from "../../../assets/img/logo-green-1x.png";
import LogoImgLg2x from "../../../assets/img/logo-green-2x.png";
import LogoImgSm1x from "../../../assets/img/logo-green-small-1x.png";
import LogoImgSm2x from "../../../assets/img/logo-green-small-2x.png";

function Footer(props) {
  // Allows to render img depending on screen resolutions
  const LogoImgSetLg = LogoImgLg1x + " 1x, " + LogoImgLg2x + " 2x";
  const LogoImgSetSm = LogoImgSm1x + " 1x, " + LogoImgSm2x + " 2x";

  return (
    <footer className={props.footerClasses}>
      <Logo
        boxClassNames={"footer__logo-box"}
        imgClassNames={"footer__logo"}
        // Use srcSet to render diff resolution images
        srcSetLg={LogoImgSetLg}
        srcSetSm={LogoImgSetSm}
        alt={"Full Logo"}
      />
      <div className="row">
        <div className="col-1-of-2">
          <div className="footer__navigation">
            <ul className="footer__list">
              <li className="footer__item">
                <a href="https://" className="footer__link">
                  Company
                </a>
              </li>
              <li className="footer__item">
                <a href="https://" className="footer__link">
                  Contact Us
                </a>
              </li>
              <li className="footer__item">
                <a href="https://" className="footer__link">
                  Careers
                </a>
              </li>
              <li className="footer__item">
                <a href="https://" className="footer__link">
                  Privacy Policy
                </a>
              </li>
              <li className="footer__item">
                <a href="https://" className="footer__link">
                  Terms
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-1-of-2">
          <p className="footer__copyright">
            Built this{" "}
            <a href="https://" className="footer__link">
              website
            </a>{" "}
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta quas
            natus, ipsa magni unde necessitatibus sunt voluptatem aspernatur
            doloremque a facilis error similique enim illum doloribus nulla
            quidem tempore repudiandae.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
