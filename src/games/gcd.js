function createTwoRandNums() {
  const a = Math.round(Math.random() * 99);
  const b = Math.round(Math.random() * 99);
  return [a, b];
}

function formatQuestionString(question) {
  const [a, b] = question;
  return `${a} ${b}`;
}

function euclidsAlgo(a, b) {
  const bigger = a > b ? a : b;
  const smaller = a < b ? a : b;
  const remainder = bigger - smaller;
  if (remainder % smaller <= 0) {
    return smaller;
  }
  return euclidsAlgo(remainder, smaller);
}

function createQAndA() {
  const q = createTwoRandNums();
  const [a, b] = q;
  return {
    q: formatQuestionString(q),
    a: euclidsAlgo(a, b).toString(),
  };
}

const gcd = {
  gameRule: 'Find the greatest common divisor of given numbers.',
  getRound: createQAndA,
};

export default gcd;
