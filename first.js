const choices = ["stone", "paper", "scissor"];
let stoneimg=document.getElementById("stone");
stoneimg.addEventListener("click", ()=> play("stone"));
let paperimg=document.getElementById("paper");
paperimg.addEventListener("click", ()=> play("paper"));
let scissorimg=document.getElementById("scissor");
scissorimg.addEventListener("click", ()=> play("scissor"));
const resultMessage = document.getElementById("result-message");

const clicksound =document.getElementById("click-sound");
const winsound=document.getElementById("win-sound");
const loosesound =document.getElementById("lose-sound");
//computer choice
function getComputerChoice() {
  return choices[Math.floor(Math.random() * 3)]; //main code
}
// score
let computerScoreValue = 0;
let playerScoreValue = 0;
const computerScoreDisplay = document.getElementById("computer-score");
const playerScoreDisplay = document.getElementById("player-score");

function play(playerchoice){
clicksound.play();
const computerchoice = getComputerChoice();
const result = gamescore (playerchoice,computerchoice);
    updateUI(result);
    checkGameEnd();

}
//player choice
function gamescore(player,computer){
if(player===computer){
    return "Draw";
}
if((player==="stone"&& computer==="scissor")||
  ( player==="scissor" && computer==="paper") ||
  ( player==="paper"&& computer==="stone")
){
     playerScoreValue++;
     winsound.play();
    return "You Win 🎉";
   
}else{
    computerScoreValue++;
    loosesound.play();
    return "you lose";
}
 }
 //update score
 function updateUI(result){
 playerScoreDisplay.textContent=playerScoreValue;
computerScoreDisplay.textContent=computerScoreValue;
resultMessage.textContent=result;

if (result.includes("Win"))resultMessage.style.color="green";
else if (result .includes("Lose"))resultMessage.style.color="red";
 else resultMessage.style.color="grey";
    
 };
 function checkGameEnd() {
    if (playerScoreValue === 5) {
      showFinalResult("🏆 Congratulations! You Won the Match!");
    } else if (computerScoreValue === 5) {
      showFinalResult("😞 You Lost the Match. Try Again!");
    }
  }

 function showFinalResult(message) {
  let  popup = document.getElementById("popup");
 let finalmessage =   document.getElementById("final-message");
 finalmessage.textContent=message;
 finalmessage.style.display="block";
 }
 

 function resetgame(){
    playerScoreValue=0;
    computerScoreValue=0;
    computerScoreDisplay.textContent="0";
    playerScoreDisplay.textContent="0";
    resultMessage.textContent="";
    document.getElementById("popup").style.display="none";//code

 }
 document.getElementById("reset-button").addEventListener("click", resetgame);