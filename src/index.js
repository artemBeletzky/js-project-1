import readlineSync from 'readline-sync';

function greetAndGetName() {
  console.log('Welcome To The Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
}

function start(gameDataObj) {
  const name = greetAndGetName();
  console.log(gameDataObj.gameRules);
  let counter = 0;
  while (counter < 3) {
    const question = gameDataObj.createQuestion();
    const expectedAnswer = gameDataObj.defineCorrectAnswer(question);
    console.log(`Question: ${question.formatted}`);
    const userAnswer = readlineSync.question('Your answer: ');
    // eslint-disable-next-line eqeqeq
    if (expectedAnswer == userAnswer) {
      console.log('Correct!');
      counter += 1;
      if (counter === 3) {
        console.log(`Congratulations, ${name}!`);
        return;
      }
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${expectedAnswer}'. Let's try again, ${name}!`);
      return;
    }
  }
}
export default start;
