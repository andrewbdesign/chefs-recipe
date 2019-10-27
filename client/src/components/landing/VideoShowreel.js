import React from 'react';
import Video from '../../assets/videos/chefs-recipe-video.mp4';

const VideoShowreel = () => {
  return (
    <section className="video-showreel">
      <video width="1280" height="720" loop autoPlay muted>
        <source src={Video} type="video/mp4" />
        {/* <source src="movie.ogg" type="video/ogg" /> */}
        Your browser does not support the video tag.
      </video>
      <div className="video-showreel__copy">
        <h2 className="video-showreel__heading">Let's get cooking!</h2>
        <p className="video-showreel__body">
          It is current 2:18pm. Let's look up some lunch ideas!
        </p>
        <form>
          <input
            className="header__searchbar"
            type="text"
            placeholder="Look up recipes..."
          />
          <button className="header__searchbutton">Search</button>
        </form>
      </div>
    </section>
  );
};

export default VideoShowreel;
