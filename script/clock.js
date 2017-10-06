var x;
var textoBreak = 5;
var textoSession = 25;


document.getElementById("totalTime").innerHTML = textoSession;
document.getElementById("breakTime").innerHTML = textoBreak;
document.getElementById("sessionTime").innerHTML = textoSession;



document.getElementById("masBreak").onclick = function () {
  document.getElementById("breakTime").innerHTML = textoBreak = textoBreak + 1;
};

document.getElementById("menosBreak").onclick = function () {
  if (textoBreak > 1) {
    document.getElementById("breakTime").innerHTML = textoBreak = textoBreak - 1;
  };
};

document.getElementById("masSession").onclick = function () {
  document.getElementById("sessionTime").innerHTML = textoSession = textoSession + 1;
  document.getElementById("totalTime").innerHTML = textoSession;
};

document.getElementById("menosSession").onclick = function () {
  if (textoSession > 1) {
    document.getElementById("sessionTime").innerHTML = textoSession = textoSession - 1;
    document.getElementById("totalTime").innerHTML = textoSession;
  };
};

document.getElementById("startCount").onclick = function () {
  document.getElementById("masBreak").disabled = true;
  document.getElementById("menosBreak").disabled = true;
  document.getElementById("masSession").disabled = true;
  document.getElementById("menosSession").disabled = true;
  document.getElementById("countType").innerHTML = "SESSION";
  var tiempoSegundosCuenta = textoSession * 60;
  x = setInterval(function () {
    tiempoSegundosCuenta = tiempoSegundosCuenta - 1;
    var tiempoCuentaAtras = new Date(tiempoSegundosCuenta);
    var hours = Math.floor(tiempoCuentaAtras / 3600);
    var minutes = Math.floor((tiempoCuentaAtras % 3600) / 60);
    var seconds = tiempoCuentaAtras % 60;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    document.getElementById("totalTime").innerHTML = hours + ":" +
      minutes + ":" + seconds;
    if (tiempoCuentaAtras < 1 && document.getElementById("countType").innerHTML == "SESSION") {
      document.getElementById("countType").innerHTML = "BREAK";
      tiempoSegundosCuenta = textoBreak * 60;
    } else if (tiempoCuentaAtras < 1 && document.getElementById("countType").innerHTML == "BREAK") {
      document.getElementById("countType").innerHTML = "SESSION";
      tiempoSegundosCuenta = textoSession * 60;
    };
  }, 1000);
};

document.getElementById("stopCount").onclick = function () {
  document.getElementById("masBreak").disabled = false;
  document.getElementById("menosBreak").disabled = false;
  document.getElementById("masSession").disabled = false;
  document.getElementById("menosSession").disabled = false;
  clearInterval(x);
};