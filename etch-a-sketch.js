let squareDimension = 16;

function drawSquareGrid(sideLength) {
    const container = document.querySelector(".container");
    for (let i = 0; i < sideLength; i++) {
        const row = document.createElement("div");
        row.classList.toggle("square-row");
        for (let j = 0; j < sideLength; j++) {
            const square = document.createElement("div");
            square.classList.toggle("square");
            square.innerHTML = "hi";
            row.appendChild(square);
        }
        container.appendChild(row);
    }
}

drawSquareGrid(squareDimension);