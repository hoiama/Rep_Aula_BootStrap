
function validadorPesoAltura(paciente, formulario){
	var arrayErros = [];
	formulario.querySelector("#label-peso").classList.remove("paciente-invalido");
	formulario.querySelector("#label-altura").classList.remove("paciente-invalido");
	formulario.querySelector("#label-nome").classList.remove("paciente-invalido");
	
	if(paciente.peso >= 300 || paciente.peso <= 0){
		formulario.querySelector("#label-peso").classList.add("paciente-invalido");
		arrayErros.push("Erro de Peso");
	}

	if(paciente.altura >= 3 || paciente.altura <= 0){
	    formulario.querySelector("#label-altura").classList.add("paciente-invalido");
	    arrayErros.push("Erro de altura");
	}
	
	if(paciente.nome == ""){
	    formulario.querySelector("#label-nome").classList.add("paciente-invalido");
	    arrayErros.push("Erro de nome");
	}
	
	inserirLiErro(arrayErros);
	return arrayErros;
}

function inserirLiErro(arrayErros){
	var ulErros = document.querySelector("#mensagem-erro");
	ulErros.innerHTML ="";
	arrayErros.forEach(function(erro) {
	var li = criadorElementos("li", "erros", erro);
	inserirPaiFilho(ulErros, li);
	})
}