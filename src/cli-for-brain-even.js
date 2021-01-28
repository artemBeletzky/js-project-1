import readlineSync from 'readline-sync';

function askNameAndGreet() {
  console.log('Welcome To The Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  askQuestions(name);
}

//  this function calls itself in case the user given a wrong answer
function askQuestions(name, counter = 0) {
  const defineRandomNumber = Math.floor(Math.random() * 101);
  const defineTheCorrectAnswer = defineRandomNumber % 2 === 0 ? 'yes' : 'no';
  console.log(`Question: ${defineRandomNumber}`);
  const userAnswer = readlineSync.question('Your answer: ');
  const result = defineTheCorrectAnswer === userAnswer;
  if (result && counter < 3) {
    console.log('Correct!');
    askQuestions(name, counter + 1);
  } else {
    console.log(
      `${name}, your answer in incorrect. Answer correctly 3 times in a row to win this game. Let's start once again.`
    );
    askQuestions(name, counter);
  }
}

export default askNameAndGreet();
