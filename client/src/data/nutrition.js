export const paleo = {
  title: 'Paleo',
  className: 'paleo',
  items: [
    {
      title: 'Meat',
      servings: '1-2',
      frequency: 'day',
      image: require('../assets/images/nutrition/thumbnail-meat.png'),
    },
    {
      title: 'Poultry',
      servings: '3-5',
      frequency: 'week',
      image: require('../assets/images/nutrition/thumbnail-poultry.png'),
    },
    {
      title: 'Fish',
      servings: '2-4',
      frequency: 'week',
      image: require('../assets/images/nutrition/thumbnail-fish.png'),
    },
    {
      title: 'Fruit',
      servings: '1-3',
      frequency: 'day',
      image: require('../assets/images/nutrition/thumbnail-fruit.png'),
    },
    {
      title: 'Nuts',
      servings: '4',
      frequency: 'day',
      image: require('../assets/images/nutrition/thumbnail-nuts.png'),
    },
    {
      title: 'Berries',
      servings: '1',
      frequency: 'day',
      image: require('../assets/images/nutrition/thumbnail-berries.png'),
    },
  ],
  icon: require('../assets/images/nutrition/icon-paleo.svg'),
  notes:
    'It is recommended everything is locally grown, raised and caught; and organic. Serving sizes may vary depending on which Paleo meal plan you decide to follow.',
};

export const medi = {
  title: 'Mediterranean',
  className: 'medi',
  items: [
    {
      title: 'Fruit',
      servings: '2-4',
      frequency: 'day',
      image: require('../assets/images/nutrition/thumbnail-fruit.png'),
    },
    {
      title: 'Veggies',
      servings: '4-8',
      frequency: 'week',
      image: require('../assets/images/nutrition/thumbnail-veggies.png'),
    },
    {
      title: 'Whole Grains',
      servings: '4-6',
      frequency: 'week',
      image: require('../assets/images/nutrition/thumbnail-whole-grains.png'),
    },
    {
      title: 'Fish',
      servings: '2-3',
      frequency: 'day',
      image: require('../assets/images/nutrition/thumbnail-fish.png'),
    },
    {
      title: 'Low-Fat Dairy',
      servings: '1-3',
      frequency: 'day',
      image: require('../assets/images/nutrition/thumbnail-low-fat-dairy.png'),
    },
    {
      title: 'Nuts',
      servings: '4',
      frequency: 'day',
      image: require('../assets/images/nutrition/thumbnail-nuts.png'),
    },
  ],
  icon: require('../assets/images/nutrition/icon-fish.svg'),
  notes:
    'Lean red meats are not listed but, if desired, the recommended serving size is 1-4 per month.',
};

export const vegan = {
  title: 'Vegan',
  className: 'vegan',
  items: [
    {
      title: 'Fruit',
      servings: '3-4',
      frequency: 'day',
      image: require('../assets/images/nutrition/thumbnail-fruit.png'),
    },
    {
      title: 'Whole Grains',
      servings: '5-8',
      frequency: 'day',
      image: require('../assets/images/nutrition/thumbnail-whole-grains.png'),
    },
    {
      title: 'Veggies',
      servings: '4-6',
      frequency: 'day',
      image: require('../assets/images/nutrition/thumbnail-veggies.png'),
    },
    {
      title: 'Plant Oils',
      servings: '1-5',
      frequency: 'day',
      image: require('../assets/images/nutrition/thumbnail-plant-oils.png'),
    },
    {
      title: 'Nuts',
      servings: '1-3',
      frequency: 'day',
      image: require('../assets/images/nutrition/thumbnail-nuts.png'),
    },
    {
      title: 'Legumes',
      servings: '4',
      frequency: 'day',
      image: require('../assets/images/nutrition/thumbnail-legumes.png'),
    },
  ],
  icon: require('../assets/images/nutrition/icon-vegan.svg'),
  notes:
    'A vegan diet requires little more planning in order to obtain certain nutrients, such as calcium, vitamin D and vitamin B12.',
};

export const paleoNutrition = {
  title: 'Paleo',
  className: 'paleo',
  facts: [
    {
      title: 'Total fat',
      value: '39%',
    },
    {
      title: 'Protein',
      value: '38%',
    },
    {
      title: 'Carbohydrates',
      value: '23%',
    },
    {
      title: 'Sodium',
      value: 'Virtually sodium free',
    },
    {
      title: 'Fiber',
      value: '> 34g',
    },
    {
      title: 'Calcium',
      value: '-700g',
    },
  ],
  benefits: [
    'May reduce weight and waist size while improveing blood sugar. A paleolithic diet is more satiating per calorie than a mediterranean-like diet',
  ],
  risks: [
    'High protein, low carb diets have been linked to high cholestrol, heart disease, cancer and kidney damagde.',
    "Paleo doesn't allow whole grans and legumes which are important sources of fiber, vitamins and minerals.",
  ],
};

export const mediNutrition = {
  title: 'Mediterranean',
  className: 'medi',
  facts: [
    {
      title: 'Total fat',
      value: '< 35%',
    },
    {
      title: 'Protein',
      value: '- 35%',
    },
    {
      title: 'Carbohydrates',
      value: '50%',
    },
    {
      title: 'Sodium',
      value: '< 1,500mg',
    },
    {
      title: 'Fiber',
      value: '> 34g',
    },
    {
      title: 'Calcium',
      value: '1,000-1,300g',
    },
  ],
  benefits: [
    'A study found that about 30 percent of heart attacks, strokes and deaths from heart disease can be prevented in high-risk people if they switch to a Mediterranean diet.',
    'Studies suggest that people who follow a Mediterranean diet have a lower risk of developing type 2 diabetes.',
  ],
  risks: [
    'This diet is considered to be generally sage for everyone. However, people with health conditions should consult with their doctur before making dietary changes.',
  ],
};

export const veganNutrition = {
  title: 'Vegan',
  className: 'vegan',
  facts: [
    {
      title: 'Total fat',
      value: '< 35%',
    },
    {
      title: 'Protein',
      value: '10-35%',
    },
    {
      title: 'Carbohydrates',
      value: '45-65%',
    },
    {
      title: 'Sodium',
      value: '< 2,300mg',
    },
    {
      title: 'Fiber',
      value: '> 34g',
    },
    {
      title: 'Calcium',
      value: '1,000-1,300g',
    },
  ],
  benefits: [
    'Researchers have found that vegans had 57 percent lower risk of ishemic heart disease than meat eaters.',
    'Vegans tend to eat fewer calories, weigh less, and have lower body mass index than meat-eaters.',
  ],
  risks: [
    "Vegans often don't get enough calcium, which can cause weak bones that break easily, as well as n-3 fatty acids EPA and DHA, which are important for brain, eye, and cardiovascular health.",
  ],
};
