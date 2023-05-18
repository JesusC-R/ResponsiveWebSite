import React from "react";
import classNames from "classnames";
import { BrowserRouter } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";

import Logo from "../../common/Logo";
import LogoImg from "../../../assets/img/logo-white.png";
import Button from "../../common/Button";
import Heading from "./heading/Heading";


function Header(props) {
  const headerClasses = classNames(props.headerClasses);

  return (
    <BrowserRouter>
      <div className={headerClasses}>
        <Logo
          boxClassNames={"header__logo-box"}
          imgClassNames={"header__logo"}
          src={LogoImg}
          alt={"logo"}
        />

        <div className="header__text-box">
          <Heading
            mainText={"Outdoors"}
            subText={"is where life happens"}
            headingClasses={"heading-primary"}
            mainTextClasses={"heading-primary--main"}
            subTextClasses={"heading-primary--sub"}
          />
          <Link smooth to={"#tours"}>
            <Button
              buttonClasses={["btn", "btn--white", "btn--animated"]}
              href={"#"}
              text={"Discover our tours"}
            />
          </Link>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default Header;
