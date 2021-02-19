function createRandomNum() {
  return Math.ceil(Math.random() * 100);
}

function createQAndA() {
  const q = createRandomNum();
  return {
    q,
    a: formatQ(q),
  };
}

function checkIfEven(number) {
  return number % 2 === 0;
}

function formatQ(q) {
  return checkIfEven(q) ? 'yes' : 'no';
}

const evenGameData = {
  gameRule: 'Answer "yes" if the number is even, otherwise answer "no".',
  getRound: createQAndA,
};

export default evenGameData;
