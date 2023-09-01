let l_pesoAntigo = document.querySelector('input#num1');
let l_pesoAtual = document.querySelector('input#num2');

let l_sensiAntiga = document.querySelector('input#sensi');

let l_btnCalc = document.querySelector('button#calc');
l_btnCalc.addEventListener("click", ()=> {

  if (l_pesoAntigo.value == ''){
    alert('Favor inserir um valor valido.');
  }else if(l_pesoAtual.value == ''){
    alert('Favor inserir um valor valido.');
  }else if (l_sensiAntiga.value == "") {
    alert("Favor inserir um valor valido.")
  } else {
    let l_result = document.querySelector("p#result")

    let l_calc =
      (((l_pesoAtual.value * 100) / l_pesoAntigo.value) * l_sensiAntiga.value) /
      100

    l_result.innerText = `${l_calc}`
  }
});
