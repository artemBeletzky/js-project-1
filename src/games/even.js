import readlineSync from 'readline-sync';

const evenGameData = {
  greetAndGetName,
  gameRules: 'Answer "yes" if the number is even, otherwise answer "no".',
  createQuestion: createRandomNum,
  formatQuestionStr,
  solve: checkIfEven,
  defineExpected,
  getUsrAnswer,
  greetOrTryAgain,
};

function greetAndGetName() {
  console.log('Welcome To The Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
}

function createRandomNum() {
  const num = Math.ceil(Math.random() * 100);
  return num;
}

// do i need that?
function formatQuestionStr(question) {
  return {
    formattedForUsr: question,
    notFormatted: question,
  };
}

function defineExpected(isEven) {
  return isEven === true ? 'yes' : 'no';
}

function checkIfEven(number) {
  return number % 2 === 0;
}

function getUsrAnswer() {
  const answer = readlineSync.question('Your answer: ');
  return answer;
}

function greetOrTryAgain(gameResultObj, name) {
  const phrase = gameResultObj.result === 'won'
    ? `Congratulations, ${name}!`
    : `'${gameResultObj.wrongAns}' is wrong answer ;(. Correct answer was '${gameResultObj.correctAns}'. Let's try again, ${name}!`;
  console.log(phrase);
}

export default evenGameData;
