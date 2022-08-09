createGrid(16);

function createGrid(size) {
    const container = document.querySelector('#grid-container');

    while (container.firstChild) {
        container.firstChild.remove();
    }

    const procentage = 100 / size;
    container.setAttribute('style', `grid-template-columns: repeat(${size}, ${procentage}%);`);

    for (i = 0; i < size * size; i++) {
        const div = document.createElement('div');
        div.classList.add('square');

        div.addEventListener('mouseover', function () { addHighlight(div) });
        // div.addEventListener('mouseout', function () { removeHighlight(div) });

        container.appendChild(div);
    }

    const button = document.querySelector('#squares-button');
    button.textContent = `${size}x${size}`;
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
    let size = 0;
    while (size < 1 || size > 99) {
        size = prompt("Choose the grid size (1-99)", "16");
    }

    createGrid(size);
}