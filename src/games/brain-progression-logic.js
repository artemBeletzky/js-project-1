import readlineSync from 'readline-sync';

function brainProgressionLogic(name, inARow = 0) {
  if (inARow === 3) {
    return;
  }
  const gameData = generateProgression();
  const correctAnswer = gameData[1];
  console.log(`Question: ${gameData[0]}`);
  const userAnswer = readlineSync.question('Your answer: ');
  // We compare a string to a number
  //eslint-disable-next-line eqeqeq
  const result = correctAnswer == userAnswer;
  if (result && inARow <= 2) {
    console.log('Correct!');
    //eslint-disable-next-line consistent-return
    return brainProgressionLogic(name, inARow + 1);
  }
  console.log(
    `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\n Let's try again, ${name}!`
  );
  //eslint-disable-next-line consistent-return
  return brainProgressionLogic(name, 0);
}

function generateProgression() {
  const generateStart = Math.floor(Math.random() * 90);
  const generateLength = Math.round(Math.random() * (30 - 20) + 20);
  const generateStep = Math.ceil(Math.random() * (4 - 2) + 2);
  const progressionArr = [];
  for (
    let i = generateStart;
    i <= generateLength + generateStart;
    i += generateStep
  ) {
    progressionArr.push(i);
  }
  const missingIndex = Math.floor(Math.random() * progressionArr.length);
  const answer = progressionArr[missingIndex];
  progressionArr[missingIndex] = '..';
  return [progressionArr, answer];
}

export default brainProgressionLogic;
