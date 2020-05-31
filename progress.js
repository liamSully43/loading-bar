"use strict";

const progress = document.querySelector(".progress");
const bar = document.querySelector(".bar");
const start = document.querySelector(".start");

start.onclick = function() {
    bar.style.width = "0%";
    let i = 1;
    const time = setInterval(
        function() {
        setTimeout(function(){
            let x = i * 100;
            let width = x / 1000;
            bar.style.width = `${width}%`;
            i++;
            if(width === 100) {
                clearInterval(time);
            }
        }, 100)
    })
}