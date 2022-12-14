function calc(){
    let ValorA = parseFloat(document.getElementById("ValorA").value);
    let ValorB = parseFloat(document.getElementById("ValorB").value);

    const resposta = Math.pow((ValorA - ValorB), 2 );

    document.write("O resultado é: " + resposta)
}