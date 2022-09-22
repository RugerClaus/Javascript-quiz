
export const questions = []
export const answers = [[],[],[],[],[]]
const qandAData = []

fetch('RushTrivia.json').then(trivia => {
    trivia.json().then(triviaQuestions => {
      qandAData.push({triviaQuestions})
      questions.push(qandAData[0].triviaQuestions.$q1.question)
      questions.push(qandAData[0].triviaQuestions.$q2.question)
      questions.push(qandAData[0].triviaQuestions.$q3.question)
      questions.push(qandAData[0].triviaQuestions.$q4.question)
      questions.push(qandAData[0].triviaQuestions.$q5.question)
  
      answers[0].push(qandAData[0].triviaQuestions.$q1.answers.answer1)
      answers[0].push(qandAData[0].triviaQuestions.$q1.answers.answer2)
      answers[0].push(qandAData[0].triviaQuestions.$q1.answers.answer3)
      answers[0].push(qandAData[0].triviaQuestions.$q1.answers.answer4)
      answers[1].push(qandAData[0].triviaQuestions.$q2.answers.answer1)
      answers[1].push(qandAData[0].triviaQuestions.$q2.answers.answer2)
      answers[1].push(qandAData[0].triviaQuestions.$q2.answers.answer3)
      answers[1].push(qandAData[0].triviaQuestions.$q2.answers.answer4)
      answers[2].push(qandAData[0].triviaQuestions.$q3.answers.answer1)
      answers[2].push(qandAData[0].triviaQuestions.$q3.answers.answer2)
      answers[2].push(qandAData[0].triviaQuestions.$q3.answers.answer3)
      answers[2].push(qandAData[0].triviaQuestions.$q3.answers.answer4)
      answers[3].push(qandAData[0].triviaQuestions.$q4.answers.answer1)
      answers[3].push(qandAData[0].triviaQuestions.$q4.answers.answer2)
      answers[3].push(qandAData[0].triviaQuestions.$q4.answers.answer3)
      answers[3].push(qandAData[0].triviaQuestions.$q4.answers.answer4)
      answers[4].push(qandAData[0].triviaQuestions.$q5.answers.answer1)
      answers[4].push(qandAData[0].triviaQuestions.$q5.answers.answer2)
      answers[4].push(qandAData[0].triviaQuestions.$q5.answers.answer3)
      answers[4].push(qandAData[0].triviaQuestions.$q5.answers.answer4)
      questions.push(qandAData[0].triviaQuestions.gameOver)
    })
  })