let currentSideLength = 16;
let currentCursorColor = "grey";
let currentSiteMode = "original";
const container = document.querySelector(".container");

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function drawSquareGrid() {
    for (let i = 0; i < currentSideLength; i++) {
        const col = document.createElement("div");
        col.classList.toggle("square-col");
        for (let j = 0; j < currentSideLength; j++) {
            const square = document.createElement("div");
            square.classList.toggle("square");
            if (currentSiteMode == "original") {
                square.addEventListener("mouseover", () => {
                    square.setAttribute("style", `background: ${currentCursorColor}`);
                })
            }
            else if (currentSiteMode == "random-colors") {
                square.addEventListener("mouseover", () => {
                    let newR = getRandomInt(256);
                    let newG = getRandomInt(256);
                    let newB = getRandomInt(256);
                    square.setAttribute("style", `background: rgb(${newR}, ${newG}, ${newB})`);
                })
            }
            else if (currentSiteMode == "darken") {
                square.setAttribute("style", `background: rgba(0,0,0,0)`);
                square.addEventListener("mouseover", () => {
                    let styleString = square.getAttribute("style");
                    oldAlpha = styleString.slice(23);
                    oldAlpha = oldAlpha.slice(0, -1);
                    if (oldAlpha < 1) {
                        newAlpha = parseFloat(oldAlpha) + 0.1;
                        square.setAttribute("style", `background: rgba(0,0,0,${newAlpha})`);
                    }
                })
            }
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

function changeMode() {
    let newSiteMode = document.querySelector('input[name="site-mode"]:checked').value;

    if (newSiteMode != currentSiteMode) {
        currentSiteMode = newSiteMode;
        clearAndRedraw();
    }
}

drawSquareGrid(currentSideLength);

const clearButton = document.querySelector(".clear-button");
clearButton.addEventListener("click", clearAndRedraw);

const changeNumButton = document.querySelector(".change-num-button");
changeNumButton.addEventListener("click", changeNumSquares);

const originalMode = document.querySelector("#original");
originalMode.addEventListener("click", changeMode);

const randomColorsMode = document.querySelector("#random-colors");
randomColorsMode.addEventListener("click", changeMode);

const darkenMode = document.querySelector("#darken");
darkenMode.addEventListener("click", changeMode);