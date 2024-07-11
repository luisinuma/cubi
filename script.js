const questions = [
    { question: "¿Cuánto es 5 + 3?", answer: 8 },
    { question: "¿Cuánto es 10 - 4?", answer: 6 },
    { question: "¿Cuánto es 7 * 2?", answer: 14 },
    { question: "¿Cuánto es 12 / 3?", answer: 4 },
    { question: "¿Cuánto es 15 + 6?", answer: 21 },
    { question: "¿Cuánto es 20 - 8?", answer: 12 },
    { question: "¿Cuánto es 9 * 3?", answer: 27 },
    { question: "¿Cuánto es 16 / 4?", answer: 4 },
    { question: "¿Cuánto es 14 + 9?", answer: 23 },
    { question: "¿Cuánto es 18 - 5?", answer: 13 },
    { question: "¿Cuánto es 6 * 6?", answer: 36 },
    { question: "¿Cuánto es 30 / 5?", answer: 6 },
    { question: "¿Cuánto es 21 + 3?", answer: 24 },
    { question: "¿Cuánto es 25 - 10?", answer: 15 },
    { question: "¿Cuánto es 8 * 4?", answer: 32 },
    { question: "¿Cuánto es 45 / 9?", answer: 5 },
    { question: "¿Cuánto es 13 + 7?", answer: 20 },
    { question: "¿Cuánto es 19 - 6?", answer: 13 },
    { question: "¿Cuánto es 11 * 2?", answer: 22 },
    { question: "¿Cuánto es 24 / 3?", answer: 8 },
    { question: "¿Cuánto es 17 + 5?", answer: 22 },
    { question: "¿Cuánto es 29 - 9?", answer: 20 },
    { question: "¿Cuánto es 12 * 3?", answer: 36 },
    { question: "¿Cuánto es 40 / 8?", answer: 5 },
    { question: "¿Cuánto es 23 + 8?", answer: 31 },
    { question: "¿Cuánto es 32 - 12?", answer: 20 },
    { question: "¿Cuánto es 14 * 2?", answer: 28 },
    { question: "¿Cuánto es 50 / 5?", answer: 10 },
    { question: "¿Cuánto es 15 + 14?", answer: 29 },
    { question: "¿Cuánto es 36 - 6?", answer: 30 }
];

let currentQuestionIndex = 0;
let rotations = { x: 0, y: 0 };

function loadQuestion() {
    document.getElementById('question').innerText = questions[currentQuestionIndex].question;
}

function checkAnswer() {
    const userAnswer = parseInt(document.getElementById('answer').value);
    if (userAnswer === questions[currentQuestionIndex].answer) {
        alert('¡Correcto!');
        currentQuestionIndex = (currentQuestionIndex + 1) % questions.length;
        document.getElementById('answer').value = '';
        rotateCube();
        loadQuestion();
    } else {
        alert('Incorrecto, intenta nuevamente.');
    }
}

function rotateCube() {
    rotations.y += 90;
    document.querySelector('.cube').style.transform = `rotateX(${rotations.x}deg) rotateY(${rotations.y}deg)`;
}

window.onload = function() {
    loadQuestion();
}
