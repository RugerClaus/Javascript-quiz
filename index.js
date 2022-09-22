import Questions from './Questions.js'

const beginQuiz = () => {
  startButton.style.display = 'none'
  Questions()

}
const startButton = document.getElementById('startButton')

startButton.addEventListener('click', beginQuiz)

