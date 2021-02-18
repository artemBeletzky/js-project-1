function createRandomNum() {
  return Math.ceil(Math.random() * 100);
}

function defineCorrectAnswer(q) {
  return checkIfEven(q.rawData) ? 'yes' : 'no';
}

function checkIfEven(number) {
  return number % 2 === 0;
}

function createQuestion() {
  const rawData = createRandomNum();
  return {
    rawData,
    formatted: rawData,
  };
}

const evenGameData = {
  gameRules: 'Answer "yes" if the number is even, otherwise answer "no".',
  createQuestion,
  defineCorrectAnswer,
};

export default evenGameData;
