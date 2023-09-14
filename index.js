const quizData = [
    {
        question :"What does HTML Stand For",
        options:[
            "HyperText Markup Language",
            "Huper Tranfer Markup Language",
            "Hyper Machine Language",
            "Hyper And Text Markup Language",
        ],
        correct : 0,
    },
    {
        question :"Which CSS Property is used To control the Spacing between elements?",
        options:[
            "[margin]",
            "[padding]",
            "[spacing]",
            "[border-spacing]",
        ],
        correct : 1,
    },
    {
        question :"What is the JAvaSCript function used to select an HTML element by its id?",
        options:[
            "Document.query",
            "getElementById",
            "selectElement",
            "findElementById",
        ],
        correct : 1,
    },
    {
        question :"In React.js which hook is used to perform side effects in a function component?",
        options:[
            "useEffect",
            "useState",
            "useContext",
            "useReducer",
        ],
        correct : 0,
    },
    {
        question :"Which HTML tag is used to create an ordered list",
        options:[
            "<ul>",
            "<li>",
            "<ol>",
            "<dl>",
        ],
        correct : 2,
    },
];


const quiz = document.querySelector("#quiz")
const scores = document.querySelector(".score")
const answerFLm = document.querySelectorAll(".answer");

const [questionElm , option_1 , option_2 , option_3 , option_4] = document.querySelectorAll("#question , .option_1 , .option_2 , .option_3, .option_4");

const submitBtn = document.querySelector("#submit");

let currentQuiz = 0;
let score = 0;

const loadQuiz = () =>{
    const {question , options } = quizData[currentQuiz];
    console.log(question);

    questionElm.innerText = question;
    options.forEach((currOption , index) => (
        window[`option_${index + 1}`].innerText = currOption
    ));
}
loadQuiz();

const getSelectedOption = () =>{
    let answerElement = Array.from(answerFLm);
    return answerElement.findIndex((curElm) => curElm.checked);
}

const deselectAnswer =  () =>{
    return answerFLm.forEach((curElnm) => (curElnm.checked = false))
}



submitBtn.addEventListener("click" , () =>{
    const selectedOptions = getSelectedOption();
    console.log(selectedOptions)

    if(selectedOptions === quizData[currentQuiz].correct){
        score +=1;
    }

    currentQuiz++;

    if(currentQuiz < quizData.length){
        deselectAnswer();
        loadQuiz();
    }else{
        quiz.innerHTML = `
        <div class="result">
            <h2>Your Score : ${score} / ${quizData.length} Correct Answer</h2>
            <p>Congratulations on Completing the Quiz</p>
            <button class="reload-button onClick="location.reload()">Play Again</button>
        </div> 
        `;
    }
})