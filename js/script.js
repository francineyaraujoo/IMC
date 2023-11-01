document.getElementById("btmulher").addEventListener("click", function () {
    document.getElementById("header").style.backgroundColor = "rgb(216, 153, 184)";
    document.getElementById("footer").style.backgroundColor = "rgb(216, 153, 184)";
    document.getElementById("botao").style.backgroundColor = "rgb(216, 153, 184)";
    document.getElementById("resultado").style.backgroundColor = "rgb(216, 153, 184)";
    document.getElementById("mulher"). src = "img/mulher.png";
  }, false);
  document.getElementById("bthomem").addEventListener("click", function () {
    document.getElementById("header").style.backgroundColor = "rgb(149, 191, 233)";
    document.getElementById("footer").style.backgroundColor = "rgb(149, 191, 233)";
    document.getElementById("botao").style.backgroundColor = "rgb(149, 191, 233)";
    document.getElementById("resultado").style.backgroundColor = "rgb(149, 191, 233)";
    document.getElementById("mulher"). src = "img/homem.png";
  }, false);

  function imc() {
    document.getElementById("r1p").style.backgroundColor = "white";
    document.getElementById("r1i").style.backgroundColor = "white";
    document.getElementById("r2p").style.backgroundColor = "white";
    document.getElementById("r2i").style.backgroundColor = "white";
    document.getElementById("r3p").style.backgroundColor = "white";
    document.getElementById("r3i").style.backgroundColor = "white";
    document.getElementById("r4p").style.backgroundColor = "white";
    document.getElementById("r4i").style.backgroundColor = "white";
    document.getElementById("r5p").style.backgroundColor = "white";
    document.getElementById("r5i").style.backgroundColor = "white";
    document.getElementById("r6p").style.backgroundColor = "white";
    document.getElementById("r6i").style.backgroundColor = "white";
    var peso = Number(document.getElementById("peso").value);
    var altura = Number(document.getElementById("altura").value);
    var imc = peso / (altura * altura);
    var imcElement = document.getElementById("imc");


    if (imc) {
      imc = imc.toFixed(2);

      if (imc < 18.5) {
        imcElement.innerHTML =  "Seu IMC: <br> Abaixo do peso " + imc;
        document.getElementById("r1p").style.backgroundColor = "rgb(149, 191, 233)";
        document.getElementById("r1i").style.backgroundColor = "rgb(149, 191, 233)";
      } else if (imc >= 18.5 && imc < 24.9) {
        imcElement.innerHTML = "Seu IMC: <br> Peso normal " + imc;
        document.getElementById("r2p").style.backgroundColor = "rgb(216, 153, 184)";
        document.getElementById("r2i").style.backgroundColor = "rgb(216, 153, 184)";
      } else if (imc >= 25.0 && imc < 29.9) {
        imcElement.innerHTML = "Seu IMC: <br> Acima do peso " + imc;
        document.getElementById("r3p").style.backgroundColor = "rgb(149, 191, 233)";
        document.getElementById("r3i").style.backgroundColor = "rgb(149, 191, 233)";
      } else if (imc >= 30.0 && imc < 34.9) {
        imcElement.innerHTML = "Seu IMC: <br> Obesidade Grau I " + imc;
        document.getElementById("r4p").style.backgroundColor = "rgb(149, 191, 233)";
        document.getElementById("r4i").style.backgroundColor = "rgb(149, 191, 233)";
      } else if  (imc >= 35.0 && imc < 39.9) {
        imcElement.innerHTML = "Seu IMC: <br> Obesidade Grau  II " + imc;
        document.getElementById("r5p").style.backgroundColor = "rgb(216, 153, 184)";
        document.getElementById("r5i").style.backgroundColor = "rgb(216, 153, 184)";
      } else {
        imcElement.innerHTML = "Seu IMC: <br> Obesidade Grau III " + imc;
        document.getElementById("r6p").style.backgroundColor = "rgb(149, 191, 233)";
        document.getElementById("r6i").style.backgroundColor = "rgb(149, 191, 233)";
      }
      imcElement.classList.add("imc-color");
    } else {
      alert("Por favor, insira valores válidos de peso e altura.");
      imcElement.classList.remove("imc-color");
    }

    imcElement.style.fontSize = '20px';
    
  }