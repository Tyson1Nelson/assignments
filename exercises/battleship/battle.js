var readline = require('readline-sync');
var Location = require("./location");
var sunkCount = 0;

var board = makeBoard();

function makeBoard() {
    var board = [];
    for (var i = 0; i < 10; i++) {
        var row = [];
        for (var j = 0; j < 10; j++) {
            row.push(new Location());
        }
        board.push(row);
    }
    return board;
}

function dislplayBoard(board) {
    var display = "";
    for (var i = 0; i < board.length; i++) {
        for (var j = 0; j < board[i].length; j++) {
            display += board[i][j].display + " ";
        }
        display += "\n"
    }
    console.log(display);
}


function getCoords() {
    do {
        var x = parseInt(readline.keyIn("choose a coordinate 0-9: "));
        var y = parseInt(readline.keyIn("choose a coordinate 0-9: "));
    } while (x < 0 || x > 9 || y < 0 || y > 9) 

        updateBoard(x, y);
}

function updateBoard(x, y) {
    board[x][y].guessed = true;
    if (board[x][y].isShip) {
        board[x][y].display = "x";
        sunkCount++;
        console.log("hit");

    } else {
        board[x][y].display = "m";
        console.log("Miss");
    }
    dislplayBoard(board);
}


function playBattleship() {
    console.log("\n**************************************\n******* WELCOME TO BATTLEFIELD *******\n**************************************\n");
    
    console.log("----------------------\nFRESH WATER EVERYWHERE\n----------------------\n")
    dislplayBoard(board);

    while (sunkCount < 3) {
        getCoords();
    }
    console.log("you've won");
    }

    playBattleship();