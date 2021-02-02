import readlineSync from 'readline-sync';
import checkIfBlank from './utility_functions.js';

// calls itself if inARow is less then 3
// eslint-disable-next-line consistent-return
function brainCalcLogic(name, inARow = 0) {
  if (inARow === 3) {
    console.log(`Congratulations, ${name}! You've won the game!`);
    process.exit(); // askNameAndGreet gets invoked again, if I don't use process.exit()
  } else {
    const operationObj = composeAnExpression();
    const expressionString = `${operationObj.operand1}${operationObj.operator}${operationObj.operand2}`;
    const correctAnswer = operationObj.answer;
    console.log(
      `What is the result of the expression?\n Question: ${expressionString}`
    );
    const userAnswer = readlineSync.question('Your answer: ');
    // explicitly convert values
    const result = correctAnswer === Number(userAnswer);
    if (userAnswer === 'exit') {
      console.log('Bye-bye!');
      process.exit();
    }
    if (checkIfBlank(userAnswer)) {
      console.log(`${name}, you forgot to enter the answer:(`);
      return brainCalcLogic(name, inARow);
    }
    if (result) {
      if (inARow < 3) {
        console.log('Correct! Moving on to the next one!');
      }
      return brainCalcLogic(name, inARow + 1);
    }
    console.log(
      `'${userAnswer}' is the wrong answer ;(. The correct answer was '${correctAnswer}'. Let's try again, ${name}!`
    );
    return brainCalcLogic(name, 0);
  }
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
