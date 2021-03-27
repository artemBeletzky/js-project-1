import generateRandomNum from '../utilities.js';
import start from '../index.js';

const findGcd = (a, b) => {
  const bigger = Math.max(a, b);
  const smaller = Math.min(a, b);
  const remainder = bigger - smaller;
  if (remainder % smaller <= 0) {
    return smaller;
  }
  return findGcd(remainder, smaller);
};

const getRound = () => {
  const a = generateRandomNum(1, 100);
  const b = generateRandomNum(1, 100);
  const question = `${a} ${b}`;
  const answer = findGcd(a, b).toString();
  return {
    question,
    answer,
  };
};

const gcd = () => {
  const data = {
    description: 'Find the greatest common divisor of given numbers.',
    getRound,
  };
  start(data);
};

export default gcd;
