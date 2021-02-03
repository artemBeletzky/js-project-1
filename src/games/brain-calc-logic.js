import readlineSync from 'readline-sync';

function brainCalcLogic(name, inARow = 0) {
  if (inARow === 3) {
    return;
  }
  const operationObj = composeAnExpression();
  const expressionString = `${operationObj.operand1}${operationObj.operator}${operationObj.operand2}`;
  const correctAnswer = operationObj.answer;
  console.log(
    `What is the result of the expression?\n Question: ${expressionString}`
  );
  const userAnswer = readlineSync.question('Your answer: ');
  // compare a string to a number
  const result = correctAnswer == userAnswer;
  if (result && inARow <= 2) {
    console.log('Correct!');
    //eslint-disable-next-line consistent-return
    return brainCalcLogic(inARow + 1);
  }
  console.log(
    `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\n Let's try again, ${name}!`
  );
  //eslint-disable-next-line consistent-return
  return brainCalcLogic(0);
}

function composeAnExpression() {
  const randNum1 = Math.round(Math.random() * 99);
  const randNum2 = Math.round(Math.random() * 99);
  const listOfOp = ['+', '-', '*'];
  const chooseOp = listOfOp[Math.floor(Math.random() * 3)];
  const performOperation = {
    '+': (num1, num2) => num1 + num2,
    '-': (num1, num2) => num1 - num2,
    '*': (num1, num2) => num1 * num2,
  };
  return {
    answer: performOperation[chooseOp](randNum1, randNum2),
    operand1: randNum1,
    operand2: randNum2,
    operator: chooseOp,
  };
}

export default brainCalcLogic;
