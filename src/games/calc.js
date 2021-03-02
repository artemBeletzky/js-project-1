import generateRandomNum from './utilities.js';

const composeAnExpression = () => {
  const [num1, num2] = generateRandomNum();
  const operators = ['+', '-', '*'];
  const operation = operators[Math.floor(Math.random() * 3)];
  const performOperation = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
    '*': (a, b) => a * b,
  };
  return {
    answer: performOperation[operation](num1, num2),
    operand1: num1,
    operand2: num2,
    operator: operation,
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
