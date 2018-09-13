# fundamentos javascript aula 28
## operadores logicos

caso de uso do E

```javascript
let [op1, op2, op3] = [true, false, true];

if(op1 && op3) {
    console.log("os 2 operandos ou mais tem que ser verdadeiros quando usamos o E");
} else if(op1 || op3) {
    console.log("apenas um dos operandos tem que ser verdadeiros quando usamos o OU");
} else if(!op2) {
    console.log("o operador de negação inverte o falso para verdadeiro e o verdadeiro para falso");
}
```
caso de uso do OU

```javascript
[op1, op2, op3] = [false, false, true];

if(op1 && op3) {
    console.log("os 2 operandos ou mais tem que ser verdadeiros quando usamos o E");
} else if(op1 || op3) {
    console.log("apenas um dos operandos tem que ser verdadeiros quando usamos o OU");
} else if(!op2) {
    console.log("o operador de negação inverte o falso para verdadeiro e o verdadeiro para falso");
}
```

caso de uso da negação

```javascript
[op1, op2, op3] = [false, false, false];

if(op1 && op3) {
    console.log("os 2 operandos ou mais tem que ser verdadeiros quando usamos o E");
} else if(op1 || op3) {
    console.log("apenas um dos operandos tem que ser verdadeiros quando usamos o OU");
} else if(!op2) {
    console.log("o operador de negação inverte o falso para verdadeiro e o verdadeiro para falso");
}
```