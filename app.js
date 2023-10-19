//controls timer
const hour = document.querySelector('.hours');
const minutes = document.querySelector('.minutes');
const seconds = document.querySelector('.seconds');
const milSeconds = document.querySelector('.min-seconds');

//buttons timer
const startButton = document.querySelector('.start')
const lapButton = document.querySelector('.lap');
const stopButton = document.querySelector('.stop');
const resetButton = document.querySelector('.reset');

//main container 
const mainContainer = document.querySelector('.container')

//article lap-container 
const lapContainer = document.querySelector('.lap-container')

//Declaraciones a utilizar
let hr = min = sec = ms = "00";
let startTimer;
let lapNum = 0;

//event to start the stopwatch
startButton.addEventListener('click', () => {
    started();
})
const started = () => {
    startTimer = setInterval(() => {
        ms++;//aumento de uno en uno los ms
        ms = ms < 10 ? "0" + ms : ms;//si el sec es menor que 10, le aumento un cero al inicio para que sean de dos cifras 

        if (ms == 100) {//si los ms son iguales a 100:
            sec++;//aumento de uno en uno los sec
            ms = "00";//aca asigno 00 a los ms
            sec = sec < 10 ? "0" + sec : sec;//si el sec es menor que 10, le aumento un cero al inicio para que sean de dos cifras 
        }

        if (sec == 60) {//si los sec son iguales a 60:
            min++;//aumento de uno en uno los min
            sec = "00";//aca asigno 00 a los sec
            min = min < 10 ? "0" + min : min;//si el min es menor que 10, le aumento un cero al inicio para que sean de dos cifras 
        }

        if (min == 60) {//si los min son iguales a 60:
            hr++;//aumento de uno en uno las hr
            min = "00";//aca asigno 00 a los min
            hr = hr < 10 ? "0" + hr : hr;//si la hr es menor que 10, le aumento un cero al inicio para que sean de dos cifras 
        }
        putValuesTimer();
    }, 10)
    resetButton.style.display = 'none';
    startButton.style.display = 'none';
    lapButton.style.display = 'block';
    stopButton.style.display = 'block'
}
const putValuesTimer = () => {
    milSeconds.innerHTML = ms;
    seconds.innerHTML = sec;
    minutes.innerHTML = min;
    hour.innerHTML = hr;
}


//event to add to lapcontainer the stopwatch results
lapButton.addEventListener('click', () => {
    putValuesLapContainer();
})
const putValuesLapContainer = () => {
    mainContainer.style.height = 'auto'
    lapNum++;
    const lapElement = document.createElement('div');
    const lapElementText =
    `
    <span class="lapNum">Lap ${lapNum}</span>
    <span class="lapTimer">
        ${hr} : ${min} : ${sec} . ${ms}
    </span>
    `
    lapElement.innerHTML = lapElementText
    lapContainer.appendChild(lapElement)
}


//event to stop the stopwatch
stopButton.addEventListener('click', () => {
    stopTimer();
})
const stopTimer = () => {
    clearInterval(startTimer);
    resetButton.style.display = 'block';
    startButton.style.display = 'block';
    lapButton.style.display = 'none';
    stopButton.style.display = 'none'
}


//event to reset the stopwatch
resetButton.addEventListener('click', () => {
    resetTimer();
})
const resetTimer = () => {
    mainContainer.style.height = '280px'
    lapContainer.style.display = 'none'
    hr = min = sec = ms = "00";
    putValuesTimer();
}