/*
 * DOTS: Level Two
 *
 */
let score = 0;
let arenaEl = document.querySelector('.js-arena');
let scoreEl = document.querySelector('.js-score');


arenaEl.addEventListener('click', function(play) {
    if (play.target.classList.contains('js-ball')){
        score += 10;
    } // can you explain what target and conatins mean in this //
    if (score <100) {
        scoreEl.innerHTML = score} 
        else {declareWinner();
        }
    })

function declareWinner(){
document.body.classList.add('game-over');
}