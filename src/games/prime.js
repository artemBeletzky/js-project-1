import readlineSync from 'readline-sync';
import { congrats } from '../index.js';

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

function prime(name, inARow = 0) {
  if (inARow === 3) {
    congrats(name);
    return;
  }
  // excluding 0
  const defineRandomNumber = Math.ceil(Math.random() * 100);
  const correctAnswer = isPrime(defineRandomNumber) ? 'yes' : 'no';
  console.log(`Question: ${defineRandomNumber}`);
  const userAnswer = readlineSync.question('Your answer: ');
  const result = correctAnswer === userAnswer;
  if (result && inARow <= 2) {
    console.log('Correct!');
    // eslint-disable-next-line consistent-return
    return prime(name, inARow + 1);
  }
  console.log(
    `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\n Let's try again, ${name}!`
  );
}

export default prime;
