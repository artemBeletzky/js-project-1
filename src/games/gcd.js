import generateRandomNum from '../utilities.js';

const findGcd = (a, b) => {
  const bigger = a > b ? a : b;
  const smaller = a < b ? a : b;
  const remainder = bigger - smaller;
  if (remainder % smaller <= 0) {
    return smaller;
  }
  return findGcd(remainder, smaller);
};

const getRound = () => {
  const a = generateRandomNum(1, 100);
  const b = generateRandomNum(1, 100);
  return {
    question: `${a} ${b}`,
    answer: findGcd(a, b).toString(),
  };
};

const gcd = {
  description: 'Find the greatest common divisor of given numbers.',
  getRound,
};

export default gcd;
