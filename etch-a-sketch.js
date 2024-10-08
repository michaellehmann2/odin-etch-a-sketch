const INIT_SIDE_LENGTH = 16;
let currentCursorColor = "grey";

function drawSquareGrid(sideLength) {
    const container = document.querySelector(".container");
    for (let i = 0; i < sideLength; i++) {
        const col = document.createElement("div");
        col.classList.toggle("square-col");
        for (let j = 0; j < sideLength; j++) {
            const square = document.createElement("div");
            square.classList.toggle("square");
            square.addEventListener("mouseover", () => {
                square.setAttribute("style", `background: ${currentCursorColor}`);
            })
            col.appendChild(square);
        }
        container.appendChild(col);
    }
}

function changeNumSquares() {
    const container = document.querySelector(".container");
    //This only works for more modern browsers. It might not work if you're using an older version. Maybe I should address this later?
    container.replaceChildren();

    let newSquareCount;
    do {
        newSquareCount = prompt("Please enter a new number of squares-per-side of the grid. Make sure to enter a number between 1 and 100.", 16);
    }  while (newSquareCount == null || (newSquareCount > 100 || newSquareCount < 1));

    drawSquareGrid(newSquareCount);
}

drawSquareGrid(INIT_SIDE_LENGTH);

const resetChangeNumButton = document.querySelector(".reset-change-num-button");
resetChangeNumButton.addEventListener("click", changeNumSquares);