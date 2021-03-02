const generateRandomNum = () => {
  const a = Math.round(Math.random() * 99);
  const b = Math.round(Math.random() * 99);
  return [a, b];
};

export default generateRandomNum;
