function showTime () {
let date = new Date();
let h = date.getHours();
let m = date.getMinutes();
let s = date.getSeconds();

document.querySelector("#counter").innerHTML = `${h}:${m}:${s}`;
}

setInterval(()=> {
    showTime();
}, 1000);

function fixZero (time) {
    
}
