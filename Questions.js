import { questions } from './QandA.js'
import { answers } from './QandA.js'

const questionBox = document.getElementById('questionsBox')
const answersBox = document.querySelectorAll('.answer')
const next = document.getElementById('nextQuestion')

let questionNumber = 0
let score = 0

const appendToBody = (question, a1,a2,a3,a4) => {
  questionBox.innerHTML = question
  answersBox[0].innerHTML = a1
  answersBox[1].innerHTML = a2
  answersBox[2].innerHTML = a3
  answersBox[3].innerHTML = a4
}

const getQuestion = (a) => {  //a stands in for questionNumber
  if(a == 0) {
    appendToBody(questions[0],answers[0][0],answers[0][1],answers[0][2],answers[0][3])
  }
  if(a == 1) {
    appendToBody(questions[1],answers[1][0],answers[1][1],answers[1][2],answers[1][3])
  }
  if(a == 2) {
    appendToBody(questions[2],answers[2][0],answers[2][1],answers[2][2],answers[2][3])
  }
  if(a == 3) {
    appendToBody(questions[3],answers[3][0],answers[3][1],answers[3][2],answers[3][3])
  }
  if(a == 4) {
    appendToBody(questions[4],answers[4][0],answers[4][1],answers[4][2],answers[4][3])
  }
}

const Questions = (a) => {
  getQuestion(questionNumber)
  if(a > 4) {

    document.body.innerHTML = `Score: ${score}/5`
  } 
  
}


const answerArr = Array.from(answersBox)
for(let i = 0; i < answerArr.length; i++) {
  answerArr[i].addEventListener('click', () => {
    answerArr[i].classList.add('incorrect')
    if(i == 3 && questionNumber == 0) {
      score++
      answerArr[i].classList.remove('incorrect')
      answerArr[i].classList.add('correct')
    }
    if(i == 2 && questionNumber == 1) {
      score++
      answerArr[i].classList.remove('incorrect')
      answerArr[i].classList.add('correct')
    }
    if(i == 3 && questionNumber == 2) {
      score++
      answerArr[i].classList.remove('incorrect')
      answerArr[i].classList.add('correct')
    }
    if(i == 1 && questionNumber == 3) {
      score++
      answerArr[i].classList.remove('incorrect')
      answerArr[i].classList.add('correct')
    }
    if(i == 1 && questionNumber == 4) {
      score++
      answerArr[i].classList.remove('incorrect')
      answerArr[i].classList.add('correct')
    }
  })
}
next.addEventListener('click', () => {
  questionNumber++
  Questions(questionNumber)
  answerArr.forEach(answer => {
    answer.classList.remove('correct')
    answer.classList.remove('incorrect')
  })
})

export default Questions