// Questions and answers (with images and progressive prize money)
const questions = [
    { question: "What is the capital of India?", options: ["Delhi", "Mumbai", "Kolkata", "Chennai"], answer: "Delhi", prize: "₹10,000", image: "https://via.placeholder.com/200x200?text=Delhi" },
    { question: "Who is the Prime Minister of India?", options: ["Narendra Modi", "Rahul Gandhi", "Arvind Kejriwal", "Mamata Banerjee"], answer: "Narendra Modi", prize: "₹20,000", image: "https://via.placeholder.com/200x200?text=PM+Modi" },
    { question: "Which is the largest continent?", options: ["Asia", "Africa", "Europe", "Antarctica"], answer: "Asia", prize: "₹50,000", image: "https://via.placeholder.com/200x200?text=Asia" },
    { question: "Which is the largest planet in our solar system?", options: ["Earth", "Mars", "Jupiter", "Saturn"], answer: "Jupiter", prize: "₹1,00,000", image: "https://via.placeholder.com/200x200?text=Jupiter" },
    { question: "What is the symbol of gold?", options: ["Ag", "Au", "Fe", "Pb"], answer: "Au", prize: "₹2,00,000", image: "https://via.placeholder.com/200x200?text=Gold" },
    { question: "Who invented the telephone?", options: ["Thomas Edison", "Alexander Graham Bell", "Nikola Tesla", "Isaac Newton"], answer: "Alexander Graham Bell", prize: "₹5,00,000", image: "https://via.placeholder.com/200x200?text=Bell" },
    { question: "What is the national animal of India?", options: ["Lion", "Tiger", "Elephant", "Peacock"], answer: "Tiger", prize: "₹7,00,000", image: "https://via.placeholder.com/200x200?text=Tiger" },
    { question: "What is the currency of Japan?", options: ["Yuan", "Won", "Yen", "Ringgit"], answer: "Yen", prize: "₹10,00,000", image: "https://via.placeholder.com/200x200?text=Yen" },
    { question: "What is the value of Pi?", options: ["3.14", "3.1415", "3.14159", "3.141592"], answer: "3.14159", prize: "₹7,00,00,000", image: "https://via.placeholder.com/200x200?text=Pi" },
    { question: "Who was the first President of the USA?", options: ["George Washington", "Abraham Lincoln", "Thomas Jefferson", "John Adams"], answer: "George Washington", prize: "₹10,00,00,000", image: "https://via.placeholder.com/200x200?text=George+Washington" }
];

let currentQuestion = 0;
let userAnswer = "";
let prizeAmount = 0;

function startGame() {
    document.getElementById('introScreen').style.display = 'none';
    showQuestion();
}

// Wait until the DOM is fully loaded before adding event listeners
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("startBtn").addEventListener("click", startGame);
});


function showQuestion() {
    const question = questions[currentQuestion];
    document.getElementById('question').innerText = question.question;
    document.getElementById('option1').innerText = question.options[0];
    document.getElementById('option2').innerText = question.options[1];
    document.getElementById('option3').innerText = question.options[2];
    document.getElementById('option4').innerText = question.options[3];
    document.getElementById('questionImage').src = question.image;
    document.getElementById('questionBox').style.display = 'block';
    setTimeout(() => {
        document.getElementById('questionBox').style.opacity = '1';
    }, 100);
    document.getElementById('kbcSound').play();
}

function answer(option) {
    const question = questions[currentQuestion];
    userAnswer = document.getElementById(option).innerText;
    
    // Check the answer
    if (userAnswer === question.answer) {
        prizeAmount = question.prize;
        document.getElementById('message').innerText = "Correct! You won:";
        document.getElementById('prize').innerText = prizeAmount;
        document.getElementById('nextBtn').style.display = 'block';
    } else {
        restartGame()
    }
    
    document.getElementById('questionBox').style.display = 'none';
    document.getElementById('result').style.display = 'block';


}

function nextQuestion() {
    if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        showQuestion();
        document.getElementById('result').style.display = 'none';
        document.getElementById('nextBtn').style.display = 'none';
    } else {
        document.getElementById('result').style.display = 'none';
        document.getElementById('restartBtn').style.display = 'block';
    }
}

function restartGame() {
    currentQuestion = 0;
    prizeAmount = 0;
    document.getElementById('restartBtn').style.display = 'none';
    document.getElementById('introScreen').style.display = 'block';
}
