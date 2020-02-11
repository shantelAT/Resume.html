// ---------------------- Challenge 3

function Dreset(){
   window.location.reload();
}


function rpsGame(yourChoice){
console.log(yourChoice);
//console.log(yourChoice.id);

var humanChoice, botChoice;
humanChoice= yourChoice.id;
botChoice =  numberToChoice(randomNum());
// console.log(botChoice);
console.log("Computer choice:" , botChoice);
results= pickWinner (humanChoice, botChoice);
console.log(results);
message = finalMessage(results); // {"message": 'you won! ' }
console.log(message  );
rpsFront(yourChoice.id, botChoice, message)
}
//--- Allowing computer to select a random number between 1-3
function randomNum(){
  return Math.floor(Math.random() * 3)
}
// --- connecting each number to an choice
function numberToChoice(number){
return ["rock", "paper", "scissors"][number];
}

// ---- pick a winner based on number selected and rep with a choice
function pickWinner(yourChoice, computerChoice) {
  var RPSdata= {
    "rock" : {"rock" : 0.5 , "paper": 0 , "scissors" : 1 },
    "paper" : {"rock" : 1 , "paper": 0.5 , "scissors" : 0 },
    "scissors" : {"rock" : 0 , "paper": 1 , "scissors" : 0.5 },
  };

  var yourScore = RPSdata [yourChoice][computerChoice ];
  var computerScore = RPSdata[computerChoice][yourChoice];

  return [yourScore, computerScore];
}

//------Creating the final meassage to display winner 

function finalMessage([yourScore, computerScore]){
  if (yourScore === 0 ) {
  return {'message': "You Lost!", 'color' : 'red'};
  } else  if ( yourScore === 0.5 ){
  return {'message': " You Tied!", 'color' : 'yellow'};
} else { 
  return {'message': "You Won!", 'color' : 'white'};
}
}

// ------------getting each immage for the display

function rpsFront(humanImageChoice, botImageChoice, finalMessage){
  var imagesData = { 
    'rock': document.getElementById('rock').src,
    'paper': document.getElementById('paper').src,
    'scissors': document.getElementById('scissors').src
  }

  //---- Removing Elements
document.getElementById('rock').remove();
document.getElementById('paper').remove();
document.getElementById('scissors').remove();

//Creating div to display result

var humanDiv = document.createElement('div');
var botDiv = document.createElement('div');
var messageDiv = document.createElement('div');

humanDiv.innerHTML = "<img src='" + imagesData[humanImageChoice] + "' height=150  style='box-shadow:0px 10px 50px blue; ' >"
messageDiv.innerHTML = "<h1 style='color: " + finalMessage['color'] + " ; font-size: 60px; padding: 30px;'>" + finalMessage ['message'] + "</h1>"
botDiv.innerHTML = "<img src='" + imagesData[botImageChoice] + "' height=150  style='box-shadow:0px 10px 50px red; ' >"


document.getElementById('container3-1').appendChild(humanDiv);
document.getElementById('container3-1').appendChild(messageDiv);
document.getElementById('container3-1').appendChild(botDiv);

}