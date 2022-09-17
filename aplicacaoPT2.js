let espectadores = [
    {id:1, opiniao: 1, idade: 18},
    {id:2, opiniao: 2, idade: 28},
    {id:3, opiniao: 3, idade: 38},
    {id:4, opiniao: 3, idade: 48},
    {id:5, opiniao: 2, idade: 58},
    {id:6, opiniao: 1, idade: 68},
    {id:7, opiniao: 2, idade: 78},
    {id:8, opiniao: 3, idade: 88},
    {id:9, opiniao: 1, idade: 45},
    {id:10, opiniao: 3, idade: 37},
    {id:11, opiniao: 1, idade: 51},
    {id:12, opiniao: 2, idade: 21},
    {id:13, opiniao: 3, idade: 39},
    {id:14, opiniao: 2, idade: 43},
    {id:15, opiniao: 1, idade: 56} 
];

const mediaIdades = (array) =>{


  let soma = array.reduce(function(acumulador, i){
    return acumulador + i.idade},0);
  
    return soma / espectadores.length

}

console.log(mediaIdades(espectadores))


//a quantidade de pessoas que responderam regular;

let regular = espectadores.filter(nota => nota.opiniao == 1).length;

console.log(regular);


//--> GUSTAVO BRITO, CAIO NUNES, AMANDA LOBO  Mesmo não senda da minha mesa me ajudaram MUITO para fazer essa mesa agradeço eles...
const qtdPessoas = (array) =>{

  let pessoasRegular = array.filter(function(array){return array.opiniao === 1});

  return pessoasRegular.length

}

console.log(qtdPessoas(espectadores))

//-->
//a porcentagem de pessoas que responderam bom entre todos os espectadores analisados.

const porcentagem = (array) =>{

  let espectadoresBom = array.filter(function(array){
    return array.opiniao === 2
  });

  return espectadoresBom.length / espectadores.length * 100

}

console.log(porcentagem(espectadores)+" %")
