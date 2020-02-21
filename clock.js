const clockContainer = document.querySelector (".js_clock");
const clockTitle = clockContainer.querySelector("h1");

function getTime() {
    const date = new Date();
    const ghour = date.getHours();
    const gminute = date.getMinutes();
    const gsecond = date.getSeconds();
    const hour = JSON.stringify(ghour);
    const minute = JSON.stringify(gminute);
    const second = JSON.stringify(gsecond);
    const hours = hour.padStart(2,'0');
    const minutes = minute.padStart(2,'0');
    const seconds =second.padStart(2,'0');
    clockTitle.innerText = `${hours}:${minutes}:${seconds}`;
}

function init() {
    getTime();
    setInterval(getTime, 1000);
    //getTime = 시간 얻는 부분, 1000= 1sec(여기서는 1이 1 millisecond이다.)
    
}

init();