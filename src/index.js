function start(gameDataObj) {
  const name = gameDataObj.greetAndGetName();
  console.log(gameDataObj.gameRules);
  let counter = 0;
  while (counter < 3) {
    const question = gameDataObj.createQuestion();
    const formattedQuestion = gameDataObj.formatQuestionForUser !== undefined
      ? gameDataObj.formatQuestionForUser(question)
      : question;
    const expectedAnswer = gameDataObj.formatExpectedAns
      ? gameDataObj.formatExpectedAns(gameDataObj.solve(question))
      : gameDataObj.solve(question);
    console.log(`Question: ${formattedQuestion}`);
    const userAnswer = gameDataObj.getUsrAnswer();
    // eslint-disable-next-line eqeqeq
    if (expectedAnswer == userAnswer) {
      console.log('Correct!');
      counter += 1;
      if (counter === 3) {
        console.log(`Congratulations, ${name}!`);
      }
    } else {
      console.log(
        `'${userAnswer}' is wrong answer ;(. Correct answer was '${expectedAnswer}'. Let's try again, ${name}!`
      );
    }
  }
}

export default start;
