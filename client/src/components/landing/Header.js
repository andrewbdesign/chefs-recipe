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
            <br />
            <form>
              <input
                className="header__searchbar"
                type="text"
                placeholder="Look up recipes..."
              />
              <button className="header__searchbutton">Search</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;