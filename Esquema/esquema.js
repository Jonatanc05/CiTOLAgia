//Inicialização da página

let root = document.getElementById('root');
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
    
    let celulaImgs = document.getElementsByClassName('celula');
    for(let img of celulaImgs){
        let parent = img.parentElement;
        let roomHeight = parent.offsetHeight - h1.offsetHeight;
        let roomWidth = parent.offsetWidth;
        if( roomHeight < roomWidth ){
            img.style.removeProperty('width');
            img.style.height = roomHeight+"px";
        }
        else{
            img.style.removeProperty('height');
            img.style.width = roomWidth+"px";
        }
        img.style.left = (roomWidth - img.offsetWidth)/2+"px";
    }

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
            slideInFrom(celulas[cellIdx], "40%")
        }, 800);
    }
    else{
        slideOutTo(celulas[cellIdx], "40%");
        cellIdx = (cellIdx == 0) ? 2 : cellIdx-1;
        setTimeout(function(){
            updateCellDisplay();
            resizing();
            slideInFrom(celulas[cellIdx], "-40%");
        }, 800);
    }        

    disableArrows();
    setTimeout(function(){
        enableArrows();
    }, 1900);
};

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
    element.style.transition = "all 800ms cubic-bezier(.82,-0.86,.43,1.04)";
    element.style.left = targetPos;
    element.style.opacity = "0";
}
function slideInFrom(element, originPos){
    element.style.removeProperty('transition');
    element.style.left = originPos;
    element.style.opacity = "0";
    
    setTimeout(function(){
        element.style.transition = "all 800ms cubic-bezier(.82,-0.86,.43,1.04)";
        element.style.left = "0";
        element.style.opacity = "1";
    }, 500);
}

//Organelas clicáveis
let arrOrganelas = [
    {
        nome: "Membrana Citoplasmatica",
        descricao: "Delimita a célula e realiza troca com o meio externo e interno",
        img: "imgs/organelas/Membrana_citoplasmatica.png",
        x: "25%",
        y: "15%",
        w: "50%",
        celula: "animal"
    },
    {
        nome: "Parede Celular",
        descricao: "Manutenção de forma e confere rigidez, pode ser de quitina ou celulose",
        img: "imgs/organelas/Parede_celular.png",
        x: "25%",
        y: "15%",
        w: "50%",
        celula: "vegetal"
    },
    {
        nome: "Celula Procarionte",
        descricao: "PESQUISAR",
        img: "imgs/organelas/Procarionte.png",
        x: "22%",
        y: "10%",
        w: "55%",
        celula: "procarionte"
    },
    {
        nome: "Núcleo",
        descricao: "Contém o material genético matriz da célula",
        img: "imgs/organelas/Nucleo.png",
        x: "45%",
        y: "35%",
        w: "15%",
        celula: "eucarionte"
    },
    {
        nome: "Ribossomo",
        descricao: "Síntese de proteínas",
        img: "imgs/organelas/Ribossomo.png",
        x: "32%",
        y: "55%",
        w: "5%",
        celula: "todas"
    },
    {
        nome: "Centríolo",
        descricao: "Participa ativamente na divisão celular",
        img: "imgs/organelas/Centriolo.png",
        x: "35%",
        y: "70%",
        w: "9%",
        celula: "animal"
    },
    {
        nome: "Vacúolos",
        descricao: "Armazena substâncias",
        img: "imgs/organelas/Vacuolo.png",
        x: "35%",
        y: "30%",
        w: "14%",
        celula: "vegetal"
    },
    {
        nome: "Lisossomos",
        descricao: "Realizam a digestão celular",
        img: "imgs/organelas/Lisossomo.png",
        x: "35%",
        y: "45%",
        w: "6%",
        celula: "eucarionte"
    },
    {
        nome: "Reticulo endoplasmatico rugoso",
        descricao: "Processam e transportam moléculas, torna a síntese de proteínas mais eficiente",
        img: "imgs/organelas/Reticulo_endoplasmatico_rugoso.png",
        x: "48%",
        y: "55%",
        w: "15%",
        celula: "eucarionte"
    },
    {
        nome: "Reticulo endoplasmatico liso",
        descricao: "Processam e transportam moléculas, participa da produção de lipídios",
        img: "imgs/organelas/Reticulo_endoplasmatico_liso.png",
        x: "50%",
        y: "20%",
        w: "8%",
        celula: "eucarionte"
    },
    {
        nome: "Complexo de golgi",
        descricao: "Secreta substâncias para o interior e exterior da célula",
        img: "imgs/organelas/Complexo_de_golgi.png",
        x: "61%",
        y: "35%",
        w: "9%",
        celula: "eucarionte"
    },
    {
        nome: "Mitocôndria",
        descricao: "Realiza respiração celular",
        img: "imgs/organelas/Mitocondria.png",
        x: "38%",
        y: "60%",
        w: "8%",
        celula: "eucarionte"
    },
    {
        nome: "Cloroplasto",
        descricao: "Realizam fotossíntese",
        img: "imgs/organelas/Cloroplasto.png",
        x: "60%",
        y: "48%",
        w: "6%",
        celula: "vegetal"
    }
];
let arrCelulas = [
    {
        nome: "animal",
        tiposAceitos: ["animal", "eucarionte", "todas"]
    },
    {
        nome: "vegetal",
        tiposAceitos: ["vegetal", "eucarionte", "todas"]
    },
    {
        nome: "procarionte",
        tiposAceitos: ["procarionte", "todas"]
    }
]

for(let celula of arrCelulas){
    for(let organela of arrOrganelas){
        for(let tipo of celula.tiposAceitos){
            if(organela.celula == tipo){
                let newImg = document.createElement('img');
                newImg.setAttribute('src', organela.img);
                newImg.setAttribute('class', 'organelas');
                newImg.style.left = organela.x;
                newImg.style.top = organela.y;
                newImg.style.width = organela.w;

                newImg.addEventListener("click", function(){
                    let info = document.getElementById('fixedInfo');
                    info.children[0].innerHTML = organela.nome;
                    info.children[1].innerHTML = organela.descricao;
                    let imagem = document.getElementById('container');
                    imagem.children[0].setAttribute('src', organela.img);
                    let janela = document.getElementById('sobreposicao');
                    janela.style.display = "block";
                });

                document.getElementById(celula.nome).appendChild(newImg);

                let fechar = document.getElementById('fechar');
                fechar.addEventListener('click',function(){
                    let janela = document.getElementById('sobreposicao');
                    janela.style.display = "none";
                })
            }
        }
    }
}
