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

function createQAndA() {
  const q = composeExpressionStr();
  return {
    q,
    a: parse(q).toString(),
  };
}

const calc = {
  gameRule: 'What is the result of the expression?',
  getRound: createQAndA,
};

export default calc;
