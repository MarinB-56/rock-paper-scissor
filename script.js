let scorePlayer = 0, scoreComputer = 0;

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

    //console.log(playerSelection + " " + computerSelection);

    //Even result 
    if(computerSelection == playerSelection){
        //return `Even ! You too played ${playerSelection}`;
        return "Egalité";
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

//game function
function game(){
    
    let result;
    
    while(true){
        //Launch the game
        do{
            
            alert(result = playRound( prompt("Jouez : Rock, Paper or Scissor") , getComputerChoice()) + `\nVotre score : ${scorePlayer} / Ordinateur : ${scoreComputer}`); 
        
        }while(result == "Egalité"); //While even score

        //Vérifier si l'un des joueurs a gagné
        if(scorePlayer >= 5){
            return `Bravo, vous avez gagné ! ${scorePlayer} à ${scoreComputer}`;
        }
        else if(scoreComputer >= 5){
            return `Vous avez perdu ! ${scorePlayer} à ${scoreComputer}`;
        }
    }
}

alert(game());