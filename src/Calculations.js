const epley = (lb, reps) => {
    return lb * (1 + (reps / 30));
};

const brzucki = (lb, reps) => {
    return (lb * (36 / (37 - reps)));
};

const lombardi = (lb, reps) => {
    return (lb * (Math.pow(reps, 0.10)));
};

const maythew = (lb, reps) => {
    return (
      (lb * 100) 
        / (52.2 
          + (41.9 
            * (Math.E 
              ** (-0.055 * reps)))
        ));
};

const wathan = (lb, reps) => {
    return (
      (lb * 100) 
        / (48.8 
          + (53.8 
            * (Math.E 
              ** (-0.075 * reps)))
        ));
};

const average = (lb, reps) => {
  return (
    (epley(lb, reps) 
      + brzucki(lb, reps) 
      + lombardi(lb, reps) 
      + maythew(lb, reps) 
      + wathan(lb, reps)) / 5);
};

export const calculations = [
  {
    title: 'Average (Average of all formulas)',
    function: average,
    key: 0,
  },
  {
    title: 'Epley',
    function: epley,
    key: 1,
  },
  {
    title: 'Brzucki',
    function: brzucki,
    key: 2,
  },
  {
    title: 'Lombardi',
    function: lombardi,
    key: 3,
  },
  {
    title: 'Maythew',
    function: maythew,
    key: 4,
  },
  {
    title: 'Wathan',
    function: wathan,
    key: 5,
  },
];
