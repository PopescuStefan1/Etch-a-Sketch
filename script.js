const container = document.querySelector('#grid-container');

for (i = 0; i < 16 * 16; i++) {
    const div = document.createElement('div');
    div.classList.add('square');

    div.addEventListener('mouseover', function () { addHighlight(div) });
    // div.addEventListener('mouseout', function () { removeHighlight(div) });

    container.appendChild(div);
}

function addHighlight(square) {
    square.classList.add('highlight');
}

function removeHighlight(square) {
    square.classList.remove('highlight');
}

const button = document.querySelector('#squares-button');
button.addEventListener('click', buttonClick);

function buttonClick() {
    let squares = prompt("Choose the grid size", "16");
}