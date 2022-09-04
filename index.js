
const startQuizButton = document.getElementById('startButton')
const questionBox = document.getElementById('questionsBox')
questionBox.classList.add('question')
const answersBox = document.getElementById('answersBox')
answersBox.classList.add('answers')

let selected = true


function selectAnswer() {
    
}

const radios = document.querySelectorAll('input')
    for(i = 0; i < radios.length; i++) {
        if(radios[i] != selected) {
            radios[i].onclick = () => {
                radios[i] = selected
                document.body.style.backgroundColor = 'blue'
            }
        }
    }
console.log(radios[i] == selected)
function question_one(question,answer1,answer2,answer3,answer4) {
    
    document.body.removeChild(startQuizButton)

    questionBox.append(question)

    

    
    const questioninputs = {
        input1: document.createElement('input'),
        input2: document.createElement('input'),
        input3: document.createElement('input'),
        input4: document.createElement('input')
    }
    questioninputs.input1.type = 'radio'
    questioninputs.input2.type = 'radio'
    questioninputs.input3.type = 'radio'
    questioninputs.input4.type = 'radio'
    const answerBox1 = document.createElement('div')  //later we'll put this in an array and use a forEach method to 
    const answerBox2 = document.createElement('div')  //loop through the elements and append the question divs and children
    const answerBox3 = document.createElement('div')  //in the loop
    const answerBox4 = document.createElement('div')
    answerBox1.classList.add('answerBox')
    answerBox2.classList.add('answerBox')
    answerBox3.classList.add('answerBox')
    answerBox4.classList.add('answerBox')

    answersBox.appendChild(answerBox1)
    answerBox1.appendChild(questioninputs.input1)
    answerBox1.append(answer1)
    answersBox.appendChild(answerBox2)
    answerBox2.appendChild(questioninputs.input2)
    answerBox2.append(answer2)
    answersBox.appendChild(answerBox3)
    answerBox3.appendChild(questioninputs.input3)
    answerBox3.append(answer3)
    answersBox.appendChild(answerBox4)
    answerBox4.appendChild(questioninputs.input4)
    answerBox4.append(answer4)

}


function beginQuiz() {
    
    fetch("RushTrivia.json").then((response) => {
        response.json().then(data => {
            
            const question1 = JSON.stringify(data.$q1.question)
            const answer1 = JSON.stringify(data.$q1.answers.answer1)
            const answer2 = JSON.stringify(data.$q1.answers.answer2)
            const answer3 = JSON.stringify(data.$q1.answers.answer3)
            const answer4 = JSON.stringify(data.$q1.answers.answer4)
            question_one(question1,answer1,answer2,answer3,answer4)
            
        })
        
    })
}

