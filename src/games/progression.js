import readlineSync from 'readline-sync';

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
  return question[0].join(' ');
}
// maybe it's better to actually solve it?
function extractAnswer(question) {
  return question[1];
}

function getUsrAnswer() {
  return readlineSync.question('Your answer: ');
}

const progressionGameData = {
  greetAndGetName,
  gameRules: 'What number is missing in the progression?',
  createQuestion: generateProgression,
  formatQuestionForUser,
  formatExpectedAns: undefined,
  solve: extractAnswer,
  getUsrAnswer,
};

export default progressionGameData;
