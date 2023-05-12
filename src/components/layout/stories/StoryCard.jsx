import React from 'react';
import classNames from 'classnames';
import SubHeading from '../header/heading/SubHeading';


function StoryCard (props){
  const classes = {
    storyCard: classNames('story', props.storyCardClasses),
    imgShape: classNames('story__shape', props.imgShapeClasses),
    img: classNames('story__img', props.imgClasses),
    imgCaption: classNames('story__caption', props.imgCaptionClasses),
    text: classNames('Story__text', props.textClasses)
  };


  return (        
    <div className={classes.storyCard}>
      <figure className={classes.imgShape}>
        <img className={classes.img} src={props.profileImg} alt='profile_img' />
        <figcaption className={classes.imgCaption}>
          {props.name}
        </figcaption>
      </figure>
      <div className={classes.text}>
        <SubHeading 
          textBoxClasses={'u-margin-top-small'}
          textClasses={'heading-tertiary'}
          text={props.subHeading}
        />
        <p>
          {props.text}
        </p>
      </div>
    </div>
  );
}

export default StoryCard;