import generateRandomNum from './utilities.js';

const isPrime = (n) => {
  if (n <= 0 || n === 1) {
    return false;
  }
  let counter = n - 1;
  let result = false;
  while (counter > 1 && result !== true) {
    result = n % counter === 0;
    counter -= 1;
  }
  return !result;
};

const formatQ = (q) => (isPrime(q) ? 'yes' : 'no');

const getRound = () => {
  const [question] = generateRandomNum();
  return {
    question,
    answer: formatQ(question),
  };
};

const prime = {
  description: 'Answer "yes" if given number is prime. Otherwise answer "no".',
  getRound,
};

export default prime;
