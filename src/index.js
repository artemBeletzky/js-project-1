import readlineSync from 'readline-sync';

const start = (game, numOfRounds = 3) => {
  console.log('Welcome To The Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  const { description, getRound } = game;
  console.log(description);
  for (let i = 0; i < numOfRounds; i += 1) {
    const { question, answer } = getRound();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (answer !== userAnswer) {
      console.log(
        `'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'. Let's try again, ${name}!`,
      );
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${name}!`);
};

export default start;
