const nh = document.querySelector('.number-hours');
const ne = [];

//create hours
for (let i = 1; i <= 12; i++) {
    ne.push(
        `<span style = "--index:${i};"><p>${i}</p></span>`
    );
    console.log(ne);
}

nh.insertAdjacentHTML("afterbegin", ne.join(""));
