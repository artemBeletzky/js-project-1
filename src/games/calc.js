function composeExpressionStr() {
  const randNum1 = Math.round(Math.random() * 99);
  const randNum2 = Math.round(Math.random() * 99);
  const operations = ['+', '-', '*'];
  const randIndex = Math.floor(Math.random() * 3);
  return `${randNum1} ${operations[randIndex]} ${randNum2}`;
}

function parse(str) {
  // eslint-disable-next-line no-new-func
  return Function(`'use strict'; return (${str})`)();
}

const calcGameData = {
  gameRules: 'What is the result of the expression?',
  createQuestion: composeExpressionStr,
  formatQuestionString: undefined,
  formatExpAnswer: undefined,
  solve: parse,
};

export default calcGameData;
