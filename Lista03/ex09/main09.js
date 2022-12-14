function calc(){
    SalarioMensal = parseFloat(document.getElementById("SalarioMensal").value);
    Reajuste = parseFloat(document.getElementById("Reajuste").value);

    NovoSalario = SalarioMensal + ((SalarioMensal * Reajuste)/100)
    document.write(`O novo salário é de:  ${NovoSalario} R$`)
}