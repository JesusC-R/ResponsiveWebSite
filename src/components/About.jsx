import React from "react";
import Button from './Button';

function About(props) {
  return (
    <main>
      <section className="section-about">
        <div className="u-center-text u-margin-bottom-big">  {/* Implementation of utilities  */}
          <h2 className="heading-secondary">
            Exiting tours for adventurous people
          </h2>
        </div>

        <div className="row">

          <div className="col-1-of-2">
            <h3 className="heading-tertiary u-margin-bottom-small">
              You are going to fall in love with nature.
            </h3>
            <p className="paragraph">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. At ratione, facere dolor quod neque repellendus perferendis ullam assumenda suscipit maiores, quo nihil. Aut dicta amet quasi, enim eum labore deserunt!
            </p>

            <h3 className="heading-tertiary u-margin-bottom-small">
              Live adventures like you never have before.
            </h3>
            <p className="paragraph">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. At ratione, facere dolor quod neque repellendus perferendis ullam assumenda suscipit maiores, quo nihil. Aut dicta amet quasi, enim eum labore deserunt!
            </p>

            <Button
              classNames={['btn-text']}
              href={'#'} 
              text={'Learn more -->'}
            />

          </div>

          <div className="col-1-of-2">
            The  imu3 3ygb 3ybf hwefb   u93y qiw efg9wyef uweygf 803
          </div>

        </div>
      </section>
    </main>
  );
}

export default About;