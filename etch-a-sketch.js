let currentSideLength = 16;
let currentCursorColor = "grey";
const container = document.querySelector(".container");

function drawSquareGrid() {
    for (let i = 0; i < currentSideLength; i++) {
        const col = document.createElement("div");
        col.classList.toggle("square-col");
        for (let j = 0; j < currentSideLength; j++) {
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

function clearGrid() {
    //This only works for more modern browsers. It might not work if you're using an older version. Maybe I should address this later?
    container.replaceChildren();
}

function clearAndRedraw() {
    clearGrid();
    drawSquareGrid();
}

function changeNumSquares() {
    clearGrid();

    let newSideLength;
    do {
        newSideLength = prompt(`The current sketchpad is a grid of ${currentSideLength} squares x ${currentSideLength} squares. Enter a new number of squares-per-side of the grid, between 1 and 100.`);
    }  while (newSideLength == null || (newSideLength > 100 || newSideLength < 1));

    currentSideLength = newSideLength;

    drawSquareGrid();
}

drawSquareGrid(currentSideLength);

const clearButton = document.querySelector(".clear-button");
clearButton.addEventListener("click", clearAndRedraw);

const changeNumButton = document.querySelector(".change-num-button");
changeNumButton.addEventListener("click", changeNumSquares);