function start(gameDataObj) {
  const name = gameDataObj.greetAndGetName();
  console.log(gameDataObj.gameRules);
  const gameResult = gameDataObj.askQuestions();
  gameDataObj.greetOrTryAgain(gameResult, name);
}

export default start;

// const rules = {
//
//   brainEven: 'Answer "yes" if the number is even, otherwise answer "no".',
//   brainGcd: 'Find the greatest common divisor of given numbers.',
//   brainProgression: 'What number is missing in the progression?',
//   brainPrime: 'Answer "yes" if given number is prime. Otherwise answer "no".',
// };
