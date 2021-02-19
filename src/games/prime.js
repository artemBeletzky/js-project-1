function createRandomNum() {
  return Math.ceil(Math.random() * 100);
}

function isPrime(n) {
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
}

function formatQ(q) {
  return isPrime(q) ? 'yes' : 'no';
}

function createQAndA() {
  const q = createRandomNum();
  return {
    q,
    a: formatQ(q),
  };
}

const prime = {
  gameRule: 'Answer "yes" if given number is prime. Otherwise answer "no".',
  getRound: createQAndA,
};

export default prime;
