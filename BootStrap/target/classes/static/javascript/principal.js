var botaoSalvar = document.querySelector("#botaoSalvar");
botaoSalvar.addEventListener("click", geradorElementos);

var campoFiltro = document.querySelector(".campoFiltro");
campoFiltro.addEventListener("input", filtroNomes)

//var botaoXhrPacientes = document.querySelector(".xhtPacientes");
//botaoXhrPacientes.addEventListener("click", getPacientes);

var eventoTabelaInteira = document.querySelector(".table");
eventoTabelaInteira.addEventListener("click", botaoDeletar);	

window.onload = getPacientes;