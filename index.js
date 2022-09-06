
let questionNumber = 0
console.log(`Question: ${questionNumber}`)
let score = 0
const scoreBox = document.getElementById('scoreBox')
const startQuizButton = document.getElementById('startButton')
const questionBox = document.getElementById('questionsBox')
questionBox.classList.add('question')
const answersBox = document.getElementById('answersBox')
answersBox.classList.add('answers')

let selected = false

function quizBegan() {
    startQuizButton.style.display = 'none'
    questionNumber = 0
    score = 0
    scoreBox.style.display = 'none'
    beginQuiz()
    
}
function scoreIncrease() {
    score++
}
function scoreDecrease() {
    score--
}
function selectItem(item,selected) {
    
    selected = true
    console.log(selected)
    item.style.backgroundColor = 'blue'
    item.style.color = 'white'
}
function finalQuestion() {
    nextQuestion()
    scoreBox.style.display = 'block'
    scoreBox.innerHTML = `Final
    Score: ${score > 4 ? score - 1 : score + 1}/5`
    startQuizButton.style.display = 'block'
}

startQuizButton.addEventListener('click', quizBegan)

function question(question,answer1,answer2,answer3,answer4) {

    questionNumber++
    console.log(`Question: ${questionNumber}`)

    questionBox.append(question)

    const answerBox1 = document.createElement('button')  //later we'll put this in an array and use a forEach method to 
    const answerBox2 = document.createElement('button')  //loop through the elements and append the question divs and children
    const answerBox3 = document.createElement('button')  //in the loop
    const answerBox4 = document.createElement('button')
    answerBox1.classList.add('answerBox')
    answerBox2.classList.add('answerBox')
    answerBox3.classList.add('answerBox')
    answerBox4.classList.add('answerBox')

    answersBox.appendChild(answerBox1)
    answerBox1.append(answer1)
    answersBox.appendChild(answerBox2)
    answerBox2.append(answer2)
    answersBox.appendChild(answerBox3)
    answerBox3.append(answer3)
    answersBox.appendChild(answerBox4)
    answerBox4.append(answer4)

    const answerBoxes = document.querySelectorAll('.answerBox')
    answerBoxes.forEach(answer => {
        answer.addEventListener('click', () => {
            selectItem(answer,true)
            switch(questionNumber) {
                case 1: 
                    if(answer == answerBoxes[3]) {
                        scoreIncrease()
                    }else {
                        scoreDecrease()
                    }
                    
                    nextQuestion()
                    getSecondQuestion()
                    break
                case 2: 
                    if(answer == answerBoxes[2]){
                        scoreIncrease()
                    }
                    else {
                        scoreDecrease()
                    }
                    nextQuestion()
                    getThirdQuestion()
                    break
                case 3:
                    if(answer == answerBoxes[3]){
                        scoreIncrease()
                    }
                    else {
                        scoreDecrease()
                    }
                    nextQuestion()
                    getFourthQuestion()
                    break
                case 4:
                    if(answer == answerBoxes[1]){
                        scoreIncrease()
                    }
                    else {
                        scoreDecrease()
                    }
                    nextQuestion()
                    getFifthQuestion()
                    case 5:
                        if(answer == answerBoxes[1]){
                           scoreIncrease() 
                        }
                        else {
                            scoreDecrease()
                        }
                        finalQuestion()
                        
                        break
            }
            
        })
    })

}
function nextQuestion() {
    questionBox.innerHTML = ''
    answersBox.innerHTML = ''
}


function getSecondQuestion() {
    fetch("RushTrivia.json")
    .then(response => {
        response.json()
        .then(data => {
            const questionTwo = JSON.stringify(data.$q2.question)
            const answer1 = JSON.stringify(data.$q2.answers.answer1)
            const answer2 = JSON.stringify(data.$q2.answers.answer2)
            const answer3 = JSON.stringify(data.$q2.answers.answer3)
            const answer4 = JSON.stringify(data.$q2.answers.answer4)
            question(questionTwo,answer1,answer2,answer3,answer4)
        })
    })
}
function getThirdQuestion() {
    fetch("RushTrivia.json")
    .then(response => {
        response.json()
        .then(data => {
            const questionThree = JSON.stringify(data.$q3.question)
            const answer1 = JSON.stringify(data.$q3.answers.answer1)
            const answer2 = JSON.stringify(data.$q3.answers.answer2)
            const answer3 = JSON.stringify(data.$q3.answers.answer3)
            const answer4 = JSON.stringify(data.$q3.answers.answer4)
            question(questionThree,answer1,answer2,answer3,answer4)
        })
    })
}
function getFourthQuestion() {
    fetch("RushTrivia.json")
    .then(response => {
        response.json()
        .then(data => {
            const questionFour = JSON.stringify(data.$q4.question)
            const answer1 = JSON.stringify(data.$q4.answers.answer1)
            const answer2 = JSON.stringify(data.$q4.answers.answer2)
            const answer3 = JSON.stringify(data.$q4.answers.answer3)
            const answer4 = JSON.stringify(data.$q4.answers.answer4)
            question(questionFour,answer1,answer2,answer3,answer4)
        })
    })
}

function getFifthQuestion() {
    fetch("RushTrivia.json")
    .then(response => {
        response.json()
        .then(data => {
            const questionFive = JSON.stringify(data.$q5.question)
            const answer1 = JSON.stringify(data.$q5.answers.answer1)
            const answer2 = JSON.stringify(data.$q5.answers.answer2)
            const answer3 = JSON.stringify(data.$q5.answers.answer3)
            const answer4 = JSON.stringify(data.$q5.answers.answer4)
            question(questionFive,answer1,answer2,answer3,answer4)
        })
    })
}

function beginQuiz() {
    
    fetch("RushTrivia.json").then((response) => {
        response.json().then(data => {
            score = 0
            const question1 = JSON.stringify(data.$q1.question)
            const answer1 = JSON.stringify(data.$q1.answers.answer1)
            const answer2 = JSON.stringify(data.$q1.answers.answer2)
            const answer3 = JSON.stringify(data.$q1.answers.answer3)
            const answer4 = JSON.stringify(data.$q1.answers.answer4)
            question(question1,answer1,answer2,answer3,answer4)
        })
        
    })
}
