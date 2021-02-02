import askNameAndGreet from './cli.js';

function startTheGame(gameLogic) {
  const name = askNameAndGreet();
  gameLogic();
  congrats(name);
}
function congrats(name) {
  console.log(`Congratulations, ${name}!`);
}

export default startTheGame;
