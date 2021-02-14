function start(gameDataObj) {
  const name = gameDataObj.greetAndGetName();
  console.log(gameDataObj.gameRules);
  // eslint-disable-next-line consistent-return
  const result = (function () {
    let counter = 0;
    while (counter < 3) {
      const question = gameDataObj.createQuestion();
      // only if formatting is needed
      // NEEDS ADJUSTMENTS, NO NEED TO RETURN AN OBJECT WE ONLY FORMAT IT FOR A USER
      const formattedQuestion =
        gameDataObj.formatQuestionForUser !== undefined
          ? gameDataObj.formatQuestionForUser(question).formattedForUsr
          : question;
      // only if formatting is needed
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
          return {
            result: 'won',
          };
        }
      } else {
        return {
          correctAns: expectedAnswer,
          wrongAns: userAnswer,
          result: 'lost',
        };
      }
    }
  })();
  gameDataObj.greetOrTryAgain(result, name);
}

export default start;
