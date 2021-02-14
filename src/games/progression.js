import readlineSync from 'readline-sync';

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

function progression(name, inARow = 0) {
  if (inARow === 3) {
    congrats(name);
    return;
  }
  const gameData = generateProgression();
  const correctAnswer = gameData[1];
  const question = gameData[0].join(' ');
  console.log(`Question: ${question}`);
  const userAnswer = readlineSync.question('Your answer: ');
  // We compare a string to a number so it's "=="
  // eslint-disable-next-line eqeqeq
  const result = correctAnswer == userAnswer;
  if (result && inARow <= 2) {
    console.log('Correct!');
    // eslint-disable-next-line consistent-return
    return progression(name, inARow + 1);
  }
  console.log(
    `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\n Let's try again, ${name}!`
  );
}

export default progression;
