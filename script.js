/* PAULO jOSÉ */




/* FERNÃO SHIOTSUKI */
const body = document.body;
const main = document.querySelector('main');

main.addEventListener('click', (event) => {

    console.log(event)

})

function start() {
    const spansMain = document.getElementsByClassName('container');
    for (let i of spansMain) {
        const Torre = document.createElement('span');
        console.log(spansMain)
        i.appendChild(Torre);
    }
    const start = document.getElementById('start');
    for (let i = 0; i < 4; i++) {
        let list = ['quarto', 'terceiro', 'segundo', 'primeiro'];
        const div = document.createElement('div');
        div.classList.add(list[i]);
        start.appendChild(div);
    }
}

start();














