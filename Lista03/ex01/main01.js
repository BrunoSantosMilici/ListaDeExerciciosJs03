function calc(){
    ValorA = parseFloat(document.getElementById("ValorA").value); 
    ValorB = parseFloat(document.getElementById("ValorB").value);
    ValorC = parseFloat(document.getElementById("ValorC").value);
    ValorD = parseFloat(document.getElementById("ValorD").value);

    const amb = ValorA + ValorB
    const amc = ValorA + ValorC
    const amd = ValorA + ValorD 

    const bmc = ValorB + ValorC
    const bmd = ValorB + ValorD
    const cmd = ValorC + ValorD

    const axb = ValorA * ValorB
    const axc = ValorA * ValorC
    const axd = ValorA * ValorD
    const bxc = ValorB * ValorC
    const bxd = ValorB * ValorD
    const cxd = ValorC * ValorD

   document.write("A soma dos valores A e B é:",amb + "</br>")
   document.write("A soma dos valores A e C é:",amc + "</br>")
   document.write("A soma dos valores A e D é:",amd + "</br>")
   document.write("A soma dos valores B e C é:",bmc + "</br>")
   document.write("A soma dos valores B e D é:",bmd + "</br>")
   document.write("A soma dos valores C e D é:",cmd + "</br>")
   document.write("---------------------------------------------------" + "</br>")
   document.write("A multiplicação dos valores A e B é:",axb + "</br>")
   document.write("A multiplicação dos valores A e C é:",axc + "</br>")
   document.write("A multiplicação dos valores A e D é:",axd + "</br>")
   document.write("A multiplicação dos valores B e C é:",bxc + "</br>")
   document.write("A multiplicação dos valores B e D é:",bxd + "</br>")
   document.write("A multiplicação dos valores C e D é:",cxd + "</br>")
 + "</br>"
}