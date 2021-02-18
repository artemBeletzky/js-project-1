function createRandomNum() {
  return Math.ceil(Math.random() * 100);
}

function defineCorrectAnswer(q) {
  return isPrime(q.rawData) ? 'yes' : 'no';
}

function createQuestion() {
  const rawData = createRandomNum();
  return {
    rawData,
    formatted: rawData,
  };
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

const primeGameData = {
  gameRules: 'Answer "yes" if given number is prime. Otherwise answer "no".',
  createQuestion,
  defineCorrectAnswer,
};

export default primeGameData;
