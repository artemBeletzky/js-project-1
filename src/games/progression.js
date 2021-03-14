import generateRandomNum from '../utilities.js';

const generateProg = () => {
  const start = generateRandomNum(0, 90);
  const length = generateRandomNum(20, 30);
  const step = generateRandomNum(2, 5);
  const progression = [];
  for (let i = start; i <= start + length; i += step) {
    progression.push(i);
  }
  const missingIndex = generateRandomNum(0, progression.length - 1);
  const answer = progression[missingIndex].toString();
  progression[missingIndex] = '..';
  return {
    question: progression,
    answer,
  };
};

const getRound = () => {
  const { question, answer } = generateProg();
  return {
    question: question.join(' '),
    answer,
  };
};

const progression = {
  description: 'What number is missing in the progression?',
  getRound,
};

export default progression;
