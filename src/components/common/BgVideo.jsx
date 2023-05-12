import React from "react";
import classNames from "classnames";


function BgVideo (props) {
  const classes = {
    videoContainer: classNames('bg-video', props.videoContainerClasses),
    video: classNames('bg-video__content', props.videoClasses)
  }

  return (
    <div className={classes.videoContainer}>
      <video className={classes.video} autoPlay muted loop>
        <source  src={props.video01} type={props.videoType01}/>
        <source  src={props.video02} type={props.videoType02}/>
        Your browser is not supported! 
      </video>
    </div>
  );
}

export default BgVideo;