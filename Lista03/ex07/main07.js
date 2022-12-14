function calc(){
    ValorA = parseFloat(document.getElementById("ValorA").value);
    ValorB = parseFloat(document.getElementById("ValorB").value);
    ValorC = parseFloat(document.getElementById("ValorC").value);

    const Resultado = Math.pow((ValorA + ValorB + ValorC),2);

    document.write("O resultado é: " + Resultado);
}