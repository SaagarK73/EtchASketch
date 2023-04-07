

function createGrid(grid) {
    let container = document.querySelector('.container');

    for (let row = 0; row < grid; row++) {
        for (let column = 0; column < grid; column++) {
            let cell = document.createElement('div');
            cell.classList.add("cell");
            cell.clientHeight = 1000 / grid;
            cell.clientWidth = 1000 / grid;
            cell.style.flexBasis = `${1000 / grid}px`;
            container.append(cell);
        }
    }
}

function addColor() {
    let cells = document.querySelectorAll('.cell');
    cells.forEach(cell => cell.addEventListener('mouseover',function() {
        var randomColor = Math.floor(Math.random()*16777215).toString(16);
        cell.style.backgroundColor = `#${randomColor}`;
    }));
}

function getUserInput() {
    const grid = prompt('Enter Grid:');
    if (grid > 100) {
        alert('enter number less than 100');
    } else {
        var container = document.querySelector('.container');
        while (container.firstChild) container.removeChild(container.firstChild);
        createGrid(grid);
        addColor();
    }
}

createGrid(16);
addColor();


const reset = document.querySelector('.reset');
reset.addEventListener('click', getUserInput);
