const createRandomNum = () => Math.ceil(Math.random() * 100);

const checkIfEven = (number) => number % 2 === 0;

const formatQ = (q) => (checkIfEven(q) ? 'yes' : 'no');

const getRound = () => {
  const question = createRandomNum();
  return {
    question,
    answer: formatQ(question),
  };
};

const even = {
  description: 'Answer "yes" if the number is even, otherwise answer "no".',
  getRound,
};

export default even;
