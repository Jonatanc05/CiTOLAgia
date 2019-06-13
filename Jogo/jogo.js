let root = document.getElementById('divGrade');

var verif = 0,contador = 0; // Variável para ver numero de cartas viradas
/*    Criação Cartões    */

let cooldown = 200; // Tempo para clicar novamente, em ms
let canClick = true; // Se a carta pode ser clicada ou não

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
        Nome: "Centriolo",
        Descricao: "Participa ativamente na divisão celular"
    },
    {
        Nome: "Vacuolo",
        Descricao: "Armazena substâncias"
    },
    {
        Nome: "Parede_celular",
        Descricao: "Manutenção de forma e confere rigidez, pode ser de quitina ou celulose"
    },
    {
        Nome: "Membrana_citoplasmatica",
        Descricao: "Delimita a célula e realiza troca com o meio externo e interno"
    },
    {
        Nome: "Lisossomo",
        Descricao: "Realizam a digestão celular"
    },
    {
        Nome: "Reticulo_endoplasmatico",
        Descricao: "Processam e transportam moléculas, podem produzir proteínas também"
    },
    {
        Nome: "Complexo_de_golgi",
        Descricao: "Secreta substâncias para o interior e exterior da célula"
    },
    {
        Nome: "Mitocondria",
        Descricao: "Realiza respiração celular"
    },
    {
        Nome: "Cloroplasto",
        Descricao: "Realizam fotossíntese"
    }
];

// Criação do vetor de cartas
let arrCartao = [];
arrDiv = [];
arrDiv[0]=arrDiv[1]=null;
let arrLogc = [];
arrLogc[0]=arrLogc[1]=null;

for(i = 0; i < arrOrganelas.length*2; i+=2){ // Atribui a imagem de uma organela às cartas ímpares e a descrição sobre ela às cartas pares
    arrCartao[i] = { virada: false, img: "../imgs/organelas/"+arrOrganelas[i/2].Nome+".png", descricao: undefined, Nome: arrOrganelas[i/2].Nome, id : 'carta'+i };
    arrCartao[i+1] = { virada: false, img: undefined, descricao: arrOrganelas[i/2].Descricao, Nome: arrOrganelas[i/2].Nome ,id : 'carta'+(i+1)};
}

for(i = 0; i < 24; i++){ // Randomiza a posição das cartas
    let idx1 = Math.floor(Math.random()*100) % 24;
    let idx2 = Math.floor(Math.random()*100) % 24;
    temp = arrCartao[ idx1 ];
    arrCartao[ idx1 ] = arrCartao[ idx2 ];
    arrCartao[ idx2 ] = temp;
}

for(i = 0; i < 24; i++){ // Cria uma div para cada carta
    let el = document.createElement('div');
    //let id = document.createAttribute('id');
    el.setAttribute('id', 'carta'+i);
    el.setAttribute('class', 'elemento');
    el.setAttribute('alt', arrCartao[i].Nome);
    if(arrCartao[i].img == undefined){ // Caso a carta em questão seja de descrição, cria um 'p' e o coloca dentro da div respectiva da carta
        let p = document.createElement('p');
        p.innerText = arrCartao[i].descricao;
        if( !arrCartao[i].virada)
            p.style.display = "none";
        el.appendChild(p);
    }
    else{ // Caso seja uma imagem, atribui ela à carta
        el.style.backgroundImage = "url(../imgs/verso.jpg)";
    }
    el.addEventListener("click", function(e){
        let id = e.currentTarget.getAttribute('id').substr(5);

        //console.log(id);
        //console.log(arrCartao[id]);
        if(arrCartao[id].virada == false){
            arrCartao[id].virada = true;
            verif = 0;
            if(arrCartao[id].img == undefined){ // Quando é descrição
                let par = e.currentTarget.children[0];
                par.style.display = "block";
                e.currentTarget.style.backgroundImage = "url(../imgs/text-background.jpg)";
            } 
            else{
                e.currentTarget.style.backgroundImage = "url("+arrCartao[id].img+")";
            }
        }
        else verif = 1;

        /*    Lógica do jogo      */
        if(arrLogc[0] == null && verif == 0){
            arrLogc[0] = arrCartao[id];
            arrDiv[0] = e.currentTarget;

        }else if(arrLogc[1] == null && verif == 0){
            arrLogc[1] = arrCartao[id];
            arrDiv[1] = e.currentTarget;

            if(arrLogc[0].Nome == arrLogc[1].Nome){
                console.log("Acertou!!!!");
                contador++;
                arrDiv[0] = arrLogc[1] = null;
                arrDiv[1] = arrLogc[0] = null;
                if(contador==12){
                    window.alert("Venceu o game");
                    contador=0;
                }
            }else{
                arrLogc[0].virada = arrLogc[1].virada = false;
                
                if(arrLogc[0].img == undefined){
                    setTimeout( function(){
                        arrDiv[0].style.backgroundImage = "url(../imgs/verso.jpg)";
                        let par = arrDiv[0].children[0];
                        par.style.display = "none";
                    }, 800);
                }else{
                    setTimeout( function(){
                        arrDiv[0].style.backgroundImage = "url(../imgs/verso.jpg)";
                    }, 800);
                }

                if(arrLogc[1].img == undefined){
                    setTimeout( function(){
                        arrDiv[1].style.backgroundImage = "url(../imgs/verso.jpg)";
                        let par = arrDiv[1].children[0];
                        par.style.display = "none";
                        arrLogc[0] = arrLogc[1] = null;
                        arrDiv[1] = arrDiv[0] = null;
                    }, 800);
                }else{
                    setTimeout( function(){
                        arrDiv[1].style.backgroundImage = "url(../imgs/verso.jpg)";
                        arrLogc[0] = arrLogc[1] = null;
                        arrDiv[1] = arrDiv[0] = null;
                    }, 800);
                }
                
            }
        }
    });
    root.appendChild(el);
}


