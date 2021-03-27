import generateRandomNum from '../utilities.js';
import start from '../index.js';

const performOperation = {
  '+': (a, b) => a + b,
  '-': (a, b) => a - b,
  '*': (a, b) => a * b,
};

const getRound = () => {
  const operand1 = generateRandomNum(1, 100);
  const operand2 = generateRandomNum(1, 100);
  const operators = Object.keys(performOperation);
  const operator = operators[generateRandomNum(0, operators.length - 1)];
  const question = `${operand1} ${operator} ${operand2}`;
  const answer = performOperation[operator](operand1, operand2).toString();
  return {
    question,
    answer,
  };
};

const calc = () => {
  const data = {
    description: 'What is the result of the expression?',
    getRound,
  };
  start(data);
};

export default calc;
