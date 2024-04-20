const nh = document.querySelector('.number-hours');
const bs = document.querySelector('.bar-seconds');
const ne = [];
const be = [];

//create hours
for (let i = 1; i <= 12; i++) {
    ne.push(
        `<span style = "--index:${i};"><p>${i}</p></span>`
    );
    console.log(ne);
}

nh.insertAdjacentHTML("afterbegin", ne.join(""));

//create seconds
for (let i = 1; i <= 60; i++) {
    be.push(
        `<span style = "--index:${i};"><p></p></span>`
    );

}
bs.insertAdjacentHTML("afterbegin", be.join(""));

const hh = document.querySelector(".hands.hours");
const hm = document.querySelector(".hands.minutes");
const hs = document.querySelector(".hands.seconds");

function gettime() {
    let date = new Date();
    let currenthours = date.getHours();
    let currentminutes = date.getMinutes();
    let currentseconds = date.getSeconds();
    hs.style.transform = `rotate(${currentseconds * 6}deg)`;
    hm.style.transform = `rotate(${currentminutes * 6}deg)`;
    hh.style.transform = `rotate(${currenthours * 30 + currentminutes / 2}deg)`;
}

gettime();

setInterval(gettime,1000);