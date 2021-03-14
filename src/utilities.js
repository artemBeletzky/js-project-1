// The maximum is inclusive and the minimum is inclusive
const generateRandomNum = (minNum, maxNum) => {
  const min = Math.ceil(minNum);
  const max = Math.floor(maxNum);
  return Math.floor(Math.random() * (max - min + 1) + min);
};

export default generateRandomNum;
