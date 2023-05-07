import React from 'react';

import AboutHeader from './AboutHeader'
import AboutInfo from './AboutInfo';
import AboutImages from './AboutImages';

function About(props) {
  const aboutClassNames = [...props.aboutClassNames].join(' ');

  return (
    <main>

      <section className={aboutClassNames}>

        <AboutHeader 
          text={'Exiting tours for adventurous people'}
          textBoxClasses={['u-center-text u-margin-bottom-big']}
          textClasses={['heading-secondary']}
        />

        <div className="row">

          <AboutInfo 
            heading1={'You are going to fall in love with nature.'}
            paragraph1={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. At ratione, facere dolor quod neque repellendus perferendis ullam assumenda suscipit maiores, quo nihil. Aut dicta amet quasi, enim eum labore deserunt'}
            heading2={'Live adventures like you never have before.'}
            paragraph2={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. At ratione, facere dolor quod neque repellendus perferendis ullam assumenda suscipit maiores, quo nihil. Aut dicta amet quasi, enim eum labore deserunt'}
            gridClassNames={['col-1-of-2']}
            headingClassNames={['heading-tertiary u-margin-bottom-small']}
            paragraphClassNames={['paragraph']}
          />

          <AboutImages 
            gridClassNames={['col-1-of-2']}
            imgBoxClassNames={['composition']}
          />

        </div>
      </section>
    </main>
  );
}

export default About;