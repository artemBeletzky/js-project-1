import readlineSync from 'readline-sync';
import { congrats } from '../index.js';

function euclidsAlgo(a, b) {
  const bigger = a > b ? a : b;
  const smaller = a < b ? a : b;
  const remainder = bigger - smaller;
  if (remainder % smaller <= 0) {
    return smaller;
  }
  return euclidsAlgo(remainder, smaller);
}

function brainGcdLogic(name, inARow = 0) {
  if (inARow === 3) {
    congrats(name);
    return;
  }
  const randomNum1 = Math.ceil(Math.random() * 100);
  const randomNum2 = Math.ceil(Math.random() * 100);
  const correctAnswer = euclidsAlgo(randomNum1, randomNum2);
  console.log(`Question: ${randomNum1} ${randomNum2}`);
  const userAnswer = readlineSync.question('Your answer: ');
  // We compare a string to a number
  // eslint-disable-next-line eqeqeq
  const result = correctAnswer == userAnswer;
  if (result && inARow <= 2) {
    console.log('Correct!');
    // eslint-disable-next-line consistent-return
    return brainGcdLogic(name, inARow + 1);
  }
  console.log(
    `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\n Let's try again, ${name}!`,
  );
}

export default brainGcdLogic;
