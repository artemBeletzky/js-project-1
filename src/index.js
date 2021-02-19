import readlineSync from 'readline-sync';

function greetAndGetName() {
  console.log('Welcome To The Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
}

function start(gameData) {
  const name = greetAndGetName();
  console.log(gameData.gameRule);
  for (let i = 0; i < 3; i += 1) {
    const round = gameData.getRound();
    console.log(`Question: ${round.q}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (round.a !== userAnswer) {
      console.log(
        `'${userAnswer}' is wrong answer ;(. Correct answer was '${round.a}'. Let's try again, ${name}!`
      );
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${name}!`);
}
export default start;
