//Inicialização da página

let root = document.getElementById('root');
let celulaAn = document.getElementById('animal');
let celulaVeg = document.getElementById('vegetal');
let celulaPro = document.getElementById('procarionte');
let celulas = document.getElementsByClassName("esquema");
let cellIdx = 0;// 0-animal / 1-vegetal / 2-procarionte


function updateCellDisplay(){
    for(i = 0; i < 3; i++){
        if(i != cellIdx){
            celulas[i].style.display = "none";
            celulas[i].style.opacity ="0";
        }
        else
            celulas[i].style.display = "block";
    }
}
updateCellDisplay();

function resizing(){
    let wHeight = window.innerHeight;

    let celulaAtual = celulas[cellIdx];
    let h1 = celulaAtual.children[0];
    h1.style.fontSize = wHeight/10+"px";
    celulaAtual.style.height = wHeight*9/10+"px";

}
resizing();
window.onresize = resizing;

//Botão "Exercitar conteúdo"
document.getElementById('ir').addEventListener("mouseenter", function(e){e.currentTarget.children[0].style.width = 280+"px";});
document.getElementById('ir').addEventListener("mouseleave", function(e){e.currentTarget.children[0].style.width = 240+"px";});

//Funcionamento das setas
let setas = document.getElementsByClassName("setaImg");

function alterarCelula(e){
    if( e.currentTarget.getAttribute("id") == "direitaImg" ){
        slideOutTo(celulas[cellIdx], "-40%");
        cellIdx = (cellIdx == 2) ? 0 : cellIdx+1;
        setTimeout(function(){
            updateCellDisplay();
            resizing();
            slideInFrom(celulas[cellIdx], "50%");
        }, 600);
    }
    else{
        slideOutTo(celulas[cellIdx], "50%");
        cellIdx = (cellIdx == 0) ? 2 : cellIdx-1;
        setTimeout(function(){
            updateCellDisplay();
            resizing();
            slideInFrom(celulas[cellIdx], "-40%");
        }, 600);
    }        

    disableArrows();
    setTimeout(function(){
        enableArrows();
    }, 1600);
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

function slideOutTo(element, targetPos){
    element.style.left = targetPos;
    element.style.opacity = "0";
}
function slideInFrom(element, originPos){
    element.style.removeProperty('transition');
    element.style.left = originPos;
    
    setTimeout(function(){
        element.style.transition = "all 800ms cubic-bezier(.82,-0.86,.43,1.04)";
        element.style.left = "0";
        element.style.opacity = "1";
    }, 100);
}

//Organelas clicáveis
let arrOrganelas = [
    {
        Nome: "Ectoplasma",
        Descricao: "Parte mais externa do citoplasma, é encontrado na forma de gel (gelatinoso)",
        img: "imgs/organelas/ectoplasma.png",
        x: 100,
        y: 100,
        celula: "eucarionte"
    },
    {
        Nome: "Endoplasma",
        Descricao: "Parte mais interna do citoplasma,é encontrado geralmente na forma de sol (liquido)",
        img: "imgs/organelas/endoplasma.png",
        x: 100,
        y: 100,
        celula: "eucarionte"
    },
    {
        Nome: "Ribossomo",
        Descricao: "Síntese de proteínas",
        img: "imgs/organelas/Ribossomo.png",
        x: 100,
        y: 100,
        celula: "todas"
    },
    {
        Nome: "Centríolo",
        Descricao: "Participa ativamente na divisão celular",
        img: "imgs/organelas/Centriolo.png",
        x: 100,
        y: 100,
        celula: "eucarionte"
    },
    {
        Nome: "Vacúolos",
        Descricao: "Armazena substâncias",
        img: "imgs/organelas/Vacuolo.png",
        x: 100,
        y: 100,
        celula: "vegetal"
    },
    {
        Nome: "Parede celular",
        Descricao: "Manutenção de forma e confere rigidez, pode ser de quitina ou celulose",
        img: "imgs/organelas/Parede_celular.png",
        x: 100,
        y: 100,
        celula: "vegetal"
    },
    {
        Nome: "Membrana citoplasmática",
        Descricao: "Delimita a célula e realiza troca com o meio externo e interno",
        img: "imgs/organelas/Membrana_citoplasmatica.png",
        x: 100,
        y: 100,
        celula: "todas"
    },
    {
        Nome: "Lisossomos",
        Descricao: "Realizam a digestão celular",
        img: "imgs/organelas/Lisossomo.png",
        x: 100,
        y: 100,
        celula: "eucarionte"
    },
    {
        Nome: "Reticulo endoplasmatico",
        Descricao: "Processam e transportam moléculas, podem produzir proteínas também",
        img: "imgs/organelas/Reticulo_endoplasmatico.png",
        x: 100,
        y: 100,
        celula: "eucarionte"
    },
    {
        Nome: "Complexo de golgi",
        Descricao: "Secreta substâncias para o interior e exterior da célula",
        img: "imgs/organelas/Complexo_de_golgi.png",
        x: 100,
        y: 100,
        celula: "eucarionte"
    },
    {
        Nome: "Mitocôndria",
        Descricao: "Realiza respiração celular",
        img: "imgs/organelas/Mitocondria.png",
        x: 100,
        y: 100,
        celula: "eucarionte"
    },
    {
        Nome: "Cloroplasto",
        Descricao: "Realizam fotossíntese",
        img: "imgs/organelas/Cloroplasto.png",
        x: 100,
        y: 100,
        celula: "vegetal"
    }
];
