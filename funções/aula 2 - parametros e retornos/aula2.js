function area(largura, altura) {
    const area = largura * altura;
    if(area > 20) {
        console.log(`Valor acima do permitido ${area}m²`);
    } else {
        return area;
    }
}

console.log(area(2, 2)); // imprime 4
console.log(area(2)); // imprime NaN
console.log(area(2, 3, 17, 33, 45)); // imprime 6
console.log(area(5, 5)); // imprime undefined