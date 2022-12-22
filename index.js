var dice1 = Math.floor(Math.random()*6)+1;
var dice2 = Math.floor(Math.random()*6)+1;
var diceImg = ["images/dice1.png", "images/dice2.png", "images/dice3.png", "images/dice4.png", "images/dice5.png", "images/dice6.png"]

document.querySelector(".img1").setAttribute("src", diceImg[dice1-1]);
document.querySelector(".img2").setAttribute("src", diceImg[dice2-1]);
console.log(dice1, dice2);

if (dice1 > dice2) {
    document.querySelector("h1").textContent = "Player 1 Wins!";
} else if (dice1 < dice2) {
    document.querySelector("h1").textContent = "Player 2 Wins!";
} else {
    document.querySelector("h1").textContent = "Draw!";
}



