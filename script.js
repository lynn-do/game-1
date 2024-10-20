let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;
const maxAttempts = 10;

function checkGuess() {
    let userGuess = document.getElementById("guess").value;
    let result = document.getElementById("result");
    let attemptsDisplay = document.getElementById("attempts");

    if (userGuess == randomNumber) {
        result.textContent = "Selamat! Anda menebak dengan benar!";
        result.style.color = "green";
        endGame();
    } else if (userGuess > randomNumber) {
        result.textContent = "Terlalu tinggi! Coba lagi.";
        result.style.color = "red";
    } else {
        result.textContent = "Terlalu rendah! Coba lagi.";
        result.style.color = "red";
    }

    attempts++;
    attemptsDisplay.textContent = `Percobaan: ${attempts} dari ${maxAttempts}`;

    if (attempts >= maxAttempts) {
        result.textContent = `Anda kalah! Angka yang benar adalah ${randomNumber}.`;
        result.style.color = "cyan";
        endGame();
    }
}

function endGame() {
    document.getElementById("guess").disabled = true;
    document.getElementById("restart").classList.remove("hidden");
}

function restartGame() {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
    document.getElementById("guess").disabled = false;
    document.getElementById("result").textContent = "";
    document.getElementById("attempts").textContent = "";
    document.getElementById("restart").classList.add("hidden");
}
