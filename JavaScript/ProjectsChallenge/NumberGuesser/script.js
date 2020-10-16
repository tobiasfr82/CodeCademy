let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

const generateTarget 		= () 										=> Math.floor( Math.random() * 10 );
const getAbsoluteDistance 	= ( guess, target ) 						=> distance = guess = Math.abs( target - guess );
const compareGuesses 		= ( humanGuess, computerGuess, target ) 	=> {

	if ( humanGuess < 0 || humanGuess > 9 ) {
		alert( 'Error: Wrong user input. Valid input are: one of the following numbers. 0, 1, 2, 3, 4, 5, 6, 7, 8, or 9.' );		
	}

	humanDifference 	= getAbsoluteDistance( humanGuess, 		target );
	computerdifference 	= getAbsoluteDistance( computerGuess, 	target );

	if 		( computerdifference 	> humanDifference 	 ) 	{ return true; 	}
	else if ( computerdifference	< humanDifference 	 ) 	{ return false; }
	else 	{ return true; }			
}

const updateScore 	= winner 	=> winner === 'human' ? humanScore 	= humanScore + 1 : computerScore = computerScore + 1;
const advanceRound 	= () 		=> currentRoundNumber 				= currentRoundNumber + 1;
