const produtos = new Map();

produtos.set('Memoria ram', 'Componente');
produtos.set('Placa de Video', 'Componente');
produtos.set('Processador', 'Componente');
produtos.set('Monitor', 'Componente');
produtos.set('Mouse Pad', 'Periferico');


const colaboradores = new Map();

colaboradores.set('Wander','Instrutor');
colaboradores.set('Suellem', 'Instrutor');
colaboradores.set('Jackson', 'Instrutor');
colaboradores.set('Ronaldo', 'Segurança');
colaboradores.set('Jonhhy', 'Segurança');
colaboradores.set('Jaqueline', 'Cozinha');
colaboradores.set('Gecy', 'Cozinha');
colaboradores.set('Helena', 'Direção');
colaboradores.set('Luciana', 'Direção');

function getPeriferico(map) {
    let perifericos = [];
    for ([key,value] of map){
        if (value === 'Periferico'){
            perifericos.push(key);
        }
    }
    return perifericos;
}

function getProfessor(map){
    let professor = [];
    for ([key,value] of map){
        if (value === 'Instrutor'){
            professor.push(key);
        }
    }
    return professor;
}


//console.log(getProfessor(colaboradores));

//Treinando array, function para retornar apenas valores unicos

const lista = [30, 30, 40, 5, 223, 2049, 3034, 5];

function valoresUnicos(arr){
    const valoresU = new Set(arr);

    return [...valoresU];
}

//console.log(valoresUnicos(lista));

