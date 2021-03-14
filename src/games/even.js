import generateRandomNum from '../utilities.js';

const isEven = (number) => number % 2 === 0;

const getRound = () => {
  const question = generateRandomNum(1, 100);
  return {
    question,
    answer: isEven(question) ? 'yes' : 'no',
  };
};

const even = {
  description: 'Answer "yes" if the number is even, otherwise answer "no".',
  getRound,
};

export default even;
