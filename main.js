'use strict'
const quizData=[
    {
        question: "Which was the 1st non Test playing country to beat India in an international match ?",
        a:	"Canada",
        b:	"Sri Lanka",
        c:	"Zimbabwe",
        d:	"East Africa",  
        answer: "b"
    },
    {
        question: "Which county did Ravi Shastri play for ?",
        a:	"Glamorgan",
        b:	"Leicestershire",
        c:	"Gloucestershire",
        d:	"Lancashire",
        answer: "a"
    },
    {
        question: "Who is the first Indian woman to win an Asian Games gold in 400m run ?",
        a:	"M.L.Valsamma",
        b:	"P.T.Usha",
        c:	"Kamaljit Sandhu",
        d:	"K.Malleshwari",
        answer: "c"
    },
    {
        question: "The Battle of Plassey was fought in",
        a:	"1757",
        b:	"1782",
        c:	"1748",
        d:	"1764",
        answer: "a"
    },
    {
        question: "Tripitakas are sacred books of",
        a:	"Buddhists",
        b:	"Hindus",
        c:	"Jains",
        d:	"None of the above",
        answer: "a"
    },
    {
        question: "To which king belongs the Lion capital at Sarnath?",
        a:	"Chandragupta",
        b:	"Ashoka",
        c:	"Kanishka",
        d:	"Harsha",
        answer: "b"
    },
    {
        question: "For which of the following disciplines is Nobel Prize awarded?",
        a:	"Physics and Chemistry",
        b:	"Physiology or Medicine",
        c:	"Literature, Peace and Economics",
        d:	"All of the above",
        answer: "d"
    },
    {
        question: "Hitler party which came into power in 1933 is known as",
        a:	"Labour Party",
        b:	"Nazi Party",
        c:	"Ku-Klux-Klan",
        d:	"Democratic Party",
        answer: "b"
    },
    {
        question: "Galileo was an Italian astronomer who",
        a:	"developed the telescope",
        b:	"discovered four satellites of Jupiter",
        c:	"discovered that the movement of pendulum produces a regular time measurement",
        d:	"All of the above",
        answer: "d"
    },
    {
        question: "The centenary of Mahatma Gandhi's arrival in South Africa was celebrated in",
        a:	"May 1993",
        b:	"August 1993",
        c:	"July 1993",
        d:	"September 1993",
        answer: "a"
    }
]
const audio = document.getElementById('audio')
const quiz = document.getElementById('quiz')
const valueInput = document.querySelectorAll('.answer')
const questions = document.getElementById('ques')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')

let index = 0
let userScore = document.getElementById('score1')
let score=0
loadQuiz()

function loadQuiz() {
    deselectAnswers()

    const indexData = quizData[index]

    questions.innerText = indexData.question
    a_text.innerText = indexData.a
    b_text.innerText = indexData.b
    c_text.innerText = indexData.c
    d_text.innerText = indexData.d
    audio.innerHTML=`<audio autoplay>
            <source src="Rest Files/ques_sound.mp3" type="audio/mpeg">
          </audio>`
}

function deselectAnswers() {
    valueInput.forEach(input => input.checked = false)
}

function getSelected() {
    let answer

    valueInput.forEach(input => {
        if(input.checked) {
            answer = input.id
        }
    })
    console.log(answer)
    return answer
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    
    if(answer) {
        if(answer === quizData[index].answer) {
            score++
            userScore.textContent=score*10;
        }

        index++
      
        if(index < quizData.length) {
            loadQuiz()
        } else {
            quiz.innerHTML = `
                <h2 id="head2" >You answered ${score}/${quizData.length} questions correctly.<br>
                Maaf Kijiyega humare paas Duaon ke alawa koi dhanraashi nahi hai.😅</h2>
                <button id="btn" onclick="location.reload()">Reload</button>`
        }
    }
})