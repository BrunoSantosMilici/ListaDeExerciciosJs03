function calc(){
    Eleitores = parseFloat(document.getElementById("Eleitorado").value);
    brancos = parseFloat(document.getElementById("brancos").value);
    nulos = parseFloat(document.getElementById("nulos").value);
    CandA = parseFloat(document.getElementById("CandA").value);
    CandB = parseFloat(document.getElementById("CandB").value);
    CandC = parseFloat(document.getElementById("CandC").value);

    Validos = CandA + CandB + CandC 
    PorcentValidos = (Validos / Eleitores) * 100
    PorcentNulos = (nulos / Eleitores) * 100
    Porcentbrancos = (brancos / Eleitores) * 100
    PorcentA = (CandA / Validos) * 100
    PorcentB = (CandB / Validos) * 100
    PorcentC = (CandC / Validos) * 100

    document.write(`A quantidade de votos válidos é de: ${Validos}` + "</br>");
    document.write(`A votação teve ${PorcentValidos}% de votos válidos` + "</br>");
    document.write(`A votação teve ${PorcentNulos}% de votos nulos` + "</br>");
    document.write(`A votação teve ${Porcentbrancos}% de votos brancos` + "</br>");
    document.write(`O candidato A teve ${PorcentA}% de votos` + "</br>");
    document.write(`O candidato B teve ${PorcentB}% de votos` + "</br>");
    document.write(`O candidato C teve ${PorcentC}% de votos` + "</br>");

}