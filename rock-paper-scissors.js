
    const score=JSON.parse(localStorage.getItem('score'))||{
    wins:0,
    losses:0,
    ties:0
    };

    updateScoreElement();
    /*
    if(!score){
    score={
    wins:0,
    losses:0,
    tie:0
    }
    }
    */
    let isAutoPlaying=false;
    let intervalId;
    let result='';
    function autoPlay(){
        if(!isAutoPlaying){
            intervalId=setInterval(()=>{
                const moveBycomputer=picknumber();
                playermove(moveBycomputer);
            },1000);
            isAutoPlaying=true;
        }else{
            clearInterval(intervalId);
            isAutoPlaying=false;
        }
    }
    document.querySelector(".auto-play-button").addEventListener('click',()=>{
        autoPlay();
    })
    document.querySelector(".js-rock-button").addEventListener('click',()=>{
        playermove('rock');
    })

    document.querySelector(".js-paper-button").addEventListener('click',()=>    {
        playermove('paper');
    })

    document.querySelector(".js-scissors-button").addEventListener('click',()=>{
        playermove('scissors');
    })

    document.body.addEventListener('keydown',(event)=>{
        if(event.key==='r'){
            playermove('rock');
        }else if(event.key==='p'){
            playermove('paper');
        }else if(event.key==='s'){
            playermove('scissors');
        }
    })
    function playermove(move){
    picknumber();
    if(move==='scissors'){
            if (computerMove === 'rock') {
                result = 'You lose.';
            } else if (computerMove === 'paper') {
                result = 'You win.';
            } else if (computerMove === 'scissors') {
                result = 'Tie.';
            }
        }
    else if(move==='rock'){
        if (computerMove === 'rock') {
        result = 'Tie.';
        } else if (computerMove === 'paper') {
        result = 'You lose.';
        } else if (computerMove === 'scissors') {
        result = 'You win.';
        }
    }
    else if(move==='paper'){
        if (computerMove === 'rock') {
        result = 'You win.';
        } else if (computerMove === 'paper') {
        result = 'Tie.';
        } else if (computerMove === 'scissors') {
        result = 'You lose.';
        }
    }
    if(result==='You win.'){
        score.wins+=1;
    }else if(result==='Tie.'){
        score.ties+=1;
    }else{
        score.losses+=1;
    }
    localStorage.setItem('score',JSON.stringify(score));

    updateScoreElement();
    document.querySelector('.js-button').innerHTML=result;
    document.querySelector('.js-prob').innerHTML=`You <img src='image/${move}-emoji.png' class='move-icon'> <img src='image/${computerMove}-emoji.png' class='move-icon'> computer`;
    }

    function updateScoreElement(){
        document.querySelector('.js-score')
    .innerHTML=`Wins:${score.wins}, Losses:${score.losses}, Ties:${score.ties}`;
    }
    let computerMove = '';
    function picknumber(){
        const randomNumber = Math.random();

    if (randomNumber >= 0 && randomNumber < 1 / 3) {
        computerMove = 'rock';
    } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
        computerMove = 'paper';
    } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
        computerMove = 'scissors';
    }
        return computerMove;
    }
