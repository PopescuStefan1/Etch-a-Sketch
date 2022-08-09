let color = 'lightcoral';
let rainbow = 0;
let size = 16;

const button = document.querySelector('#squares-button');
button.addEventListener('click', buttonClick);

const classicButton = document.querySelector('.classic-button');
classicButton.addEventListener('click', classicButtonClick);

const rainbowButton = document.querySelector('.rainbow-button');
rainbowButton.addEventListener('click', rainbowButtonClick);

const clearButton = document.querySelector('.clear-button');
clearButton.addEventListener('click', clearGrid);

createGrid(size, 0);

function createGrid(size, rainbow) {
    const container = document.querySelector('#grid-container');

    while (container.firstChild) {
        container.firstChild.remove();
    }

    const procentage = 100 / size;
    container.setAttribute('style', `grid-template-columns: repeat(${size}, ${procentage}%);`);

    for (i = 0; i < size * size; i++) {
        const div = document.createElement('div');
        div.classList.add('square');

        if (rainbow) {
            div.addEventListener('mouseover', function () { addHighlight(div, randomColor()) });
        } else {
            div.addEventListener('mouseover', function () { addHighlight(div, color) });
        }

        container.appendChild(div);
    }

    const button = document.querySelector('#squares-button');
    button.textContent = `${size}x${size}`;
}

function addHighlight(square, color) {
    square.style.backgroundColor = color;
}

function buttonClick() {
    do {
        size = prompt("Choose the grid size (1-99)", "16");
    } while (size < 1 || size > 99 || isNaN(size));

    createGrid(size, rainbow);
}

function randomColor() {
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var color = "rgb(" + x + "," + y + "," + z + ")";

    return color;
}

function classicButtonClick() {
    rainbow = 0;
    createGrid(size, rainbow);
}

function rainbowButtonClick() {
    rainbow = 1;
    createGrid(size, rainbow);
}

function clearGrid() {
    createGrid(size, rainbow);
}