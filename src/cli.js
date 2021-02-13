import readlineSync from 'readline-sync';

function askNameAndGreet() {
  console.log('Welcome To The Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
}

export default askNameAndGreet;
