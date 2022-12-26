'use strict';

// Selecting elements and set global to access from any block
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');

const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');

const curr0El = document.getElementById('current--0');
const curr1El = document.getElementById('current--1');

const diceEl = document.querySelector('.dice');

const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

let scores, currScore, activePlayer, playing;

const reSet = function() {
    scores = [0, 0];
    currScore = 0;
    activePlayer = 0;
    playing = true;

    score0El.textContent = 0;
    score1El.textContent = 0;

    curr0El.textContent = 0;
    curr1El.textContent = 0;
    
    diceEl.classList.remove('hidden');
    player0El.classList.remove('player--winner');
    player1El.classList.remove('player--winner');
    player0El.classList.add('player--active');
    player1El.classList.remove('player--active');
}

reSet();


const switchPlayer = function () {
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
}

btnRoll.addEventListener('click', function(){
    if (playing) {
        const dice = Math.trunc(Math.random() * 6) + 1;
        console.log(dice);
        diceEl.classList.remove('hidden');
        diceEl.src = `dice-${dice}.png`;
        if(dice !== 1) {
            currScore += dice;
            document.getElementById(`current--${activePlayer}`).textContent = currScore;
        }else{
            switchPlayer();
        }
    }
})

btnHold.addEventListener('click', function() {
    if (playing) {
        scores[activePlayer] += currScore;
        document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];
        if (scores[activePlayer] >= 10) {
            playing = false;
            diceEl.classList.add('hidden');
            document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
            document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
        }else {
            switchPlayer();
        }   
    }
})

btnNew.addEventListener('click', reSet)