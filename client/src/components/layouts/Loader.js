import React from 'react';
import Lottie from 'react-lottie';

const Loader = () => {
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
    <section className="loader">
      <div
        className="container"
        style={{ textAlign: 'center', paddingTop: '3rem' }}
      >
        <h1>Loading...</h1>
        <Lottie options={defaultOptionsLottie('food-carousel')} width={400} />
      </div>
    </section>
  );
};

export default Loader;
