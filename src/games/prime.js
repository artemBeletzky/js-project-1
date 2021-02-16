function createRandomNum() {
  return Math.ceil(Math.random() * 100);
}

function formatExpAnswer(boolean) {
  return boolean ? 'yes' : 'no';
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
  createQuestion: createRandomNum,
  formatQuestionForUser: undefined,
  formatExpAnswer,
  solve: isPrime,
};

export default primeGameData;
