export default getQuestionOne => {
  fetch('RushTrivia.json').then((response) => {
    response.json()
      .then(data => {
        const stringifiedQuestion = JSON.stringify(data.$q1.question)
        const stringifiedAnswerOne = JSON.stringify(data.$q1.answers.answer1)
        const stringifiedAnswerTwo = JSON.stringify(data.$q1.answers.answer2)
        const stringifiedAnswerThree = JSON.stringify(data.$q1.answers.answer3)
        const stringifiedAnswerFour = JSON.stringify(data.$q1.answers.answer4)
        const question = stringifiedQuestion.slice(1, 45)
        const answerOne = stringifiedAnswerOne.slice(1, 12)
        const answerTwo = stringifiedAnswerTwo.slice(1, 13)
        const answerThree = stringifiedAnswerThree.slice(1, 12)
        const answerFour = stringifiedAnswerFour.slice(1, 12)



        appendToBody(question, answerOne, answerTwo, answerThree, answerFour)
        getAnswer()
        if(answer == answers[3]){
          scoreIncrease()
        }
      })
  })
}