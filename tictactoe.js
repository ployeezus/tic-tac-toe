//initialize variables

var currentPlayer = "X";
var nextPlayer = "O";

var playerXSelections = new Array();
var playerOSelections = new Array();

//array board

const winningCombinations = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7]
]

function checkWinner() {
    // Check if player has all values of each combination
    for (let combos of winningCombinations) {
        console.log("Combos: " + combos);
        var matches = 0;
        for (let items of playerSelections) {
            if (combos.includes(items)) {
                matches++;
                if (matches == 3) {
                    return true;
                    console.log("win");
                }
            }
            // } else { // go to the next combination
            //     break;
            // }
            // if we made it through each combo without returning true,
            // then there were no matches and player did not win
            //return false
        }
    }
}

function checkDraw() {
    return playerOSelections.length + playerXSelections.length >= cells.length
}

function resetGame() {
    playerXSelections = new Array();
    playerOSelections = new Array();
    for (var i = 0; i < cells.length; i++) {
        cells[i].innerHTML = ""
    }
}

//event listener

handleClick = function (event) {
    var cell = event.target
    console.log(cell.id);
    cell.innerHTML = currentPlayer;

    if (currentPlayer === "X") {
        playerSelections = playerXSelections;
        nextPlayer = "O";
    } else {
        playerSelections = playerOSelections;
        nextPlayer = "X";
    }

    playerSelections.push(parseInt(cell.id));

    if (checkWinner(playerSelections)) {
        alert("Player " + currentPlayer + " wins!")
        resetGame();
    }

    if (checkDraw()) {
        alert("Draw!");
        resetGame();
    }

    // Swap players
    currentPlayer = nextPlayer;
}

var cells = document.querySelectorAll("td");

for (var i = 0; i < cells.length; i++) {
    cells[i].addEventListener('click', handleClick);
}