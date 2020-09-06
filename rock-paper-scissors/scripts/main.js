const selectionButtons = document.querySelectorAll('[data-selection]');
const finalColumn = document.querySelector('[data-final-column]');
const computerScoreSpan = document.querySelector('[data-computer-score]');
const yourScoreSpan = document.querySelector('[data-your-score]');
const restartBtn = document.getElementById('restart');
const closeModalButtons = document.querySelectorAll('[data-close-button]');
const overlay = document.getElementById('overlay');
var loseModal = document.getElementById('lostModal');
var winModal = document.getElementById('wonModal');
const selections = [
    {
        "name": 'rock',
        "icon": '👊',
        "beats": 'scissors'
    },
    {
        "name": 'paper',
        "icon": '📄',
        "beats": 'rock'
    },
    {
        "name": 'scissors',
        "icon": '✂️',
        "beats": 'paper'
    }
]
selectionButtons.forEach(selectionButton => {
    selectionButton.addEventListener('click', e => {
        const selectionName = selectionButton.dataset.selection;
        const selection = selections.find(selection => selection.name === selectionName);
        makeSelection(selection);
    });
});
function makeSelection(selection) {
    const computerSelection = randomSelection()
    const yourWinner = isWinner(selection, computerSelection);
    const computerWinner = isWinner(computerSelection, selection);
    addSelectionResult(computerSelection, computerWinner);
    addSelectionResult(selection, yourWinner);
    if (yourWinner) {
        increaseScore(yourScoreSpan);
        console.log(yourScoreSpan);
    } else if (computerWinner) {
        increaseScore(computerScoreSpan);
        console.log(computerScoreSpan)
    }
    checkWinner();
}
function increaseScore(scoreSpan) {
    scoreSpan.innerText = parseInt(scoreSpan.innerText) + 1;
}
function addSelectionResult(selection, winner) {
    const div = document.createElement('div');
    div.innerText = selection.icon;
    div.classList.add('result-selection');
    if (winner) div.classList.add('winner');
    finalColumn.after(div);
}
function isWinner(selection, opponentSelection) {
    return selection.beats === opponentSelection.name;
}
function randomSelection() {
    const randomIndex = Math.floor(Math.random() * selections.length);
    return selections[randomIndex];
}
function restartGame() {
    location.reload();
}
function checkWinner() {
    if (parseInt(yourScoreSpan.innerHTML) === 5) {
        openWinModal()
        setInterval(20000);
    } else if (parseInt(computerScoreSpan.innerHTML) === 5) {
        openLoseModal();
        setInterval(20000);
    }
}
overlay.addEventListener('click', () => {
    var modals = document.querySelectorAll('.modal.active')
    modals.forEach(modal => {
        closeModal(modal)
    })
})
closeModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        var modal = button.closest('.modal')
        closeModal(modal)
    })
})
function openWinModal() {
    if (winModal == null) return
    winModal.classList.add('active')
    overlay.classList.add('active')
}
function openLoseModal() {
    if (loseModal == null) return
    loseModal.classList.add('active')
    overlay.classList.add('active')
}
function closeModal(modal) {
    if (modal == null) return
    modal.classList.remove('active');
    overlay.classList.remove('active');
    location.reload();
}