let pessoas = [
    {id: 1, altura: 1.70, sexo: 'M'},
    {id: 2, altura: 1.60, sexo: 'F'},
    {id: 3, altura: 1.80, sexo: 'M'},
    {id: 4, altura: 1.90, sexo: 'F'},
    {id: 5, altura: 1.50, sexo: 'M'},
    {id: 6, altura: 1.60, sexo: 'F'},
    {id: 7, altura: 1.70, sexo: 'M'},
    {id: 8, altura: 1.80, sexo: 'F'},
    {id: 9, altura: 1.90, sexo: 'M'},
    {id: 10, altura: 1.50, sexo: 'F'},
    {id: 11, altura: 1.60, sexo: 'M'},
    {id: 12, altura: 1.70, sexo: 'F'},
    {id: 13, altura: 1.80, sexo: 'M'},
    {id: 14, altura: 1.90, sexo: 'F'},
    {id: 15, altura: 1.50, sexo: 'M'}
];

const maiorMenorAltura = (array) =>{
    let maior = array[0].altura;
    let menor = array[0].altura;

   	for (let i = 0; i < array.length; i++) {
        if(array[i].altura > maior){
        maior = array[i].altura
      }
      if(array[i].altura < menor){
        menor = array[i].altura
      }

}
  return [maior,menor]
}

console.log(`Maior altura: ${maiorMenorAltura(pessoas)[0]}m`);
console.log(`Menor altura: ${maiorMenorAltura(pessoas)[1]}m`);



const mediaAltura = (array) =>{


  	let mulheres = array.filter(function(array){
      return array.sexo === 'F'
    });
    
    let soma = mulheres.reduce(function(acumulador, i){
      return acumulador + i.altura},0);
    
      return soma / mulheres.length

}

console.log(mediaAltura(pessoas))

const qtdHomens = (array) =>{

  let homens = array.filter(function(array){
    return array.sexo === 'M'
  });

  return homens.length

}

console.log(qtdHomens(pessoas))