
function roll(){
var randomNumber = Math.floor(Math.random() * 6) + 1;

var randomDiceImage = "dice" + randomNumber;

var randomImageSource = "./" + randomDiceImage;

document.querySelectorAll("img")[0].setAttribute("src", randomImageSource);



var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomDiceImage2 = "dice" + randomNumber2;

var randomImageSource2 = "./" + randomDiceImage2;

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

  if(randomNumber > randomNumber2){
  document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
  }
  else if(randomNumber < randomNumber2){
  document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
  }
  else{
    document.querySelector("h1").innerHTML = "Draw!";
  }
  
}


