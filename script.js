// CONST






//LETS

let playerTurn = 'player1';
let boxesArray = [];



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

const modal = document.querySelector('#modal');
const modalText = document.querySelector('#modalText');
const playAgain = document.querySelector('#play-again');

//events

playerArea.addEventListener('click', placeChoice);

resetButton.addEventListener('click', resetGame);

scoreBoard.addEventListener('click', incrementScore);

playAgain.addEventListener('click', playGameAgain);

//FUNCTIONS

//actually add on the X and O

function placeChoice(event) {
	if (event.target.className == 'individual-box') {
		addMarker(event.target.id);
	}
}

function addMarker(id) {
    const span = document.createElement('span');
    span.setAttribute('class', 'marker');
    if (display[id].firstChild) {
        
        return;
    } else {
      if (playerTurn == 'player1') {
          span.innerText = 'X';
      } else if (playerTurn == 'player2') {
          span.innerText = 'O';
      }  
    }
    display[id].appendChild(span);
    determineWin(id, playerTurn);
    switchTurn(playerTurn);
}

function switchTurn(currentTurn) {
    if (playerTurn == 'player1') {
        playerTurn = 'player2'
        turnDisplay.innerText = 'player 2';
    } else if (playerTurn == 'player2') {
        playerTurn = 'player1';
        turnDisplay.innerText = 'player 1'
    }
}





function resetGame() {
    allBoxesDisplay.forEach(function(div) {
        if (div.firstChild){ 
        div.removeChild(div.firstChild);
        }
    });
    boxesArray = [];
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

function autoWinScore(player) {
	score[player] += 1;
	player1Score.innerText = score.player1;
	player2Score.innerText = score.player2;
}


function determineWin(box, turn) {
    const arrayPosition = box.slice(-1);
    boxesArray[arrayPosition - 1] = turn;
    if (boxesArray[0] == turn) {
        if (boxesArray[1] == turn) {
            if (boxesArray[2] == turn) {
                //something that player wins
                winStuff(turn);
            }
        }
        if (boxesArray[4] == turn) {
            if (boxesArray[8] == turn) {
                //win
                winStuff(turn);
            }
        }
        if (boxesArray[3] == turn) {
            if (boxesArray[6] == turn) {
                //win
                winStuff(turn);
            }
        }
    }
    if (boxesArray[1] == turn) {
        if (boxesArray[4] == turn) {
            if (boxesArray[7] == turn) {
                //win
                winStuff(turn);
            }
        }
    }
    if (boxesArray[2] == turn) {
        console.log('win')
        if (boxesArray[4] == turn) {
            console.log('win')
            if (boxesArray[6] == turn) {
                //win
                winStuff(turn);
                console.log('win')
            }
        }
        if (boxesArray[5] == turn) {
            if (boxesArray[8] == turn) {
                //win
                winStuff(turn);
            }
        }
    }
    if (boxesArray[3] == turn) {
        if (boxesArray[4] == turn) {
            if (boxesArray[5] == turn) {
                //win
                winStuff(turn);
            }
        }
    }
    if (boxesArray[6] == turn) {
        if (boxesArray[7] == turn) {
            if (boxesArray[8] == turn) {
                //win
                winStuff(turn);
            }
        }
    }
}



function winStuff(player) {
    autoWinScore(player);
    setTimeout(function () {
        displayWinModal(player)
    }, 1000);
}

function displayWinModal(winner) {
    modalText.innerText = `Congratulations ${winner}!`;
    modal.classList.remove('hide');
}

function playGameAgain() {
	resetGame();
	modal.classList.add('hide');
}
