import askNameAndGreet from './cli.js';

const rules = {
  brainCalc: 'What is the result of the expression?',
  brainEven: 'Answer "yes" if the number is even, otherwise answer "no".',
  brainGcd: 'Find the greatest common divisor of given numbers.',
  brainProgression: 'What number is missing in the progression?',
  brainPrime: 'Answer "yes" if given number is prime. Otherwise answer "no".',
};

function startTheGame(gameLogic, gameTitle) {
  const name = askNameAndGreet();
  announceRules(gameTitle);
  gameLogic(name);
}
function congrats(name) {
  console.log(`Congratulations, ${name}!`);
}

function announceRules(gameTitle) {
  console.log(rules[gameTitle]);
}

export { startTheGame, congrats };
