import readlineSync from 'readline-sync';

function greetAndGetName() {
  console.log('Welcome To The Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
}

function createRandomNum() {
  return Math.ceil(Math.random() * 100);
}

function formatExpectedAns(boolean) {
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

function getUsrAnswer() {
  return readlineSync.question('Your answer: ');
}

function greetOrTryAgain(gameResultObj, name) {
  const phrase = gameResultObj.result === 'won'
    ? `Congratulations, ${name}!`
    : `'${gameResultObj.wrongAns}' is wrong answer ;(. Correct answer was '${gameResultObj.correctAns}'. Let's try again, ${name}!`;
  console.log(phrase);
}

const primeGameData = {
  greetAndGetName,
  gameRules: 'Answer "yes" if given number is prime. Otherwise answer "no".',
  createQuestion: createRandomNum,
  formatQuestionForUser: undefined,
  formatExpectedAns,
  solve: isPrime,
  getUsrAnswer,
  greetOrTryAgain,
};

export default primeGameData;
