document.getElementById("btmulher").addEventListener("click", function () {
    document.getElementById("header").style.backgroundColor = "rgb(216, 153, 184)";
    document.getElementById("resultado").style.backgroundColor = "rgb(216, 153, 184)";
    document.getElementById("mulher"). src = "img/mulher.png";
  }, false);
  document.getElementById("bthomem").addEventListener("click", function () {
    document.getElementById("header").style.backgroundColor = "rgb(149, 191, 233)";
    document.getElementById("resultado").style.backgroundColor = "rgb(149, 191, 233)";
    document.getElementById("mulher"). src = "img/homem.png";
  }, false);

  function imc() {
    var peso = Number(document.getElementById("peso").value);
    var altura = Number(document.getElementById("altura").value);
    var imc = peso / (altura * altura);
    var imcElement = document.getElementById("imc");


    if (imc) {
      imc = imc.toFixed(2);

      if (imc < 18.5) {
        imcElement.innerHTML =  "Seu IMC: Abaixo do peso " + imc;
      } else if (imc >= 18.5 && imc < 25) {
        imcElement.innerHTML = "Seu IMC: Peso normal " + imc;
      } else if (imc >= 25 && imc < 30) {
        imcElement.innerHTML = "Seu IMC: Acima do peso " + imc;
      } else {
        imcElement.innerHTML = "Seu IMC: Obesidade Grau 1 " + imc;
      }
      imcElement.classList.add("imc-color");
    } else {
      alert("Por favor, insira valores válidos de peso e altura.");
      imcElement.classList.remove("imc-color");
    }

    imcElement.style.fontSize = '50px';
  }