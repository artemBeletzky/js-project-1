import readlineSync from 'readline-sync';

function brainPrimeLogic(name, inARow = 0) {
  if (inARow === 3) {
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
    //eslint-disable-next-line consistent-return
    return brainPrimeLogic(name, inARow + 1);
  }
  console.log(
    `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\n Let's try again, ${name}!`
  );
  //eslint-disable-next-line consistent-return
  return brainPrimeLogic(name, 0);
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

export default brainPrimeLogic;
