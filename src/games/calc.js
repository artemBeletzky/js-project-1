const composeExpressionStr = () => {
  const randNum1 = Math.round(Math.random() * 99);
  const randNum2 = Math.round(Math.random() * 99);
  const operations = ['+', '-', '*'];
  const randIndex = Math.floor(Math.random() * 3);
  return `${randNum1} ${operations[randIndex]} ${randNum2}`;
};

// eslint-disable-next-line no-new-func
const parse = (str) => Function(`'use strict'; return (${str})`)();

const createQAndA = () => {
  const q = composeExpressionStr();
  return {
    q,
    a: parse(q).toString(),
  };
};

const calc = {
  description: 'What is the result of the expression?',
  getRound: createQAndA,
};

export default calc;
