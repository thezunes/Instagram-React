//DEFAULT PARAMETERS 
 
// Os parâmetros predefinidos de uma função permitem que parâmetros 
// regulares sejam inicializados com com valores 
// iniciais caso undefined ou nenhum valor seja passado.


//ANTES

function sum(a, b){    a = typeof a === undefined ? 1 : b
    b = typeof b === undefined ? 3 : b        return a + b;
}sum() // retorna 4


// APÓS DEFAULT PARAMETERS 

function sum(a = 1, b = 3){
    return a + b;
}sum() // retorna 4sum(2) // retorna 5sum(2,4) // retorna 6

































// Template Strings são _string_s que 
//  permitem expressões embutidas. Você pode utilizar string multi-linhas e interpolação 
// de string com elas.

// Basicamente é uma nova forma de 
// criar strings e tornar o seu código um pouco mais legível.





// TEMPLATE STRINGS 

//ANTES



const a = 5;
const b = 10;
console.log("Fifteen is " + (a + b) + " and\nnot " + (2 * a + b) + ".");

//DEPOIS

const a = 5;
const b = 10;
console.log(`Fifteen is ${a + b} and
not ${2 * a + b}.`);





































//Destructuring


// É uma expressão que permite
//  extrair dados de um Array ou Object em variáveis distintas. 

// Uma declaração destructuring cria variáveis a partir dos valores 
// de um array ou das chaves de um objeto.


//ANTES

//ARRAY
const colors = ['red', 'green', 'yellow'];
const red = colors[0];

//OBJETO

const dog = { name: 'Joe', owner: 'Carlos' };
const name = dog.name;


//DEPOIS
//ARRAY

const colors = ['red', 'green', 'yellow'];
const [red, green, yellow] = colors;

//OBJETO

const city = { name: 'Ribeirao Preto', temperature: 42 };
const { name, temperature } = city;













































//STRICT MODE
