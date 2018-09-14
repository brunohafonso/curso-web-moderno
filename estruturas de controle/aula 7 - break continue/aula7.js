/*
* O break é usado para parar a execução do bloco mais proximo 
* dele e sair de um laço de repetição
*/

/*
* o continue ele pula a repetição atual e vai para a próxima
*/

const nums = [6.7, 7.5, 5, 8, 9, 10, 5];

for(let x in nums) {
    if(nums[x] == 5) {
        break;
    }
    console.log(`x = ${nums[x]}`);
} 

// imprime x = 6.7 x = 7.5

for(let x in nums) {
    if(nums[x] == 5) {
        continue;
    }
    console.log(`x = ${nums[x]}`);
}

// imprime x = 6.7 x = 7.5 x = 8 x = 9 x = 10

// Exemplo de rótulo
/*
* O rótulo serve para levar até o bloco de código, mas evitar
*/

externo: for(let a in nums) {
    for(let b in nums) {
        if(a == 8 && b == 9) break externo
        console.log(`Par = ${a},${b}`);
    }
}