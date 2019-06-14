//Inicialização da página

let root = document.getElementById('root');
let celulaAn = document.getElementById('animal');
let celulaVeg = document.getElementById('vegetal');
let celulaPro = document.getElementById('procarionte');
let celulas = document.getElementsByClassName("esquema");
let cellIdx = 1;// 0-animal / 1-vegetal / 2-procarionte


function updateCellDisplay(){
    for(i = 0; i < 3; i++){
        if(i != cellIdx)
            celulas[i].style.display = "none";
        else
            celulas[i].style.display = "block";
    }
}
updateCellDisplay();

function resizing(){
    let wWidth = window.innerWidth;
    let wHeight = window.innerHeight;

    let celulaAtual = celulas[cellIdx];
    let h1 = celulaAtual.children[0];
    h1.style.fontSize = wHeight/10+"px";
    celulaAtual.style.height = wHeight*9/10+"px";

}
resizing();
window.onresize = resizing;

//Array de organelas
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

//Botão "Exercitar conteúdo"
document.getElementById('ir').addEventListener("mouseenter", function(e){e.currentTarget.children[0].style.width = 280+"px";});
document.getElementById('ir').addEventListener("mouseleave", function(e){e.currentTarget.children[0].style.width = 240+"px";});

//Funcionamento das setas
let setas = document.getElementsByClassName("setaImg");
function alterarCelula(e){
    if( e.currentTarget.getAttribute("id") == "direitaImg" )
        cellIdx = (cellIdx == 2) ? 0 : cellIdx+1;
    else
        cellIdx = (cellIdx == 0) ? 2 : cellIdx-1;
    updateCellDisplay();
    resizing();

    setTimeout(function(){

        enableArrows();
    }, 1000);
    disableArrows();
}
function disableArrows(){
    for(let seta of setas){
        seta.removeEventListener("click", alterarCelula);
    }
}
function enableArrows(){
    for(let seta of setas){
        seta.addEventListener("click", alterarCelula);
    }
}
enableArrows();