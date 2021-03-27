import generateRandomNum from '../utilities.js';
import start from '../index.js';

const isEven = (number) => number % 2 === 0;

const getRound = () => {
  const question = generateRandomNum(1, 100);
  const answer = isEven(question) ? 'yes' : 'no';
  return {
    question,
    answer,
  };
};

const even = () => {
  const data = {
    description: 'Answer "yes" if the number is even, otherwise answer "no".',
    getRound,
  };
  start(data);
};

export default even;
