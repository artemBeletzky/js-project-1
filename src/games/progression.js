function generateProg() {
  const generateStart = Math.floor(Math.random() * 90);
  const generateLength = Math.round(Math.random() * (30 - 20) + 20);
  const generateStep = Math.ceil(Math.random() * (4 - 2) + 2);
  const progArr = [];
  for (
    let i = generateStart;
    i <= generateLength + generateStart;
    i += generateStep
  ) {
    progArr.push(i);
  }
  const missingIndex = Math.floor(Math.random() * progArr.length);
  progArr[missingIndex] = '..';
  return progArr;
}

function solveProg(arr) {
  let n1;
  let n2;
  const missingNumIndex = arr.indexOf('..');
  for (let i = 0; i < arr.length; i += 1) {
    if (typeof arr[i] === 'number' && typeof arr[i + 1] === 'number') {
      n1 = arr[i];
      n2 = arr[i + 1];
      break;
    }
  }
  const step = n2 - n1;
  return arr[missingNumIndex - 1]
    ? arr[missingNumIndex - 1] + step
    : arr[missingNumIndex + 1] - step;
}

function formatQuestionString(q) {
  return q.join(' ');
}

function defineCorrectAnswer(q) {
  return solveProg(q.rawData);
}

function createQuestion() {
  const rawData = generateProg();
  return {
    rawData,
    formatted: formatQuestionString(rawData),
  };
}

const progressionGameData = {
  gameRules: 'What number is missing in the progression?',
  createQuestion,
  defineCorrectAnswer,
};

export default progressionGameData;
