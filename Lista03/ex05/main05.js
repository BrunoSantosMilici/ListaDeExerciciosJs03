function calc(){
    let Dolar = parseFloat(document.getElementById("Dolar").value);
    let cot = parseFloat(document.getElementById("cot").value);
    const reais = (Dolar * cot);

    document.write("O valor convertido de dólares para reais é de " + reais + " R$");
}