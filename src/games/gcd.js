const createTwoRandNums = () => {
  const a = Math.round(Math.random() * 99);
  const b = Math.round(Math.random() * 99);
  return [a, b];
};

const formatQuestionString = (question) => {
  const [a, b] = question;
  return `${a} ${b}`;
};

const euclidsAlgo = (a, b) => {
  const bigger = a > b ? a : b;
  const smaller = a < b ? a : b;
  const remainder = bigger - smaller;
  if (remainder % smaller <= 0) {
    return smaller;
  }
  return euclidsAlgo(remainder, smaller);
};

const getRound = () => {
  const question = createTwoRandNums();
  const [a, b] = question;
  return {
    question: formatQuestionString(question),
    answer: euclidsAlgo(a, b).toString(),
  };
};

const gcd = {
  description: 'Find the greatest common divisor of given numbers.',
  getRound,
};

export default gcd;
