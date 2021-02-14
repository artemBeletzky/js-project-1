import readlineSync from 'readline-sync';

function greetAndGetName() {
  console.log('Welcome To The Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
}

function createTwoRandNums() {
  const a = Math.round(Math.random() * 99);
  const b = Math.round(Math.random() * 99);
  return [a, b];
}

function formatQuestionForUser(question) {
  const [a, b] = question;
  return `${a} ${b}`;
}

function euclidsAlgo([a, b]) {
  const bigger = a > b ? a : b;
  const smaller = a < b ? a : b;
  const remainder = bigger - smaller;
  if (remainder % smaller <= 0) {
    return smaller;
  }
  return euclidsAlgo([remainder, smaller]);
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

const gcdGameData = {
  greetAndGetName,
  gameRules: 'Find the greatest common divisor of given numbers.',
  createQuestion: createTwoRandNums,
  formatQuestionForUser,
  formatExpectedAns: undefined,
  solve: euclidsAlgo,
  getUsrAnswer,
  greetOrTryAgain,
};

export default gcdGameData;
