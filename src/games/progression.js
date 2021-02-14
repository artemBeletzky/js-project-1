import readlineSync from 'readline-sync';

const progressionGameData = {
  greetAndGetName,
  gameRules: 'What number is missing in the progression?',
  createQuestion: generateProgression,
  formatQuestionForUser,
  formatExpectedAns: undefined,
  solve: extractAnswer,
  getUsrAnswer,
  greetOrTryAgain,
};

function greetAndGetName() {
  console.log('Welcome To The Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
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

function formatQuestionForUser(question) {
  return {
    formattedForUsr: question[0].join(' '),
    notFormatted: question,
  };
}
//maybe it's better to actually solve it?
function extractAnswer(question) {
  return question[1];
}

function getUsrAnswer() {
  return readlineSync.question('Your answer: ');
}

function greetOrTryAgain(gameResultObj, name) {
  const phrase =
    gameResultObj.result === 'won'
      ? `Congratulations, ${name}!`
      : `'${gameResultObj.wrongAns}' is wrong answer ;(. Correct answer was '${gameResultObj.correctAns}'. Let's try again, ${name}!`;
  console.log(phrase);
}

export default progressionGameData;
