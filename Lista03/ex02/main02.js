function calc(){
    let altura = parseFloat(document.getElementById("altura").value);
    let largura = parseFloat(document.getElementById("largura").value);
    let comprimento = parseFloat(document.getElementById("comprimento").value);

    const volume = comprimento * altura * largura 

    document.write("O volume da caixa é: " + volume);
}