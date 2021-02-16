function createRandomNum() {
  return Math.ceil(Math.random() * 100);
}

function formatExpAnswer(boolean) {
  return boolean ? 'yes' : 'no';
}

function checkIfEven(number) {
  return number % 2 === 0;
}

const evenGameData = {
  gameRules: 'Answer "yes" if the number is even, otherwise answer "no".',
  createQuestion: createRandomNum,
  formatQuestionString: undefined,
  formatExpAnswer,
  solve: checkIfEven,
};

export default evenGameData;
