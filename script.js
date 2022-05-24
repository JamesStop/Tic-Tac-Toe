// CONST






//LETS

let playerTurn = 'Player1';




//CLASS/OBJECTS






//DOMS

const player1Score = document.querySelector('#player1');
const player2Score = document.querySelector('#player2');

const turnDisplay = document.querySelector('.turn');


const playerArea = document.querySelector('.tic-tac-toe-box');


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






//events

playerArea.addEventListener('click', placeChoice)


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
    console.log('hi')
}

function switchTurn(currentTurn) {
    if (playerTurn == 'Player1') {
        playerTurn = 'Player2'
    } else if (playerTurn == 'Player2') {
        playerTurn = 'Player1';
    }
}


function placeChoice(event) {
    if (event.target.className == 'individual-box') {
        addMarker(event.target.id);
        switchTurn(playerTurn);
    }
}