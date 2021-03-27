import generateRandomNum from '../utilities.js';
import start from '../index.js';

const generateProg = (startNum = 0, step = 2, length = 10) => {
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    if (progression.length === 0) {
      progression.push(startNum);
    } else {
      progression.push(progression[i - 1] + step);
    }
  }
  return progression;
};

const getRound = () => {
  const startNum = generateRandomNum(0, 50);
  const step = generateRandomNum(2, 7);
  const length = generateRandomNum(5, 15);
  const progression = generateProg(startNum, step, length);
  const hiddenIndex = generateRandomNum(0, progression.length - 1);
  const answer = progression[hiddenIndex].toString();
  progression[hiddenIndex] = '..';
  const question = progression.join(' ');
  return {
    question,
    answer,
  };
};

const progression = () => {
  const data = {
    description: 'What number is missing in the progression?',
    getRound,
  };
  start(data);
};

export default progression;
