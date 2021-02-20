const createRandomNum = () => Math.ceil(Math.random() * 100);

const checkIfEven = (number) => number % 2 === 0;

const formatQ = (q) => (checkIfEven(q) ? 'yes' : 'no');

const createQAndA = () => {
  const q = createRandomNum();
  return {
    q,
    a: formatQ(q),
  };
};

const even = {
  description: 'Answer "yes" if the number is even, otherwise answer "no".',
  getRound: createQAndA,
};

export default even;
