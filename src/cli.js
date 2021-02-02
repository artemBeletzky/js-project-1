import readlineSync from 'readline-sync';

function askNameAndGreet() {
  console.log('Welcome To The Brain Games!');
  const name = readlineSync.question("What's your name? ");
  console.log(`Hello, ${name}!`);
  return name;
}

export default askNameAndGreet;
