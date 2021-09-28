/* PAULO jOSÉ */




/* FERNÃO SHIOTSUKI */
const body = document.body;
const main = document.querySelector('main');
let discoSelecionado;
main.addEventListener('click', (event) => {
    event.path;

    let select = document.getElementById('start')
    select = select.lastElementChild;


    if (event.target.tagName === 'SPAN' || event.target.className === 'disco') {

        if (discoSelecionado === undefined) {
            if (event.path[1].lastElementChild.tagName !== 'SPAN') {
                discoSelecionado = event.path[1].lastElementChild
            }
        }
        else {
            if (discoSelecionado !== event.path[1].lastElementChild) {
                swap(event.path[1])
                
            } else{ 
                discoSelecionado = undefined;
            }
        }
    }
 


})

function swap(container) {

    let disco = container.lastElementChild;

    if (disco.tagName === 'SPAN') {
        container.appendChild(discoSelecionado)
    }
    else {
        let size = disco.style.width.split('%')[0];
        let discsize = discoSelecionado.style.width.split('%')[0];
        size = Number(size);
        discsize = Number(discsize);
        console.log(`${discsize}`, `${size}`)

        if (discsize < size) {

            container.appendChild(discoSelecionado);


        }
    }


    discoSelecionado = undefined

}



function start() {
    const spansMain = document.getElementsByClassName('container');
    for (let i of spansMain) {
        const Torre = document.createElement('span');
        console.log(spansMain)
        i.appendChild(Torre);
    }
    const start = document.getElementById('start');
    let list = ['quarto', 'terceiro', 'segundo', 'primeiro'];
    let size = ['100%', '80%', '60%', '40%']
    for (let i = 0; i < 4; i++) {
        const div = document.createElement('div');
        div.id = list[i]
        start.appendChild(div)
        div.style.width = size[i]
        div.classList.add('disco')

    }
}

start();














