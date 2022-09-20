import getQuestionOne from './questions.js'

const questionBoxHTML = document.getElementById('questionsBox')
const quizButtonsHTML = document.getElementById('quizButtons')
const answers = document.querySelectorAll('.answer')
const header = document.getElementById('header')
const startQuizButton = document.getElementById('startButton')
const scoreBoxHTML = document.getElementById('scoreBox')

let answer
let score = 0

const appendToBody = (question, a1, a2, a3, a4) => {
  questionBoxHTML.innerHTML = question
  answers[0].innerHTML = a1
  answers[1].innerHTML = a2
  answers[2].innerHTML = a3
  answers[3].innerHTML = a4
}

function getAnswer() {
  for (let i = 0; i < answers.length; i++) {
    answers[i].addEventListener('click', () => {
      if (i == 0) {
        answer = answers[i]
      }
      if (i == 1) {
        answer = answers[i]
      }
      if (i == 2) {
        answer = answers[i]
      }
      if (i == 3) {
        answer = answers[i]
      }
      console.log(answer)
    })
  }
}



function beginQuiz() {
  header.classList.add('header')
  startQuizButton.style.display = 'none'
  getQuestionOne()
}