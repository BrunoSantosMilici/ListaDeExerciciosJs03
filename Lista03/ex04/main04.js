function calc(){
    let reais = parseFloat(document.getElementById("reais").value);
    let cot = parseFloat(document.getElementById("cot").value);
    const dolar = (reais / cot);

    document.write("O valor convertido de reais para dólares é de " + dolar + " USD$");
}