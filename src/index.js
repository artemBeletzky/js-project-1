import askNameAndGreet from './cli.js';

const rules = {
  brainCalc: 'Answer "yes" if the number is even, otherwise answer "no".',
  brainEven: 'What is the result of the expression?',
  brainGcd: 'Find the greatest common divisor of given numbers.',
};

function startTheGame(gameLogic, gameTitle) {
  const name = askNameAndGreet();
  announceRules(gameTitle);
  gameLogic(name);
  congrats(name);
}
function congrats(name) {
  console.log(`Congratulations, ${name}!`);
}

function announceRules(gameTitle) {
  console.log(rules[gameTitle]);
}

export default startTheGame;
