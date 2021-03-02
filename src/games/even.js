import generateRandomNum from './utilities.js';

const checkIfEven = (number) => number % 2 === 0;

const formatAns = (q) => (checkIfEven(q) ? 'yes' : 'no');

const getRound = () => {
  const [question] = generateRandomNum();
  return {
    question,
    answer: formatAns(question),
  };
};

const even = {
  description: 'Answer "yes" if the number is even, otherwise answer "no".',
  getRound,
};

export default even;
