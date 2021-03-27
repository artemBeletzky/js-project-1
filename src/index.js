import readlineSync from 'readline-sync';

const start = ({
  description,
  getRound,
}) => {
  console.log('Welcome To The Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  // const { description, getRound } = game;
  console.log(description);
  const roundsCount = 3;
  for (let i = 0; i < roundsCount; i += 1) {
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
