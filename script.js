// CONST






//LETS

let playerTurn = 'Player1';




//CLASS/OBJECTS






//DOMS

const scoreBoard = document.querySelector('.score-board');

const player1Score = document.querySelector('#player1');
const player2Score = document.querySelector('#player2');

const turnDisplay = document.querySelector('.turnText');


const playerArea = document.querySelector('.tic-tac-toe-box');

const allBoxesDisplay = document.querySelectorAll('.individual-box')

const display = {
    box1: document.querySelector('#box1'),
    box2: document.querySelector('#box2'),
    box3: document.querySelector('#box3'),
    box4: document.querySelector('#box4'),
    box5: document.querySelector('#box5'),
    box6: document.querySelector('#box6'),
    box7: document.querySelector('#box7'),
    box8: document.querySelector('#box8'),
    box9: document.querySelector('#box9'),
}

const score = {
    player1: 0,
    player2: 0,
}

const resetButton = document.querySelector('.reset-button');




//events

playerArea.addEventListener('click', placeChoice);

resetButton.addEventListener('click', resetGame);

scoreBoard.addEventListener('click', incrementScore);


//FUNCTIONS

//actually add on the X and O
function addMarker(id) {
    const span = document.createElement('span');
    span.setAttribute('class', 'marker');
    if (display[id].firstChild) {
        return;
    } else {
      if (playerTurn == 'Player1') {
          span.innerText = 'X';
      } else if (playerTurn == 'Player2') {
          span.innerText = 'O';
      }
      
    }
    display[id].appendChild(span);
    switchTurn(playerTurn);
}

function switchTurn(currentTurn) {
    if (playerTurn == 'Player1') {
        playerTurn = 'Player2'
        turnDisplay.innerText = 'Player 2';
    } else if (playerTurn == 'Player2') {
        playerTurn = 'Player1';
        turnDisplay.innerText = 'Player 1'
    }
}


function placeChoice(event) {
    if (event.target.className == 'individual-box') {
        addMarker(event.target.id);
    }
}


function resetGame() {
    allBoxesDisplay.forEach(function(div) {
        if (div.firstChild){ 
        div.removeChild(div.firstChild);
        }
    });
}


function scoreNumber(player, value) {
    if ((score[player] + value) < 0) {
        score[player] = 0;
    } else {
        score[player] += value;
    }
    player1Score.innerText = score.player1;
    player2Score.innerText = score.player2;
}


function incrementScore(event) {
    if (event.target.tagName == 'BUTTON') {
        if (event.target.id == 'player1-add') {
			scoreNumber('player1', 1);
		} else if (event.target.id == 'player1-minus') {
			scoreNumber('player1', -1);
		} else if (event.target.id == 'player2-add') {
			scoreNumber('player2', 1);
		} else if (event.target.id == 'player2-minus') {
			scoreNumber('player2', -1);
		}
    }
}