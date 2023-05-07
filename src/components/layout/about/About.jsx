import React from 'react';
import classNames from 'classnames';

import AboutHeader from './AboutHeader'
import AboutInfo from './AboutInfo';
import AboutImages from './AboutImages';

function About(props) {
  const aboutClasses = classNames(props.aboutClasses);

  return (
    <main>

      <section className={aboutClasses}>

        <AboutHeader 
          text={'Exiting tours for adventurous people'}
          textBoxClasses={'u-center-text u-margin-bottom-big'}
          textClasses={'heading-secondary'}
        />

        <div className="row">

          <AboutInfo 
            heading1={'You are going to fall in love with nature.'}
            paragraph1={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. At ratione, facere dolor quod neque repellendus perferendis ullam assumenda suscipit maiores, quo nihil. Aut dicta amet quasi, enim eum labore deserunt'}
            heading2={'Live adventures like you never have before.'}
            paragraph2={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. At ratione, facere dolor quod neque repellendus perferendis ullam assumenda suscipit maiores, quo nihil. Aut dicta amet quasi, enim eum labore deserunt'}
            gridClasses={'col-1-of-2'}
            headingClasses={'heading-tertiary u-margin-bottom-small'}
            paragraphClasses={'paragraph'}
          />

          <AboutImages 
            gridClasses={'col-1-of-2'}
            imgBoxClasses={'composition'}
          />

        </div>
      </section>
    </main>
  );
}

export default About;