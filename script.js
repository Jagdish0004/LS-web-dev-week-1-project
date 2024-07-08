function startQuiz() {
    const quizContainer = document.getElementById('quiz-container');
    quizContainer.innerHTML = `
        <h3>Badminton Quiz</h3>
        <p>1. How many points are required to win a game of badminton?</p>
        <input type="radio" id="q1a" name="q1" value="21">
        <label for="q1a">21</label><br>
        <input type="radio" id="q1b" name="q1" value="15">
        <label for="q1b">15</label><br>
        <input type="radio" id="q1c" name="q1" value="30">
        <label for="q1c">30</label><br>
        <button onclick="checkAnswers()">Submit Answers</button>
        <div id="quiz-result"></div>
    `;
}

function checkAnswers() {
    const resultContainer = document.getElementById('quiz-result');
    const q1 = document.querySelector('input[name="q1"]:checked');
    if (q1 && q1.value === '21') {
        resultContainer.textContent = 'Correct!';
    } else {
        resultContainer.textContent = 'Incorrect. The correct answer is 21.';
    }
}