const spnText = document.querySelector('.text');
const spnCursor = document.querySelector('.cursor');
const text = ['jeden', 'dwa', 'trzy'];

let activeText = 0;
let activeLetter = 0;
const time = 40;

const addLetter = () => {
    if (activeLetter >= 0) {
        spnText.textContent += text[activeText][activeLetter];
    }
    activeLetter++;
    if (activeLetter === text[activeText].length) {
        activeText++;

        if (activeText == text.length) return;

        return setTimeout(() => {
            activeLetter = 0;
            spnText.textContent = ""
            addLetter();
        }, 2000)
    }

    setTimeout(addLetter, 100);
}

const cursorAnimation = () => {
    spnCursor.classList.toggle('active');
}

// const indexInterval = setInterval(addLetter, time);
addLetter()
setInterval(cursorAnimation, 400)