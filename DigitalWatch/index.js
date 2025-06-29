
function getTime(){
const time = new Date();

const hours = time.getHours();
const min = time.getMinutes();
const sec = time.getSeconds();


const timeString = `${hours} : ${min} : ${sec}`;

document.getElementById("clock").textContent = timeString;

}

setInterval(getTime,1000)
getTime();