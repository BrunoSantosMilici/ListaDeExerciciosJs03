function calc(){
  let A = parseFloat(document.getElementById("A").value);  
  let B = parseFloat(document.getElementById("B").value);  
  let C = parseFloat(document.getElementById("C").value);  

  const resposta = Math.pow(A,2) + Math.pow(B,2) + Math.pow(C,2)

  document.write("O resultado é: " + resposta)
}