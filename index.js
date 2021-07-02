const colors = [
    '#FFFFFF',
    '#2196F3',
    '#4CAF50',
    '#FF9800',
    '#009688',
    '#795548',
  ];
 
const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

const refs = {
    btnStart: document.querySelector('button[data-action="start"]'),
    btnStop: document.querySelector('button[data-action="stop"]'),
    body: document.querySelector('body'),
};

let intervalId = null;

refs.btnStart.addEventListener('click', onChangeBackgrounColor);
refs.btnStop.addEventListener('click', stopChangeBackgrounColor);

function onChangeBackgrounColor() {
    refs.btnStart.disabled = true;
    intervalId = setInterval(() => {
        refs.body.style.backgroundColor = createBackgrounColor();
    }, 1000);
}

function createBackgrounColor() {
    return colors[randomIntegerFromInterval(0, colors.length - 1)];   
}

function stopChangeBackgrounColor() {
    refs.btnStart.disabled = false;
    clearInterval(intervalId);
}
