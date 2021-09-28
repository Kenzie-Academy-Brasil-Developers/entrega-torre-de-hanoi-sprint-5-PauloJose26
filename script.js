/* PAULO jOSÉ */
function selectDisk(container){
    let childElement = container.lastElementChild;
    if(discoSelecionado === undefined){
        if(childElement.tagName !== "SPAN"){
            discoSelecionado = childElement;
            discoSelecionado.classList.add("disco--foco");
        }
    }
    else{
        if(discoSelecionado !== childElement){
            swap(container);
        }
        else{
            discoSelecionado.classList.remove("disco--foco");
            discoSelecionado = undefined;
        }
    }
}



/* FERNÃO SHIOTSUKI */
const body = document.body;
const main = document.querySelector('main');
let discoSelecionado;
main.addEventListener('click', (event) => {
    let container = event.target;
    if(container.className === 'container'){
        selectDisk(container);
    }
    else if(container.tagName === 'SPAN' || container.tagName === 'DIV'){
        selectDisk(event.path[1]);
    }
});




function swap(container) {
    let disco = container.lastElementChild;

    if (disco.tagName === 'SPAN') {
        container.appendChild(discoSelecionado);
    }
    else {
        let size = disco.style.width.split('%')[0];
        let discsize = discoSelecionado.style.width.split('%')[0];
        size = Number(size);
        discsize = Number(discsize);

        if (discsize < size) {
            container.appendChild(discoSelecionado);
        }
        else{
            alert("O disco maior não pode ficar em cima de um menor");
        }
    }

    discoSelecionado.classList.remove("disco--foco");
    discoSelecionado = undefined;
}

function start() {
    const spansMain = document.getElementsByClassName('container');
    for (let i of spansMain) {
        const Torre = document.createElement('span');
        i.appendChild(Torre);
    }

    const start = document.getElementById('start');
    let list = ['quarto', 'terceiro', 'segundo', 'primeiro'];
    let size = ['100%', '80%', '60%', '40%'];

    for (let i = 0; i < 4; i++) {
        const div = document.createElement('div');
        div.id = list[i];
        div.style.width = size[i];
        div.classList.add('disco');

        start.appendChild(div);
    }
}

start();