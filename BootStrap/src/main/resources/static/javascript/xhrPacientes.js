/**
 * 
 */
function getPacientes() {
	var xhr = new XMLHttpRequest();
	xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");
	xhr.addEventListener("load", function() {

		if (xhr.status == 200) {
			var resposta = JSON.parse(xhr.responseText);
			resposta.forEach(function(paciente) {
				var tabela = document.querySelector(".table-body");
				var trPaciente = gerarElementoTr(paciente);
				inserirPaiFilho(tabela, trPaciente);
			})
		} else {
			var array = [ xhr.status ];
			inserirLiErro(array);
		}
	})

	xhr.send();
	console.log("teste1");
}