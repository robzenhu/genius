let order = [];
let clickedOrder = [];
let score = 0;

// 0= verde
// 1 = vermelho
// 2 = amarelo
// 3 = azul


const blue = document.querySelector('.blue');
const red = document.querySelector('.red');
const green = document.querySelector('.green');
const yellow = document.querySelector('.yellow');

//cria as cores
let shuffleOrder = ()=>{
    let colorOrder = Math.floor(Math.random()*4);
    order[order.length] = colorOrder;
    clickedOrder = [];

    for(let i in order){
        let elementcolor = createColorElement(order[i]);
        lightColor(elementcolor, Number(i)+1);
    }
}
//acende cores
let lightColor = (element ,number)=>{
    number = number * 500;
    setTimeout(() => {
        element.classList.add('selected');
        
    }, number - 250);
    setTimeout(() => {
        element.classList.remove('selected');
    })
}
//checa botoes clicados
let checkOrder = ()=>{
    for(let i in clickedOrder){
        if (clickedOrder[i]!= order[i]) {
            lose();
            break
        }
    }
    if(clickedOrder.length == order.length){
        alert(`pontuação:${score}\nVocê acertou! iniciando próximo nível!`);
        nextlevel();
    }
}

//funcao para o clique do usuario

let click = (color) =>{
    clickedOrder[clickedOrder.length]=color;
    createColorElement(color).classList.add('selected');
    
    
    setTimeout(()=>{
        createColorElement(color).classList.remove('selected');
        checkOrder();
    },250);

    
}

// funcao que retorna a cor

let createColorElement = (color) => {
    if(color == 0){
        return green;
    }else if (color == 1){
        return red;
    }else if (color == 2 ){
        return yellow;
    }else if (color == 3){
        return blue;
    }
}
// funcao para proximo nivel

let nextlevel = () => {
    score++;
    shuffleOrder();
}

// funcao gamer over


let lose = ()=>{
    alert(`Pontuação: ${score}!\nVocê perdeu o jogo! \n Clique em OK  para iniciar um novo jogo`);
    order = [];
    clickedOrder = [];

    playGame();
}

let playGame = ()=> {
    alert('Bem vindo ao Gênesis! Iniciando novo jogo!');
    score = 0;

    nextlevel();
}

green.onclick = ()=>click(0);
red.onclick = ()=>click(1);
yellow.onclick = ()=>click(2);
blue.onclick = ()=>click(3);


playGame();