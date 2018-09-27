const valor = 'Global';

function minhaFuncao() {
    console.log(valor);
}

function exec() {
    const valor = 'Local';
    minhaFuncao();
}

exec(); 
/*
* Imprime Global pois recebe o ocntexto 
* léxico de quando foi declarada
*/