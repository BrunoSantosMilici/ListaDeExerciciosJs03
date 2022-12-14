function calc(){
    ValorA = parseInt(document.getElementById("ValorA").value);
    ValorB = parseInt(document.getElementById("ValorB").value);
    ValorC = parseInt(document.getElementById("ValorC").value);
    ValorD = parseInt(document.getElementById("ValorD").value);

    VarP = ValorA / ValorC;
    VarS = ValorB + ValorD;

    document.write(`O produto de A e C é:  ${VarP}</br>`);
    document.write(`A soma dos valores B e D é:  ${VarS}`);
}