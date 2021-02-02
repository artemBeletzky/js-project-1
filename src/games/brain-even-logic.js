import readlineSync from 'readline-sync';

function brainEvenLogic(inARow = 0) {
  if (inARow === 3) {
    return;
  }
  const defineRandomNumber = Math.ceil(Math.random() * 100);
  const correctAnswer = defineRandomNumber % 2 === 0 ? 'yes' : 'no';
  console.log(`Question: ${defineRandomNumber}`);
  const userAnswer = readlineSync.question('Your answer: ');
  const result = correctAnswer === userAnswer;
  //  if (userAnswer === 'exit') {
  //  console.log('Bye-bye!');
  //  process.exit();
  //  }
  //if (result && inARow <= 2) {
  //  return brainEvenLogic(inARow + 1);
  //}
  if (result && inARow <= 2) {
    console.log('Correct! Moving on to the next one!');
    return brainEvenLogic(inARow + 1);
  }
  console.log(
    `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`
  );
  return brainEvenLogic(0);
}

export default brainEvenLogic;
