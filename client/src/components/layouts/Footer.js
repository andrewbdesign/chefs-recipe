import React, { Fragment } from 'react';

const Footer = () => {
  const references = [
    {
      title: 'Why go vegan',
      url:
        'http://www.vegetariantimes.com/article/why-go-veg-learn-about-becoming-a-vegetarian/',
    },
    {
      title: 'Pros and Cons of going vegan',
      url:
        'http://www.aarp.org/food/diet-nutrition/info-02-2011/9-pros-and-cons-to-going-vegan.html',
    },
    {
      title: 'How the mediterranean diet works',
      url:
        'http://www.everydayhealth.com/diet-nutrition/the-mediterranean-diet.aspx',
    },
    {
      title: 'The Paleo Diet',
      url:
        'http://sphweb.bumc.bu.edu/otlt/MPH-Modules/PH/NutritionModules/Popular_Diets/Popular_Diets7.html',
    },
    {
      title: 'The Pros and Cons of the Paleo Diet',
      url: 'http://www.precisionnutrition.com/paleo-diet',
    },
  ];

  const resources = [
    {
      title: 'Paleo 101',
      url: 'http://paleoleap.com/paleo-101/',
    },
    {
      title: 'Vegan society',
      url: 'https://www.vegansociety.com/',
    },
    {
      title: 'Mediterranean: how to',
      url:
        'http://www.goodhousekeeping.com/health/diet-nutrition/advice/a15255/mediterranean-meal-plan-w1/',
    },
  ];

  const renderLinks = links => {
    return links.map((link, index) => {
      return (
        <li key={index}>
          <a href={link.url} target="_blank" rel="noopener noreferrer">
            {link.title}
          </a>
        </li>
      );
    });
  };

  return (
    <Fragment>
      <footer>
        <div className="container">
          <div className="footer__container">
            <div>
              <h3 className="footer__title">Chef'sRecipe</h3>
              <p>
                This is another website where you can just learn about diets and
                how to cook them with the recipes
              </p>
            </div>
            <div>
              <h3 className="footer__title">References</h3>
              <ul className="footer__lists">{renderLinks(references)}</ul>
            </div>
            <div>
              <h3 className="footer__title">Resources</h3>
              <ul className="footer__lists">{renderLinks(resources)}</ul>
            </div>
          </div>
        </div>
      </footer>
      <section className="footer-bottom">
        <div className="container">
          <p>© {new Date().getFullYear()} Chef'sRecipe</p>
        </div>
      </section>
    </Fragment>
  );
};

export default Footer;
