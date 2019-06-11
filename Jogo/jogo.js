let root = document.getElementById('divGrade');

/*    Criação Cartões    */

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
    arrCartao[i] = { virada: false, img: "../imgs/"+arrOrganelas[i/2].Nome+".png", descricao: undefined};
    arrCartao[i+1] = { virada: false, img: undefined, descricao: arrOrganelas[i/2].Descricao };
}
for(i = 0; i < 24; i++){
    let idx1 = Math.floor(Math.random()*100) % 24;
    let idx2 = Math.floor(Math.random()*100) % 24;
    temp = arrCartao[ idx1 ];
    arrCartao[ idx1 ] = arrCartao[ idx2 ];
    arrCartao[ idx2 ] = temp;
}
for(i = 0; i < 24; i++){
    let el = document.createElement('div');
    //let id = document.createAttribute('id');
    el.setAttribute('id', 'carta'+i);
    el.setAttribute('class', 'elemento');
    if(arrCartao[i].img == undefined){
        let p = document.createElement('p');
        p.innerText = arrCartao[i].descricao;
        if( !arrCartao[i].virada)
            p.style.display = "none";
        el.appendChild(p);
    }
    else{
        el.style.backgroundImage = arrCartao[i].virada ? "url("+arrCartao[i].img+")" : "url(../imgs/verso.jpg)";
    }
    el.addEventListener("click", function(e){
        let id = e.currentTarget.getAttribute('id').substr(5);
        console.log(id);
        console.log(arrCartao[id]);
    });
    root.appendChild(el);
}


/*    Configuração e estilização   */

let tamanhoCartao = 180;
let margemCartao = 30;
let colunas = 6;
let linhas = 4;


let resizing = function(event){
    tamanhoCartao = window.innerWidth/10;
    margemCartao = tamanhoCartao/6;
    let gradeWidth = colunas*tamanhoCartao + 2*margemCartao*(colunas-1);
    //let gradeHeight = linhas*tamanhoCartao + 2*margemCartao*(linhas-1);
    let wWidth = window.innerWidth;
    //let wHeight = window.innerHeight;

    root.style.gridTemplateColumns = "repeat("+colunas+", "+tamanhoCartao+"px)";
    root.style.gridTemplateRows = "repeat("+linhas+", "+tamanhoCartao+"px)";
    root.style.gridGap = margemCartao;
    root.style.position = "absolute";
    root.style.left = (wWidth - gradeWidth)/2+"px";
    root.style.top = "60px";
    root.style.fontSize = margemCartao*4/6+"px";
    root.style.backgroundSize = wWidth+"px "+window.innerHeight+"px";
}

window.onresize = resizing;
resizing();

let voltarBtn = document.getElementById('voltar');
voltarBtn.addEventListener("mouseenter", function(e){e.currentTarget.setAttribute('src', '../imgs/aprender-conteudo-hover.png');});
voltarBtn.addEventListener("mouseleave", function(e){e.currentTarget.setAttribute('src', '../imgs/aprender-conteudo.png');});


