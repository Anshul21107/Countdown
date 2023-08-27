const daysEle = document.getElementById('daysCount');
const hoursEle = document.getElementById('hoursCount');
const minutesEle = document.getElementById('minutesCount');
const secondsEle = document.getElementById('secondCount');
const currYear = document.getElementById('curYear');

let x = 2024;
function countdown (){
    
    let newYear = "1 Jan "+ x;
    currYear.innerHTML = x;

    const newyearDate = new Date(newYear);
     const now = new Date();
     const diff = newyearDate - now;
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

     daysEle.innerHTML = days;
     hoursEle.innerHTML = formatTime(hours);
     minutesEle.innerHTML = formatTime(minutes);
     secondsEle.innerHTML = formatTime(seconds);

     if(days < 0 && hours < 0 && minutes < 0 && seconds < 0){
        x =x+1;
        clearInterval(setInterval);
    //     document.getElementById('countdown').style.display = "none";
    //     document.getElementById('countdown').style.opacity = "0";
    //     document.getElementById('countdown').style.zIndex = "-1";
    //     document.getElementById('countdown').style.visibility = "hidden";
    //     document.getElementById('countdown').style.height = "0px";
    //     document.getElementById('countdown').style.width = "0px";
    //     document.getElementById('countdown').style.top = "0px";
    //     document.getElementById('countdown').style.left = "0px";
    //     document.getElementById('countdown').style.position = "absolute";
     }
}
function formatTime(time)
{
    return time<10 ? '0'+ time: time;
}
countdown();
setInterval(countdown,1000);