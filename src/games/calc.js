import readlineSync from 'readline-sync';

const calcGameData = {
  greetAndGetName,
  gameRules: 'What is the result of the expression?',
  createQuestion: composeExpressionStr,
  formatQuestionStr: undefined,
  defineExpectedAns: undefined,
  solve: parse,
  getUsrAnswer,
  greetOrTryAgain,
};

function greetAndGetName() {
  console.log('Welcome To The Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
}

function composeExpressionStr() {
  const randNum1 = Math.round(Math.random() * 99);
  const randNum2 = Math.round(Math.random() * 99);
  const operations = ['+', '-', '*'];
  const randIndex = Math.floor(Math.random() * 3);
  return `${randNum1} ${operations[randIndex]} ${randNum2}`;
}

// no need, delete it later
// function formatQuestionStr(question) {
//   return {
//     formattedForUsr: question,
//     notFormatted: question,
//   };
// }

// function defineExpected(isEven) {
//   return isEven === true ? 'yes' : 'no';
// }

function parse(str) {
  return Function(`'use strict'; return (${str})`)();
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

export default calcGameData;
