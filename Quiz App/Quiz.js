
const startButton = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn');
const questionContainer = document.getElementById('question-container');
const questionElement=document.getElementById('question');
const answerButtonElement=document.getElementById('answer-buttons');
let shuffleQuestions,currentQuestionbyindex

startButton.addEventListener('click', StartGame);
nextButton.addEventListener('click', () => {
    currentQuestionbyindex++;
    setNextQuestion();
})
function StartGame(){
    console.log("Start");
    startButton.classList.add('hide');
    shuffleQuestions = questions.sort(() => Math.random() - .5 );
    currentQuestionbyindex=0;
    questionContainer.classList.remove('hide');
    setNextQuestion();
}

function setNextQuestion(){
    resetState();
    showQuestion(shuffleQuestions[currentQuestionbyindex]);
}
function showQuestion(questions){
    questionElement.innerText = questions.question1;
    questions.answers.forEach(answers => {
        const button=document.createElement('button');
        button.innerText=answers.text;
        button.classList.add('btn');       
        if (answers.correct){
            button.dataset.correct = answers.correct;
            
        }
        button.addEventListener('click', selectAnswer);
        answerButtonElement.appendChild(button);

    })
}
function resetState(){
    clearStatusClass(document.body);
    nextButton.classList.add('hide');
    while (answerButtonElement.firstChild){
        answerButtonElement.removeChild(answerButtonElement.firstChild);
    }
}

function selectAnswer(e){
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct;
    setStatusClass(document.body, correct);
    Array.from(answerButtonElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct);
    })
    if (shuffleQuestions.length > currentQuestionbyindex+1){
        nextButton.classList.remove('hide');
        
    }
    else{
        startButton.innerText = 'Restart';
        startButton.classList.remove('hide');
    }
    // nextButton.classList.remove('hide');


}
function setStatusClass(element, correct){
    clearStatusClass(element);
    if (correct){
        element.classList.add('correct');
    }
    else{
        element.classList.add('wrong');
    }
}
function clearStatusClass(element){
    element.classList.remove('correct');
    element.classList.remove('wrong');
}
const questions = [

    {
        question1:"What is Capital of Pakistan",
        answers:[
            {text: "Islambad",correct: true},
            {text: "Melbourne",correct:false},
            {text: "Washington DC",correct:false},
            {text: "Ankara",correct:false}
        ]
    },
    {
        question1:"Who Wrote this code",
        answers:[
            {text:"Zia Khan",correct:false},
            {text:"Haseeb",correct:false},
            {text:"Faran Taimoor Butt",correct:true},
            {text: "Sohaib",correct:false}
        ]
    },
    {
        question1:"Who wrote the National Anthem of Pakistan",
        answers:[
            {text:"Faiz Ahmed Faiz",correct: false},
            {text:"Hafeez Jalandhri",correct: true},
            {text:"Habib Jalib",correct:false},
            {text:"Rukhsana Khatoon",correct:false}
        ]
    }

]