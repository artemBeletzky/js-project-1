function generateProgressionAndAnswer() {
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

function formatQuestionString(question) {
  return question[0].join(' ');
}
// maybe it's better to actually solve it?
function extractAnswer(question) {
  return question[1];
}

const progressionGameData = {
  gameRules: 'What number is missing in the progression?',
  createQuestion: generateProgressionAndAnswer,
  formatQuestionString,
  formatExpAnswer: undefined,
  solve: extractAnswer,
};

export default progressionGameData;
