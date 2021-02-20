const generateProg = () => {
  const start = Math.floor(Math.random() * 90);
  const length = Math.round(Math.random() * (30 - 20) + 20);
  const step = Math.ceil(Math.random() * (4 - 2) + 2);
  const progression = [];
  for (
    let i = start;
    i <= length + start;
    i += step
  ) {
    progression.push(i);
  }
  const missingIndex = Math.floor(Math.random() * progression.length);
  progression[missingIndex] = '..';
  return progression;
};

const solveProg = (arr) => {
  let n1;
  let n2;
  const missingNum = arr.indexOf('..');
  for (let i = 0; i < arr.length; i += 1) {
    if (typeof arr[i] === 'number' && typeof arr[i + 1] === 'number') {
      n1 = arr[i];
      n2 = arr[i + 1];
      break;
    }
  }
  const step = n2 - n1;
  return arr[missingNum - 1]
    ? arr[missingNum - 1] + step
    : arr[missingNum + 1] - step;
};

const createQAndA = () => {
  const q = generateProg();
  return {
    q: q.join(' '),
    a: solveProg(q).toString(),
  };
};

const progression = {
  description: 'What number is missing in the progression?',
  getRound: createQAndA,
};

export default progression;
