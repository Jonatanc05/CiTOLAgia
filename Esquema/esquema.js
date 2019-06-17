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
        descricao: "Estrutura que delimita a célula, estabelecendo uma barreira entre o citoplasma e o ambiente extracelular. Possui permeabilidade seletiva.",
        img: "imgs/organelas/Membrana_citoplasmatica.png",
        x: "25%",
        y: "15%",
        w: "50%",
        celula: "animal"
    },
    {
        nome: "Parede Celular",
        descricao: "Presente exclusivamente nas células vegetais, a parede celular é responsável por manter a forma e a rigidez. Pode ser de celulose ou quitina.",
        img: "imgs/organelas/Parede_celular.png",
        x: "25%",
        y: "15%",
        w: "50%",
        celula: "vegetal"
    },
    {
        nome: "Celula Procarionte",
        descricao: "A principal diferença das células procariontes em relação às eucariontes é a ausência de um núcleo que separe o material genético do citoplasma. Os seres que apresentam células procariontes são, em sua grande maioria, unicelulares.",
        img: "imgs/organelas/Procarionte.png",
        x: "22%",
        y: "10%",
        w: "55%",
        celula: "procarionte"
    },
    {
        nome: "Núcleo",
        descricao: "É separado do citoplasma pelo envoltório nuclear, se comunicando com o mesmo por meio dos chamados poros nucleares. O material genético da célula (DNA) se localiza no núcleo.",
        img: "imgs/organelas/Nucleo.png",
        x: "45%",
        y: "35%",
        w: "15%",
        celula: "eucarionte"
    },
    {
        nome: "Ribossomo",
        descricao: "Os ribossomos ou ribossomas são as organelas responsáveis pela síntese de proteínas, tanto nas células eucariontes quanto nas procariontes. Podem ser encontrados tanto livres no citoplasma quanto aderidos ao retículo endoplasmático.",
        img: "imgs/organelas/Ribossomo.png",
        x: "40%",
        y: "50%",
        w: "2%",
        celula: "todas"
    },
    {
        nome: "Centríolo",
        descricao: "Geralmente encontrados aos pares, os centríolos são compostos por 9 grupos de 3 microtúbulos cada, formando uma espécie de cilindro. Participam ativamente da divisão celular.",
        img: "imgs/organelas/Centriolo.png",
        x: "35%",
        y: "70%",
        w: "9%",
        celula: "animal"
    },
    {
        nome: "Vacúolos",
        descricao: "Muito abundantes nas células vegetais, os vacúolos podem ser de 3 tipos diferentes: de armazenamento, digestórios ou pulsáteis (eliminar o excesso de água da célula por osmose).",
        img: "imgs/organelas/Vacuolo.png",
        x: "35%",
        y: "30%",
        w: "14%",
        celula: "vegetal"
    },
    {
        nome: "Lisossomos",
        descricao: "Presentes apenas nas células animais, os lisossomos realizam a digestão celular, além de desempenharem uma função de reciclagem de antigos componentes da célula, por meio da autofagia.",
        img: "imgs/organelas/Lisossomo.png",
        x: "32%",
        y: "55%",
        w: "6%",
        celula: "animal"
    },
    {
        nome: "Reticulo endoplasmatico rugoso",
        descricao: "Processam e transportam moléculas, além de tornar a síntese de proteínas mais eficiente.",
        img: "imgs/organelas/Reticulo_endoplasmatico_rugoso.png",
        x: "48%",
        y: "55%",
        w: "15%",
        celula: "eucarionte"
    },
    {
        nome: "Reticulo endoplasmatico liso",
        descricao: "Processam e transportam moléculas. Está envolvido na síntese de lípidios, bem como na desintoxicação celular e no transporte intracelular. Presente em grandes quantidades no fígado.",
        img: "imgs/organelas/Reticulo_endoplasmatico_liso.png",
        x: "50%",
        y: "20%",
        w: "8%",
        celula: "eucarionte"
    },
    {
        nome: "Complexo de golgi",
        descricao: "Sua função primordial é a secreção de proteínas ribossomáticas e a sua distribuição por entre essas vesículas. Funciona como centro de armazenamento, transformação, empacotamento e remessa de substâncias.",
        img: "imgs/organelas/Complexo_de_golgi.png",
        x: "61%",
        y: "35%",
        w: "9%",
        celula: "eucarionte"
    },
    {
        nome: "Mitocôndria",
        descricao: "Realiza a respiração celular, processando a glicose e convertendo-a em energia sob a forma de ATP. Está presente em grandes quantidades no coração, sistema nervoso e sistema muscular. A teoria da endossimbiose diz que a mitocôndria, assim como o cloroplasto, era um ser de vida livre e se tornou uma organela por motivo de uma associação simbiótica entre ele e a célula.",
        img: "imgs/organelas/Mitocondria.png",
        x: "38%",
        y: "60%",
        w: "8%",
        celula: "eucarionte"
    },
    {
        nome: "Cloroplasto",
        descricao: "Organela responsável por dar a cor verde às plantas, visto que é nela que está a clorofila. No cloroplasto é que se realiza a fotossíntese. A teoria da endossimbiose diz que o cloroplasto, assim como a mitocôndria, era um ser de vida livre e se tornou uma organela por motivo de uma associação simbiótica entre ele e a célula.",
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

            }
        }
    }
}

document.getElementById("sobreposicao").addEventListener('click',function(){
    document.getElementById('sobreposicao').style.display = "none";
});
