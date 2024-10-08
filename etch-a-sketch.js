let squareDimension = 16;
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

drawSquareGrid(squareDimension);