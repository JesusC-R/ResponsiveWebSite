import React from "react";
import classNames from "classnames";

// Components
import FeatureCard from "../../common/FeatureCard";

//Icons
import { TfiWorld } from'react-icons/tfi';
import { SlCompass } from 'react-icons/sl';
import { ImMap2 } from 'react-icons/im';
import { SlHeart } from 'react-icons/sl';


function Features (props) {
  const featureClassNames = classNames(props.featureClasses);

  return (
    <section className={featureClassNames}>

      <div className="row">
        <FeatureCard 
          icon={<TfiWorld className='feature-box__icon icon-basic-world' />}
          heading={'Explore The World'}
          headingClasses={'heading-tertiary u-margin-bottom-small'}
          paragraph={'lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet'}
          paragraphClasses={'feature-box__text'}
        />
        <FeatureCard 
          icon={<SlCompass className='feature-box__icon icon-basic-world' />}
          heading={'Meet Nature'}
          headingClasses={'heading-tertiary u-margin-bottom-small'}
          paragraph={'lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet'}
          paragraphClasses={'feature-box__text'}
        />
        <FeatureCard 
          icon={<ImMap2 className='feature-box__icon icon-basic-world' />}
          heading={'Find Your Way'}
          headingClasses={'heading-tertiary u-margin-bottom-small'}
          paragraph={'lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet,'}
          paragraphClasses={'feature-box__text'}
        />
        <FeatureCard 
          icon={<SlHeart className='feature-box__icon icon-basic-world' />}
          heading={'Live a healthier life'}
          headingClasses={'heading-tertiary u-margin-bottom-small'}
          paragraph={'lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet'}
          paragraphClasses={'feature-box__text'}
        />
      </div>
    </section>

  );
}

export default Features;