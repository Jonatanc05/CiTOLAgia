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
        Descricao: "Parte mais externa do citoplasma, formada pelo líquido citoplasmático, de consistência gelatinosa. Espesso e transparente.",
        img: "imgs/organelas/ectoplasma.png",
        x: 100,
        y: 100,
        celula: "eucarionte"
    },
    {
        Nome: "Endoplasma",
        Descricao: "Parte mais interna do citoplasma, que circula o núcleo da célula. Tem consistência líquida e é também chamado de citosol.",
        img: "imgs/organelas/endoplasma.png",
        x: 100,
        y: 100,
        celula: "eucarionte"
    },
    {
        Nome: "Ribossomo",
        Descricao: "Os ribossomos ou ribossomas são as organelas responsáveis pela síntese de proteínas, tanto nas células eucariontes quanto nas procariontes. Podem ser encontrados tanto livres no citoplasma quanto aderidos ao retículo endoplasmático.",
        img: "imgs/organelas/Ribossomo.png",
        x: 100,
        y: 100,
        celula: "todas"
    },
    {
        Nome: "Centríolo",
        Descricao: "Geralmente encontrados aos pares, os centríolos são compostos por 9 grupos de 3 microtúbulos cada, formando uma espécie de cilindro. Participam ativamente da divisão celular.",
        img: "imgs/organelas/Centriolo.png",
        x: 100,
        y: 100,
        celula: "eucarionte"
    },
    {
        Nome: "Vacúolos",
        Descricao: "Muito abundantes nas células vegetais, os vacúolos podem ser de 3 tipos diferentes: de armazenamento, digestórios ou pulsáteis (eliminar o excesso de água da célula por osmose).",
        img: "imgs/organelas/Vacuolo.png",
        x: 100,
        y: 100,
        celula: "vegetal"
    },
    {
        Nome: "Parede celular",
        Descricao: "Presente exclusivamente nas células vegetais, a parede celular é responsável por manter a forma e a rigidez. Pode ser de celulose ou quitina.",
        img: "imgs/organelas/Parede_celular.png",
        x: 100,
        y: 100,
        celula: "vegetal"
    },
    {
        Nome: "Membrana citoplasmática",
        Descricao: "Estrutura que delimita a célula, estabelecendo uma barreira entre o citoplasma e o ambiente extracelular. Possui permeabilidade seletiva.",
        img: "imgs/organelas/Membrana_citoplasmatica.png",
        x: 100,
        y: 100,
        celula: "todas"
    },
    {
        Nome: "Lisossomos",
        Descricao: "Presentes apenas nas células animais, os lisossomos realizam a digestão celular, além de desempenharem uma função de reciclagem de antigos componentes da célula, por meio da autofagia.",
        img: "imgs/organelas/Lisossomo.png",
        x: 100,
        y: 100,
        celula: "eucarionte"
    },
    {
        Nome: "Reticulo endoplasmático",
        Descricao: "Está envolvido na síntese de proteínas e lípidios, bem como na desintoxicação celular e no transporte intracelular. Está presente em grandes quantidades no fígado. Pode ser liso (sem ribossomos) ou rugoso (com ribossomos).",
        img: "imgs/organelas/Reticulo_endoplasmatico.png",
        x: 100,
        y: 100,
        celula: "eucarionte"
    },
    {
        Nome: "Complexo de Golgi",
        Descricao: "Sua função primordial é a secreção de proteínas ribossomáticas e a sua distribuição por entre essas vesículas. Funciona como centro de armazenamento, transformação, empacotamento e remessa de substâncias.",
        img: "imgs/organelas/Complexo_de_golgi.png",
        x: 100,
        y: 100,
        celula: "eucarionte"
    },
    {
        Nome: "Mitocôndria",
        Descricao: "Realiza a respiração celular, processando a glicose e convertendo-a em energia sob a forma de ATP. Está presente em grandes quantidades no coração, sistema nervoso e sistema muscular. A teoria da endossimbiose diz que a mitocôndria, assim como o cloroplasto, era um ser de vida livre e se tornou uma organela por motivo de uma associação simbiótica entre ele e a célula.",
        img: "imgs/organelas/Mitocondria.png",
        x: 100,
        y: 100,
        celula: "eucarionte"
    },
    {
        Nome: "Cloroplasto",
        Descricao: "Organela responsável por dar a cor verde às plantas, visto que é nela que está a clorofila. No cloroplasto é que se realiza a fotossíntese. A teoria da endossimbiose diz que o cloroplasto, assim como a mitocôndria, era um ser de vida livre e se tornou uma organela por motivo de uma associação simbiótica entre ele e a célula.",
        img: "imgs/organelas/Cloroplasto.png",
        x: 100,
        y: 100,
        celula: "vegetal"
    }
];
