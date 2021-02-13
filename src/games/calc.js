import readlineSync from 'readline-sync';

const calcGameData = {
  greetAndGetName,
  gameRules: 'What is the result of the expression?',
  createQuestion: composeExpressionStr,
  solve: parse,
  askQuestions,
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

function parse(str) {
  return Function(`'use strict'; return (${str})`)();
}

function greetOrTryAgain(gameResultObj, name) {
  const phrase =
    gameResultObj.result === 'won'
      ? `Congratulations, ${name}!`
      : `'${gameResultObj.wrongAns}' is wrong answer ;(. Correct answer was '${gameResultObj.correctAns}'. Let's try again, ${name}!`;
  console.log(phrase);
}

function askQuestions() {
  let counter = 0;
  while (counter < 3) {
    const createQuestion = composeExpressionStr();
    const defineCorrectAnswer = parse(createQuestion);
    console.log(`Question: ${createQuestion}`);
    const getUserAnswer = readlineSync.question('Your answer: ');
    if (defineCorrectAnswer == getUserAnswer) {
      console.log('Correct!');
      counter += 1;
      if (counter === 3) {
        return {
          result: 'won',
        };
      }
    } else {
      return {
        correctAns: defineCorrectAnswer,
        wrongAns: getUserAnswer,
        result: 'lost',
      };
    }
  }
}

export default calcGameData;
