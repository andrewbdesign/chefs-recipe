import React from 'react';
import Lottie from 'react-lottie';

const Header = () => {
  const defaultOptionsLottie = lottie => {
    return {
      loop: true,
      autoplay: true,
      animationData: require(`../../assets/lotties/${lottie}.json`),
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice',
      },
    };
  };

  return (
    <section className="header">
      <div className="container">
        <div className="header__container">
          <div className="header__copy">
            <h1>Cook Delicious Dishes Today</h1>
            <p>
              Learn how to cook something that is simply delicious and
              nutritious!
            </p>
            <a className="cta cta-primary" href="https://www.google.com">
              Get started
            </a>
            <a className="cta cta-secondary" href="https://www.google.com">
              Learn more
            </a>
          </div>
          <div className="header__illustration">
            <Lottie
              options={defaultOptionsLottie('food-carousel')}
              isStopped={false}
              isPaused={false}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
