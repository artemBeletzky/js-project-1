import readlineSync from 'readline-sync';

function checkIfBlank(str) {
  return str.length === 0 || !str.trim();
}

function askNameAndGreet() {
  console.log('Welcome To The Brain Games!');
  let name = readlineSync.question("What's your name? ");
  while (checkIfBlank(name)) {
    console.log('In order to continue you need to enter your name.');
    name = readlineSync.question("What's your name? ");
  }
  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  askQuestions(name);
}

// calls itself if inARow is less then 3
// eslint-disable-next-line consistent-return
function askQuestions(name, inARow = 0) {
  if (inARow === 3) {
    console.log(`Congratulations, ${name}! You've won the game!`);
    process.exit(); // askNameAndGreet gets invoked again, if I don't use process.exit()
  } else {
    const defineRandomNumber = Math.ceil(Math.random() * 100);
    const correctAnswer = defineRandomNumber % 2 === 0 ? 'yes' : 'no';
    console.log(`Question: ${defineRandomNumber}`);
    const userAnswer = readlineSync.question('Your answer: ');
    const result = correctAnswer === userAnswer;
    if (userAnswer === 'exit') {
      console.log('Bye-bye!');
      process.exit();
    }
    if (checkIfBlank(userAnswer)) {
      console.log(`${name}, you forgot to enter the answer:(`);
      return askQuestions(name, inARow);
    }
    if (result) {
      console.log('Correct! Moving on to the next one!');
      return askQuestions(name, inARow + 1);
    }
    console.log(
      `'${userAnswer}' is the wrong answer ;(. The correct answer was '${correctAnswer}'. Let's try again, ${name}!`
    );
    return askQuestions(name, 0);
  }
}

export default askNameAndGreet();
