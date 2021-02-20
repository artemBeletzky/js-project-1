const createRandomNum = () => Math.ceil(Math.random() * 100);

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

const createQAndA = () => {
  const q = createRandomNum();
  return {
    q,
    a: formatQ(q),
  };
};

const prime = {
  description: 'Answer "yes" if given number is prime. Otherwise answer "no".',
  getRound: createQAndA,
};

export default prime;
