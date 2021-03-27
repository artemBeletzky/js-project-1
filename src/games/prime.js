import generateRandomNum from '../utilities.js';
import start from '../index.js';

const isPrime = (n) => {
  if (n <= 1) {
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

const getRound = () => {
  const question = generateRandomNum(1, 100);
  const answer = isPrime(question) ? 'yes' : 'no';
  return {
    question,
    answer,
  };
};

const prime = () => {
  const data = {
    description: 'Answer "yes" if given number is prime. Otherwise answer "no".',
    getRound,
  };
  start(data);
};

export default prime;
