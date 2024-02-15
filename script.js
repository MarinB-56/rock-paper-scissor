let scorePlayer = 0, scoreComputer = 0;

//Managing buttons
const btn__rock = document.querySelector('#rock');
const btn__paper = document.querySelector('#paper');
const btn__scissor = document.querySelector('#scissor');

//Managing div for result
const div__result = document.querySelector('#result');
const div__score = document.querySelector('#score');

btn__rock.addEventListener('click', () => {
    //Comparing player and computer choice
    div__result.textContent = playRound( "rock" , getComputerChoice() );
    div__score.textContent = `Player :  ${scorePlayer} - ${scoreComputer} : Computer`;
});

btn__paper.addEventListener('click', () => {
    //Comparing player and computer choice
    div__result.textContent = playRound( "paper" , getComputerChoice() );
    div__score.textContent = `Player :  ${scorePlayer} - ${scoreComputer} : Computer`;
});

btn__scissor.addEventListener('click', () => {
    //Comparing player and computer choice
    div__result.textContent = playRound( "scissor" , getComputerChoice() );
    div__score.textContent = `Player :  ${scorePlayer} - ${scoreComputer} : Computer`;
});

function getComputerChoice(){
    let choice = Math.floor( Math.random()*3 )+1;
    switch(choice){
        case 1 : 
            return "Rock";
        case 2 : 
            return "Scissor";
        case 3 : 
            return "Paper";
    }
}

function playRound(playerSelection , computerSelection){

    //Case insensitive
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    //Even result 
    if(computerSelection == playerSelection){
        return `Even ! You too played ${playerSelection}`;
        //return "Egalité";
    }
    else if(computerSelection == "rock"){
        switch(playerSelection){
            case "scissor":
                scoreComputer++;
                return `You loose ! ${computerSelection} beats ${playerSelection}`; 
            case "paper":
                scorePlayer++;
                return `You win ! ${playerSelection} beats ${computerSelection}`;
        }
    }
    else if(computerSelection == "scissor"){
        switch(playerSelection){
            case "paper":
                scoreComputer++;
                return `You loose ! ${computerSelection} beats ${playerSelection}`; 
            case "rock":
                scorePlayer++;
                return `You win ! ${playerSelection} beats ${computerSelection}`;
        }
    }
    else if(computerSelection == "paper"){
        switch(playerSelection){
            case "rock":
                scoreComputer++;
                return `You loose ! ${computerSelection} beats ${playerSelection}`; 
            case "scissor":
                scorePlayer++;
                return `You win ! ${playerSelection} beats ${computerSelection}`;
        }
    }
    
}

//alert(game());