/*    Configuração e estilização   */

let espacamentoTop = 60;
let tamanhoCartao = 180;
let margemCartao = 30;
let colunas = 6;
let linhas = 4;


let resizing = function(event){
    tamanhoCartao = window.innerWidth/10;
    margemCartao = tamanhoCartao/6;
    let gradeWidth = colunas*tamanhoCartao + 2*margemCartao*(colunas-1);
    let wWidth = window.innerWidth;

    root.style.gridTemplateColumns = "repeat("+colunas+", "+tamanhoCartao+"px)";
    root.style.gridTemplateRows = "repeat("+linhas+", "+tamanhoCartao+"px)";
    root.style.gridGap = margemCartao;
    root.style.left = (wWidth - gradeWidth)/2+"px";
    root.style.top = espacamentoTop+"px";
    root.style.fontSize = margemCartao*4/6+"px";
    root.style.backgroundSize = wWidth+"px "+window.innerHeight+"px";
}

window.onresize = resizing;
resizing();

let voltarBtn = document.getElementById('voltar');
voltarBtn.addEventListener("mouseenter", function(e){e.currentTarget.setAttribute('src', '../imgs/aprender-conteudo-hover.png');});
voltarBtn.addEventListener("mouseleave", function(e){e.currentTarget.setAttribute('src', '../imgs/aprender-conteudo.png');});
voltarBtn.addEventListener("click", function(e){window.location.href = "../index.html";});

let recBtn = document.getElementById('recarrega');
/*recBtn.addEventListener("click", function(){
    var el = document.getElementById('carta'+i);

    for(i = 0; i < 24; i++){
        if(arrCartao[el.getAttribute('id').substr(5)].img == undefined1){
            el.style.backgroundImage = "url(../imgs/verso.jpg)";
            el.children[0].style.display = "none";
        }
        else
            el.style.backgroundImage = "url(../imgs/verso.jpg)";
        
    }

    for(i = 0; i < arrOrganelas.length*2; i+=2){ // Atribui a imagem de uma organela às cartas ímpares e a descrição sobre ela às cartas pares
        arrCartao[i] = { virada: false, img: "../imgs/organelas/"+arrOrganelas[i/2].Nome+".png", descricao: undefined, Nome: arrOrganelas[i/2].Nome, id : 'carta'+i };
        arrCartao[i+1] = { virada: false, img: undefined, descricao: arrOrganelas[i/2].Descricao, Nome: arrOrganelas[i/2].Nome ,id : 'carta'+(i+1)};
    }
    
    for(i = 0; i < 24; i++){ // Randomiza a posição das cartas
        let idx1 = Math.floor(Math.random()*100) % 24;
        let idx2 = Math.floor(Math.random()*100) % 24;
        temp = arrCartao[ idx1 ];
        arrCartao[ idx1 ] = arrCartao[ idx2 ];
        arrCartao[ idx2 ] = temp;
    }
});*/
