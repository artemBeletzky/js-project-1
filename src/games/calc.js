import generateRandomNum from '../utilities.js';

const composeAnExpression = () => {
  const operand1 = generateRandomNum(1, 100);
  const operand2 = generateRandomNum(1, 100);
  const performOperation = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
    '*': (a, b) => a * b,
  };
  const operators = Object.keys(performOperation);
  const operator = operators[generateRandomNum(0, operators.length - 1)];
  return {
    operand1,
    operand2,
    operator,
    answer: performOperation[operator](operand1, operand2),
  };
};

const getRound = () => {
  const {
    answer, operand1, operand2, operator,
  } = composeAnExpression();
  const question = `${operand1} ${operator} ${operand2}`;
  return {
    question,
    answer: answer.toString(),
  };
};

const calc = {
  description: 'What is the result of the expression?',
  getRound,
};

export default calc;
