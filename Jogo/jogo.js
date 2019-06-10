let tamanhoCartao = 180;
let margemCartao = 30;
let colunas = 6;
let linhas = 4;

let root = document.getElementById('divGrade');

let resizing = function(event){
    let wWidth = window.innerWidth;
    let wHeight = window.innerHeight;

    root.style.gridTemplateColumns = "repeat("+colunas+", "+tamanhoCartao+"px)";
    root.style.gridTemplateRows = "repeat("+linhas+", "+tamanhoCartao+"px)";
    root.style.gridGap = margemCartao;
    root.style.position = "absolute";
    root.style.left = (wWidth - colunas*tamanhoCartao - margemCartao*(colunas-1))/2+"px";
    root.style.top = (wHeight - linhas*tamanhoCartao - margemCartao*(linhas-1))/2+"px";

}

window.onresize = resizing;
resizing();


let arrOrganelas = [
    {
        Nome: "Ectoplasma",
        Descricao: "Parte mais externa do citoplasma, é encontrado na forma de gel (gelatinoso)"
    },
    {
        Nome: "Endoplasma",
        Descricao: "Parte mais interna do citoplasma,é encontrado geralmente na forma de sol (liquido)"
    },
    {
        Nome: "Ribossomo",
        Descricao: "Síntese de proteínas"
    },
    {
        Nome: "Centríolo",
        Descricao: "Participa ativamente na divisão celular"
    },
    {
        Nome: "Vacúolos",
        Descricao: "Armazena substâncias"
    },
    {
        Nome: "Parede celular",
        Descricao: "Manutenção de forma e confere rigidez, pode ser de quitina ou celulose"
    },
    {
        Nome: "Membrana citoplasmatica",
        Descricao: "Delimita a célula e realiza troca com o meio externo e interno"
    },
    {
        Nome: "Lisossomos",
        Descricao: "Realizam a digestão celular"
    },
    {
        Nome: "Reticulo endoplasmatico",
        Descricao: "Processam e transportam moléculas, podem produzir proteínas também"
    },
    {
        Nome: "Aparelho de golgi",
        Descricao: "Secreta substâncias para o interior e exterior da célula"
    },
    {
        Nome: "Mitocôndria",
        Descricao: "Realiza respiração celular"
    },
    {
        Nome: "Cloroplasto",
        Descricao: "Realizam fotossíntese"
    }
];
let arrCartao = [];
for(i = 0; i < arrOrganelas.length*2; i+=2){
    arrCartao[i] = { img: "../imgs/"+arrOrganelas[i/2].Nome+".png", descricao: undefined};
    arrCartao[i+1] = { img: undefined, descricao: arrOrganelas[i/2].Descricao };
}

shuffle(arrCartao);
console.log(arrCartao);

function shuffle(arr){
    for(i = 0; i < 24; i++){
        let idx1 = Math.floor(Math.random()*100) % 24;
        let idx2 = Math.floor(Math.random()*100) % 24;
        temp = arr[ idx1 ];
        arr[ idx1 ] = arr[ idx2 ];
        arr[ idx2 ] = temp;
    }
}

for(i = 0; i < 24; i++){
    let el = document.createElement('div');
    let att = document.createAttribute('class');
    att.value = "elemento";
    el.setAttributeNode(att);
    if(arrCartao[i].img == undefined){
        let p = document.createElement('p');
        p.innerText = arrCartao[i].descricao;
        el.appendChild(p);
    }
    else{
        let imgEl = document.createElement('img');
        imgEl.setAttribute('src', arrCartao[i].img)
        el.appendChild(imgEl);
    }
    root.appendChild(el);
}