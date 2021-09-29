/* PAULO jOSÉ */
const buttonReset = document.querySelector("#reset");
const sectionStart = document.querySelector(".section--start");
let CONTADOR;
let DIFFICULTYS;

/*  SELEÇÃO DE DIFICULDADE E INICIAR O JOGO  NA TELA START */
sectionStart.querySelector("div").addEventListener("click", (event) => {
    if(event.target.tagName === "BUTTON"){
        DIFFICULTYS = event.target.id;
        sectionStart.classList.add("displey--none");
        resetGame();
    }
});


/*  AÇÃO DO BUTTON DO DISPLAY DE VITÓRIA PARA REINICIAR O JOGO  */
document.querySelector(".section--victory button").addEventListener("click", () => {
    resetGame();
    document.querySelector(".section--victory").classList.add("displey--none");
    sectionStart.classList.remove("displey--none");
});


/*    VERIFICA SE O JOGADOR VENCEU O JOGO    */
function conditionVictory(){
    const divEnd = document.querySelector("#end");
    let countChild = divEnd.childElementCount;
    let condition;

    switch(DIFFICULTYS){
        case "easy":
            condition = (countChild === 4);
        break;
        case "normal":
            condition = (countChild === 5);
        break;
        case "difficult":
            condition = (countChild === 6);
        break;
    }

    if(condition){
        const sectionVictory = document.querySelector(".section--victory");
        sectionVictory.classList.remove("displey--none");
        const pMovements = document.querySelector(".section--victory p");
        pMovements.textContent = `Número de Movimentos: ${CONTADOR}`;
    }
}


/*    BUTTON QUE RESETA OS MOVIMENTOS     */
buttonReset.addEventListener("click", resetGame);
function resetGame(){
    CONTADOR = undefined;
    if(discoSelecionado !== undefined){
        discoSelecionado.classList.remove("disco--foco");
    }
    discoSelecionado = undefined;

    const divContainer = document.querySelectorAll(".container");
    for(let div in divContainer){
        divContainer[div].textContent = "";
    }
    start();
}

/*    CONTA OS MOVIMENTOS DO JOGADOR    */
function counterMovement(){
    let elementTag = document.querySelector(".contador");
    if(CONTADOR === undefined){
        CONTADOR = 0;
        elementTag.textContent = `Movimentos: ${CONTADOR}`;
        return;
    }
    CONTADOR++;
    elementTag.textContent = `Movimentos: ${CONTADOR}`;
}


/*   SELECIONA O DISCO QUE O JOGADOR QUE MOVER, O MOVIMENTO SÓ ACONTECE SE JÁ TIVER UM DISCO SELECIONADO   */
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
        counterMovement();
    }
    else {
        let size = disco.style.width.split('%')[0];
        let discsize = discoSelecionado.style.width.split('%')[0];
        size = Number(size);
        discsize = Number(discsize);

        if (discsize < size) {
            container.appendChild(discoSelecionado);
            counterMovement();
        }
        else{
            alert("O disco maior não pode ficar em cima de um menor");
        }
    }

    discoSelecionado.classList.remove("disco--foco");
    discoSelecionado = undefined;
    conditionVictory();
}



function start() {
    counterMovement();
    const spansMain = document.getElementsByClassName('container');
    for (let i of spansMain) {
        const Torre = document.createElement('span');
        i.appendChild(Torre);
    }
    
    let numDisk;
    switch(DIFFICULTYS){
        case "easy":
            numDisk = 3;
        break;
        case "normal":
            numDisk = 4;
        break;
        case "difficult":
            numDisk = 5;
        break;

    }

    const divStart = document.getElementById('start');
    let list = ['quinto' ,'quarto', 'terceiro', 'segundo', 'primeiro'];
    let size = ['100%', '80%', '60%', '40%', '20%'];

    for (let i = 0; i < numDisk; i++) {
        const div = document.createElement('div');
        div.id = list[i];
        div.style.width = size[i];
        div.classList.add('disco');

        divStart.appendChild(div);
    }
}