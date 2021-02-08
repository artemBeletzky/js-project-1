import readlineSync from 'readline-sync';
import { congrats } from '../index.js';

function brainEvenLogic(name, inARow = 0) {
  if (inARow === 3) {
    congrats(name);
    return;
  }
  const defineRandomNumber = Math.ceil(Math.random() * 100);
  const correctAnswer = defineRandomNumber % 2 === 0 ? 'yes' : 'no';
  console.log(`Question: ${defineRandomNumber}`);
  const userAnswer = readlineSync.question('Your answer: ');
  const result = correctAnswer === userAnswer;
  if (result && inARow <= 2) {
    console.log('Correct!');
    // eslint-disable-next-line consistent-return
    return brainEvenLogic(name, inARow + 1);
  }
  console.log(
    `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\n Let's try again, ${name}!`
  );
}

export default brainEvenLogic;
