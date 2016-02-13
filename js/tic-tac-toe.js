// MAIN JavaScript File
// SECTION 1: GAME REGISTRY -- holds data relevant to the game while in progress
// SECTION 2: GAME FUNCTIONS -- the core functions that run while the game is in progress
// SECTION 3: GAME SETUP -- code that runs right away to prepare the game for play


// **SECTION 1: GAME REGISTRY**
//arrays to hold id numbers of cells that players have claimed
//ARRAY INITIALIZERS 
var xCells = [];
var oCells = [];

//string to hold which player is active, either X or O
var activePlayer = "X";

//define index variable and two-dimensional array
// var i;
var winCells = [
	[1,2,3],
	[1,4,7],
	[1,5,9],
	[2,5,8],
	[3,6,9],
	[3,5,7],
	[4,5,6],
	[7,8,9]
];

// **SECTION 2: GAME FUNCTIONS**
//initialization to start and reset game, X starts first
var init = function() {
	$('.cell').empty();
	xCells = [];
	oCells = [];
	activePlayer = 'X';
}

//run victory check, toggle active player, TASK ONE
var endTurn = function() {
	victoryCheck();
	//basic strategy for a toggle
	//IF ACTIVEPLAYER IS X, THEN MAKE O AND VICE VERSA
	if (activePlayer =='X') {
		activePlayer = 'O';
	} else {
		activePlayer = 'X';
	}
}

//function to register the cell that is being claimed in xCells or oCells, TASK TWO
//and mark the board accordingly
var claimCell = function(id) {
	//example: $('#'+id).html(activePlayer)
	//PUSH ID (BASED ON CLICK EVENT) TO REGISTRY
	//SHOW CLICK EVENT ON SCREEN (HTML)
	//use jQuery to change inner html to the string in activePlayer
	if(activePlayer == "X") {
		xCells.push(id);
		$('#'+id).html(activePlayer);
	} else {
		oCells.push(id);
		$('#'+id).html(activePlayer);
	}
}

//victory check, TASK THREE, PASS THREE CONDITIONS INTO FUNCTION (ONE, TWO, THREE) BELOW
var victoryCheck = function(combo) {
		//loop over arrays in winCells arrays and compare to three values of xCheck

		for (i = 0; i < winCells.length; ++i) {
			if (xCheck(winCells[i])) {
				alert("Yay, X won!");
			};
			if (oCheck(winCells[i])) {
				alert("Yay, O won!");
			};
			
		}
	};

//check the three numbers passed to see if they are in the xCells array
var xCheck = function(combo) {
	return($.inArray(combo[0]+'', xCells) != -1 && $.inArray(combo[1]+'', xCells) != -1 && $.inArray(combo[2]+'', xCells) != -1);
}

//check the three numbers passed to see if they are in the yCells array
var oCheck = function(combo) {
	//+'' cast int as str
	return($.inArray(combo[0]+'', oCells) != -1 && $.inArray(combo[1]+'', oCells) != -1 && $.inArray(combo[2]+'', oCells) != -1);
}


// **SECTION 3: GAME SETUP**
// setup the registry, empties html content
init();

// attach the click handlers when page loads
$(document).ready(function() {
	//the event is a click even that becomes an object that passes info, in this case the id
    $('.cell').click(function(event) {
      claimCell(event.currentTarget.id);
      endTurn();
    });

    $('#reset').click(function(){
    	init();
    });
});