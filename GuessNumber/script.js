'use strict';

// console.log(document.querySelector('.message').textContent); //left to rigt operation happen.

// document.querySelector('.message').textContent = 'Correct Number!';

// document.querySelector('.number').textContent= 13;



let score = 20;
let highscore = 0; 


const check = {
    secret : Math.trunc(Math.random() * 20),
    displayWidth : function (arg) {
        document.querySelector('.number').style.width = '30rem';
    },
    displayMessage : function(arg) {
        document.querySelector('.message').textContent = arg;
    },
    displayScore : function (arg) {
        document.querySelector('.score').textContent = arg;
    },
    displayNumber : function(arg) {
    document.querySelector('.number').textContent = arg;
    }
}


check.secret;
document.querySelector('.check').addEventListener('click', function()
    {
        const guess = Number(document.querySelector('.guess').value);
        if (guess > 0 && guess <= 20)
        {
            check.displayNumber(guess);
            if (score > 0) {
                if(guess=== check.secret) {
                    check.displayMessage('You Did it!😊');
                    score--;
                    check.displayScore(score);
                    document.querySelector('body').style.backgroundColor = '#06b347';
                    document.querySelector('.number').style.width = '30rem';
                    highscore = score;
                    document.querySelector('.highscore').textContent = (score>highscore) ? highscore=score : score ;  
                }else if (guess !== check.secret) {
                    check.displayMessage((guess > check.secret) ? '📈Its High!😏' : '📉Its Low!🤨');
                    score--;
                    check.displayScore(score);
                }
            }
            else {
                check.displayMessage('💥 You lost the game!😐');
                check.displayScore(score);
            }
        }else{
            check.displayMessage('Against Rule!😯');
            (score < 5)? score = 0 : score-=5;
            check.displayScore(score);
        }
    }
)

document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    check.secret;
    check.displayMessage('Start guessing...');
    check.displayScore(score);
    check.displayNumber('?');
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.highscore').textContent = highscore;
    
});
