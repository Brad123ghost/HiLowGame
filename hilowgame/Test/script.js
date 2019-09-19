//Bradley Chung
//Hi Low Game V1
//Contact Me - badleyschool955@gmail.com

//Start Menu For Game
<!--
function startGame(){
	//Declaring Variables
	var menu = 0;
	var continueGame = 1;
	var balance = 0;
	var roundBet = 0;
	var deposit = "How much would you like to deposit?"
	var betAmount = "How much would you like to bet?\nBalance: $" + Number(balance)
	
	//Quit and Error Message
	var quitMessage = "You have walked away with $" + Number(balance) + ". Thanks for Playing"
	var errorMessage = "Sorry, an error occured while running the program"
	
	//Menu to play or quit game
	menu = prompt("Welcome to Hi Low Game. What would you like to do?\n 1. Play Game\n 2. Quit Game")
	
	//Will always run until the user enters 2 for continueGame
	while (continueGame == "1"){
		//Runs full program is the Game if menu is 1
		if (menu == 1){
			balance = prompt(deposit)
			roundBet = prompt(betAmount)
			
			//Checks 
			while (roundBet < balance){
				balance =- roundBet
			}
		}
		
		//Quits Porgram if menu is 2
		else if (menu == 2){
			alert("You have quit the game")
			break;
		}
		//If menu doesn't equal to any valid input alert error
		else{
			alert(errorMessage)
		}
		continueGame = prompt("Do You want to play again?\n 1. Play Again\n 2. Walk away ")
		if (continueGame == "2"){
			alert(quitMessage)
		}
		else{
			alert(errorMessage)
		}
	}
	}
//-->