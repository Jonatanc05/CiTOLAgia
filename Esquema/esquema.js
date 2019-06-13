let root = document.getElementById('root');
let celulaAn = document.getElementById('animal');
let celulaVeg = document.getElementById('vegetal');
let celulaPro = document.getElementById('procarionte');

celulaVeg.style.display = "none";
celulaPro.style.display = "none";


function resizing(){
    let wWidth = window.innerWidth;
    let wHeight = window.innerHeight;

    let h1 = celulaAn.children[0];
    h1.style.fontSize = wHeight/10+"px";
    celulaAn.style.height = wHeight*9/10+"px";

}
resizing();
window.onresize = resizing;

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

