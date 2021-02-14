import readlineSync from 'readline-sync';

const gcdGameData = {
  greetAndGetName,
  gameRules: 'Find the greatest common divisor of given numbers.',
  createQuestion: createTwoRandNums,
  defineAnswer: euclidsAlgo,
  readAnswer,
  greetOrTryAgain,
};

function readAnswer() {
  const answer = readlineSync.question('Your answer: ');
  return answer;
}

function greetAndGetName() {
  console.log('Welcome To The Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
}

function createTwoRandNums() {
  const a = Math.round(Math.random() * 99);
  const b = Math.round(Math.random() * 99);
}

function formatQuestion() {
  return {
    formattedForUsr: `${a} ${b}`,
    notFormatted: [a, b],
  };
}

function euclidsAlgo([a, b]) {
  const bigger = a > b ? a : b;
  const smaller = a < b ? a : b;
  const remainder = bigger - smaller;
  if (remainder % smaller <= 0) {
    return smaller;
  }
  return euclidsAlgo([remainder, smaller]);
}

function greetOrTryAgain(gameResultObj, name) {
  const phrase = gameResultObj.result === 'won'
    ? `Congratulations, ${name}!`
    : `'${gameResultObj.wrongAns}' is wrong answer ;(. Correct answer was '${gameResultObj.correctAns}'. Let's try again, ${name}!`;
  console.log(phrase);
}

// function askQuestions() {
//   let counter = 0;
//   while (counter < 3) {
//     const question = createTwoRandNums();
//     const expectedAnswer = euclidsAlgo(question);
//     console.log(`Question: ${question.join(' ')}`);
//     const userAnswer = readlineSync.question('Your answer: ');
//     if (expectedAnswer == userAnswer) {
//       console.log('Correct!');
//       counter += 1;
//       if (counter === 3) {
//         return {
//           result: 'won',
//         };
//       }
//     } else {
//       return {
//         correctAns: expectedAnswer,
//         wrongAns: userAnswer,
//         result: 'lost',
//       };
//     }
//   }
// }

export default gcdGameData;
